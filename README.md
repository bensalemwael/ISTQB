# ISTQB CTFL v4.0 — Révision (FR)

Repo de révision pour la certification **ISTQB Testeur Certifié Niveau Fondation v4.0** (avril 2023), en français, basé sur le syllabus officiel CFTL/ISTQB.

> ⚠️ Ce projet est un **support d'étude non officiel**. Le syllabus officiel reste la référence. Voir [istqb.org](https://www.istqb.org) et [cftl.fr](https://www.cftl.fr).

## Contenu

- **[chapters/](chapters/)** — Fiches de révision détaillées par chapitre (1 à 6)
- **[fiches/](fiches/)** — Fiches synthèses (mots-clés, principes, formules)
- **[quiz/](quiz/)** — Quiz interactif en ligne (HTML/JS, ouvrable directement dans un navigateur)

## L'examen en chiffres

| Élément | Valeur |
|---|---|
| Durée | 60 min (75 min si non-natif anglais) |
| Questions | 40 QCM |
| Seuil de réussite | 65 % (26/40) |
| Niveaux cognitifs | K1 (se souvenir), K2 (comprendre), K3 (appliquer) |

## Plan du syllabus v4.0

| Ch. | Titre | Durée min. | Points clés |
|---|---|---|---|
| 1 | Fondamentaux des tests | 180 min | Objectifs, 7 principes, processus, rôles |
| 2 | Tests dans le cycle de vie | 130 min | TDD/ATDD/BDD, DevOps, shift-left, niveaux, types |
| 3 | Test statique | 80 min | Revues (informelle, walkthrough, technique, inspection) |
| 4 | Analyse & conception | 390 min | Partitions, valeurs limites, tables décision, transitions d'état, boîte blanche, ATDD |
| 5 | Gestion des activités | 335 min | Plan, estimation, risques, métriques, défauts, pyramide, quadrants |
| 6 | Outils de test | 20 min | Catégories, bénéfices, risques |

## Démarrer le quiz

### Option 1 — Ouvrir le fichier directement
Double-cliquer sur [quiz/index.html](quiz/index.html) — le quiz fonctionne 100 % hors-ligne.

### Option 2 — Serveur local (recommandé)
```bash
cd quiz
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

### Option 3 — GitHub Pages
Activer Pages dans `Settings → Pages → Branch: main, Folder: /quiz` et accéder à `https://<user>.github.io/<repo>/`.

## Fonctionnalités du quiz

- ✅ 80+ questions couvrant les 6 chapitres
- ✅ Filtres par chapitre et par niveau cognitif (K1/K2/K3)
- ✅ Mode examen blanc (40 questions, 60 minutes, chrono)
- ✅ Mode entraînement (feedback immédiat avec explication)
- ✅ Score, historique local (localStorage)
- ✅ Mélange aléatoire des questions et réponses

## Méthode de révision suggérée (4 semaines)

1. **S1** — Lire chapitre 1 + 2, faire les quiz par chapitre (K1/K2)
2. **S2** — Lire chapitre 3 + 4, faire les quiz, pratiquer les techniques K3
3. **S3** — Lire chapitre 5 + 6, faire les quiz complets
4. **S4** — Examens blancs à répétition, revoir les chapitres faibles

## Ressources complémentaires

- Syllabus officiel CFTL v4.0 : [cftl.fr](https://www.cftl.fr/syllabus)
- Glossaire des tests v3.2 (CFTL/ISTQB)
- Examens blancs officiels

## Licence

Le contenu de ce repo (notes, quiz) est publié sous **MIT**. Les textes cités du syllabus restent la propriété de l'**ISTQB®** / **CFTL** et sont reproduits à des fins pédagogiques (fair use éducatif).

## Contribuer

Issues et PRs bienvenues — corrections, nouvelles questions, traductions, exemples.
