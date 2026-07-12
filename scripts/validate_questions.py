#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Valide quiz/questions.json : structure, unicité des IDs, cohérence des réponses.

Usage : python scripts/validate_questions.py
Sortie : code 0 si tout est valide, 1 sinon (utilisé par la CI).
"""
import json
import sys
from collections import Counter
from pathlib import Path

QUESTIONS_PATH = Path(__file__).resolve().parent.parent / "quiz" / "questions.json"
VALID_LEVELS = {"K1", "K2", "K3"}
EXAM_DISTRIBUTION = {1: 8, 2: 6, 3: 4, 4: 11, 5: 9, 6: 2}


def main() -> int:
    errors = []

    try:
        data = json.loads(QUESTIONS_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        print(f"[ERREUR] JSON invalide : {exc}")
        return 1

    questions = data.get("questions")
    if not isinstance(questions, list) or not questions:
        print("[ERREUR] La clé 'questions' est absente ou vide.")
        return 1

    seen_ids = set()
    for i, q in enumerate(questions):
        ref = q.get("id", f"index {i}")

        for field in ("id", "chapter", "level", "question", "options", "answer", "explanation"):
            if field not in q:
                errors.append(f"{ref} : champ '{field}' manquant")

        if q.get("id") in seen_ids:
            errors.append(f"{ref} : ID en double")
        seen_ids.add(q.get("id"))

        if q.get("level") not in VALID_LEVELS:
            errors.append(f"{ref} : niveau '{q.get('level')}' invalide (attendu K1, K2 ou K3)")

        options = q.get("options")
        if not isinstance(options, list) or len(options) != 4:
            errors.append(f"{ref} : doit avoir exactement 4 options (l'examen est à réponse unique)")
        elif len(set(options)) != 4:
            errors.append(f"{ref} : options dupliquées")

        answer = q.get("answer")
        if not isinstance(answer, int) or not 0 <= answer <= 3:
            errors.append(f"{ref} : 'answer' doit être un entier entre 0 et 3")

        if "answers" in q:
            errors.append(f"{ref} : les questions à réponses multiples ne sont pas autorisées")

        if not str(q.get("explanation", "")).strip():
            errors.append(f"{ref} : explication vide")

    # Le mode examen a besoin d'assez de questions par chapitre
    by_chapter = Counter(q.get("chapter") for q in questions)
    for chapter, needed in EXAM_DISTRIBUTION.items():
        available = by_chapter.get(chapter, 0)
        if available < needed:
            errors.append(
                f"Chapitre {chapter} : {available} question(s) pour {needed} requises "
                f"par le mode examen blanc"
            )

    if errors:
        print(f"[ÉCHEC] {len(errors)} problème(s) détecté(s) :\n")
        for err in errors:
            print(f"  - {err}")
        return 1

    levels = Counter(q["level"] for q in questions)
    print(f"[OK] {len(questions)} questions valides")
    print(f"     Par chapitre : {dict(sorted(by_chapter.items()))}")
    print(f"     Par niveau   : {dict(sorted(levels.items()))}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
