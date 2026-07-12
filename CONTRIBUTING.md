# Contribuer

Merci de vouloir améliorer ce support de révision ! Toute contribution qui aide les prochains candidats est la bienvenue.

## Ce qui est particulièrement utile

- ➕ **De nouvelles questions de quiz** — surtout **K3** (calculs) et les chapitres 1, 2 et 3, moins fournis
- 🐛 **Corriger une réponse ou une explication inexacte** — c'est la contribution la plus précieuse
- 📝 Clarifier un passage de cours, ajouter un exemple, un tableau comparatif
- 🌍 Traduire le contenu vers d'autres langues
- ♿ Améliorer l'accessibilité ou l'ergonomie du quiz

## Règle d'or : citer le syllabus

Toute correction de contenu (réponse, définition, explication) doit **citer la section du syllabus officiel CTFL v4.0** qui la justifie — par exemple « syllabus 4.2.2 — Analyse des valeurs limites ».

Le syllabus prime toujours sur l'expérience terrain : l'examen évalue la connaissance du syllabus, pas les pratiques d'une entreprise donnée.

## Ajouter une question au quiz

Les questions vivent dans [quiz/questions.json](quiz/questions.json). Format :

```json
{
  "id": "Q4-052",
  "chapter": 4,
  "level": "K3",
  "question": "Un champ accepte des entiers de 1 à 100 inclus. En appliquant l'analyse des valeurs limites à 2 valeurs, quelles valeurs faut-il tester ?",
  "options": [
    "1 et 100",
    "0, 1, 100 et 101",
    "0, 1, 2, 99, 100 et 101",
    "1, 50 et 100"
  ],
  "answer": 1,
  "explanation": "La BVA à 2 valeurs teste chaque valeur limite et sa plus proche voisine dans la partition adjacente : 1 et 0 pour la limite basse, 100 et 101 pour la limite haute."
}
```

### Règles de format

| Champ | Règle |
|---|---|
| `id` | `Q<chapitre>-<numéro sur 3 chiffres>`, unique. Prendre le numéro suivant du chapitre. |
| `chapter` | Entier de 1 à 6 |
| `level` | `"K1"`, `"K2"` ou `"K3"` |
| `options` | **Exactement 4** options — l'examen n'a que des questions à réponse unique |
| `answer` | Index de la bonne réponse (**0 à 3**). Varier la position d'une question à l'autre. |
| `explanation` | **Obligatoire.** 2-3 phrases. Pour une K3, **montrer le calcul**. |

### Style attendu

Les questions doivent ressembler à celles de l'examen officiel :

- ✅ **Mises en situation concrètes** : « Vous testez une application de réservation… »
- ✅ Formulations officielles : « LE PLUS susceptible », « LE MIEUX », « N'EST PAS », « laquelle est CORRECTE »
- ✅ Associations : « 1C, 2A, 3B, 4D »
- ✅ Distracteurs **plausibles** (une option manifestement absurde n'apprend rien)
- ❌ Éviter la pure restitution de définition sans contexte
- ❌ Pas de question à réponses multiples (l'examen n'en contient pas)

## Vérifier avant de proposer une PR

```bash
# Le JSON doit être valide et cohérent
python -m json.tool quiz/questions.json > /dev/null && echo "JSON OK"
```

La CI vérifie automatiquement à chaque PR : JSON valide, IDs uniques, 4 options par question, index de réponse valide, explication présente.

**Vérifiez vos calculs deux fois** pour les questions K3 — une question fausse est pire que pas de question.

## Processus

1. Forker le repo et créer une branche (`git checkout -b ajout-questions-ch3`)
2. Faire les modifications
3. Vérifier que la CI passe en local (commande ci-dessus)
4. Ouvrir une Pull Request en expliquant ce qu'elle apporte, en citant le syllabus si c'est une correction

Pour un simple signalement d'erreur, une **issue** suffit — indiquez l'ID de la question et pourquoi la réponse vous semble incorrecte.

## Licence des contributions

En contribuant, vous acceptez que votre contribution soit publiée sous la licence **MIT** du projet.

Merci, et bonne révision ! 💪
