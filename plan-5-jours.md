# 🎯 Plan intensif 5 jours — ISTQB CTFL v4.0 (FR)

> Examen dans 5 jours. Objectif : **26/40 minimum** (65 %). Stratégie : viser 32+/40 pour avoir de la marge.
> Temps de travail : ~4-5 h/jour en 3 blocs. La régularité bat le marathon.

## La logique du plan

L'examen n'est pas uniforme — investis ton temps là où sont les points :

| Ch. | Thème | Questions à l'examen | Poids | Priorité |
|---|---|---|---|---|
| 4 | Analyse & conception (techniques) | **11** | 27,5 % | 🔴 MAX |
| 5 | Gestion des activités de test | **9** | 22,5 % | 🔴 MAX |
| 1 | Fondamentaux | **8** | 20 % | 🟠 Haute |
| 2 | Cycle de vie | **6** | 15 % | 🟠 Haute |
| 3 | Test statique | **4** | 10 % | 🟡 Moyenne |
| 6 | Outils | **2** | 5 % | 🟢 Basse |

**Ch4 + Ch5 = 50 % de l'examen.** Et les ~8 questions K3 (calculs) sont presque toutes dans ces deux chapitres. C'est là que se joue ta réussite.

Niveaux cognitifs : **K1** = 8 q. (mémorisation pure), **K2** = 24 q. (comprendre/distinguer), **K3** = 8 q. (appliquer/calculer).

---

## 📅 Jour 1 — Fondamentaux + Cycle de vie (Ch1 + Ch2 = 14 questions)

| Bloc | Durée | Activité |
|---|---|---|
| Matin | 1h30 | Lire [chapters/01-fondamentaux-tests.md](chapters/01-fondamentaux-tests.md) en entier. Mémoriser : 7 principes, erreur→défaut→défaillance, 7 activités du processus, 5 niveaux d'indépendance. |
| Midi | 1h | Quiz chapitre 1 (toutes les questions, mode entraînement). Noter chaque erreur dans un fichier `mes-erreurs.md`. |
| Après-midi | 1h30 | Lire [chapters/02-cycle-vie-developpement.md](chapters/02-cycle-vie-developpement.md). Focus : TDD/ATDD/BDD, shift-left, DevOps, niveaux vs types de test, tests de maintenance. |
| Soir | 45 min | Quiz chapitre 2 + relire [fiches/01-fiche-synthese.md](fiches/01-fiche-synthese.md) sections Ch1-Ch2. |

**✔️ Critère de sortie du jour : ≥ 80 % au quiz Ch1 et Ch2.**

## 📅 Jour 2 — LE gros morceau : techniques de test (Ch4 = 11 questions)

| Bloc | Durée | Activité |
|---|---|---|
| Matin | 2h | Lire [chapters/04-analyse-conception-tests.md](chapters/04-analyse-conception-tests.md). Puis [fiches/02-exercices-k3-corriges.md](fiches/02-exercices-k3-corriges.md) : refaire CHAQUE exercice EP et BVA sur papier, sans regarder la solution. |
| Après-midi | 1h30 | Suite des exercices K3 : tables de décision + transitions d'état. Dessiner les tables à la main — à l'examen tu n'auras que du brouillon. |
| Soir | 1h30 | Exercices couverture instructions/branches. Puis quiz chapitre 4 complet. |

**✔️ Critère de sortie : savoir dérouler BVA 2-valeurs ET 3-valeurs sans hésiter, construire une table de décision 2^3, compter les cas pour 0-switch.**

## 📅 Jour 3 — Gestion des tests (Ch5 = 9 questions) + Test statique (Ch3 = 4 questions)

| Bloc | Durée | Activité |
|---|---|---|
| Matin | 2h | Lire [chapters/05-gestion-activites-tests.md](chapters/05-gestion-activites-tests.md). Mémoriser : contenu du plan de test, estimation 3 points (E et SD — refaire les calculs de la fiche K3), risque = probabilité × impact, sévérité ≠ priorité, pyramide + quadrants. |
| Après-midi | 1h | Lire [chapters/03-test-statique.md](chapters/03-test-statique.md). Tableau des 4 types de revues PAR CŒUR (qui anime, préparation, formalité). Les 5 activités du processus de revue. |
| Soir | 1h30 | Quiz chapitres 5 + 3. Puis lire [chapters/06-outils-test.md](chapters/06-outils-test.md) (30 min suffisent — 2 questions à l'examen). |

**✔️ Critère de sortie : ≥ 75 % aux quiz Ch5 et Ch3 ; réciter les 4 types de revues.**

## 📅 Jour 4 — Examens blancs + colmatage

| Bloc | Durée | Activité |
|---|---|---|
| Matin | 1h15 | **Examen blanc n°1** dans le quiz (mode examen, 40 q., 60 min chrono, conditions réelles : pas de pause, pas de notes). Corriger : relire l'explication de CHAQUE erreur. |
| Après-midi | 1h30 | Faire l'examen blanc officiel PDF (`Foundation-Exam_Blanc_Numéro3`). Corriger de la même façon. |
| Fin d'après-midi | 1h | Relire [fiches/03-pieges-examen.md](fiches/03-pieges-examen.md) en entier. Croiser avec tes erreurs des deux blancs : quel piège t'a eu ? |
| Soir | 1h | Revenir sur ton chapitre le plus faible (quiz ciblé + relecture). |

**✔️ Critère de sortie : ≥ 28/40 aux deux examens blancs. Sinon → Jour 5 matin cible ce qui a échoué.**

## 📅 Jour 5 (veille) — Consolidation, pas de nouveauté

| Bloc | Durée | Activité |
|---|---|---|
| Matin | 1h15 | **Examen blanc n°2** (mode examen). Objectif ≥ 30/40. |
| Midi | 1h | [fiches/04-glossaire-essentiel.md](fiches/04-glossaire-essentiel.md) : balayer les termes, cocher ceux qui hésitent, les réécrire à la main. |
| Après-midi | 1h | Relire [fiches/01-fiche-synthese.md](fiches/01-fiche-synthese.md) + [fiches/03-pieges-examen.md](fiches/03-pieges-examen.md). Refaire de tête : formule 3 points, BVA 2 vs 3 valeurs, tableau des revues. |
| Soir | 30 min | Relire `mes-erreurs.md`. **Puis STOP à 20h.** Dormir. Le sommeil consolide plus qu'une heure de révision de plus. |

## 📅 Jour J — Avant l'épreuve

- 30 min avant : relire UNIQUEMENT [fiches/01-fiche-synthese.md](fiches/01-fiche-synthese.md). Rien d'autre.
- Pendant l'examen (60 min / 40 q. = 1 min 30 par question) :
  1. **Premier passage** : répondre à tout ce qui est sûr, marquer les douteuses (~35-40 min).
  2. **Deuxième passage** : traiter les marquées, faire les calculs K3 posément au brouillon (~15 min).
  3. **Jamais laisser de case vide** — pas de points négatifs.
  4. Attention aux **négations** (« n'est PAS », « JAMAIS ») : les surligner mentalement, reformuler la question.
  5. Douter entre deux réponses → choisir celle qui colle au **vocabulaire exact du syllabus**, pas à ton expérience terrain.

---

## Règles transverses (tous les jours)

- 📓 Tenir `mes-erreurs.md` : chaque question ratée → 1 ligne (notion + règle exacte). C'est TA fiche la plus précieuse au Jour 5.
- 🔁 Chaque matin : 10 min de relecture de `mes-erreurs.md` de la veille avant d'attaquer.
- ⏱️ Toujours faire les quiz en se chronométrant (~1 min 30/question max).
- 🛑 Pas plus de 5h/jour. Au-delà, la rétention s'effondre.
