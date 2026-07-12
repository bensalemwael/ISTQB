# ISTQB CTFL v4.0 — Révision en français 🇫🇷

> Tout le nécessaire pour préparer et **réussir** la certification **ISTQB Testeur Certifié Niveau Fondation v4.0** (avril 2023) : cours condensés, exercices K3 corrigés, pièges d'examen, glossaire et un **quiz de 190+ questions** avec mode examen blanc.

[![Licence MIT](https://img.shields.io/badge/licence-MIT-green.svg)](LICENSE)
[![Syllabus](https://img.shields.io/badge/syllabus-CTFL%20v4.0-blue.svg)](https://www.cftl.fr)
[![Questions](https://img.shields.io/badge/quiz-193%20questions-orange.svg)](quiz/)
[![Certifié](https://img.shields.io/badge/testé%20en%20conditions%20réelles-certification%20obtenue-success.svg)](#)

> ⚠️ **Support d'étude non officiel.** Le syllabus officiel reste la seule référence pour l'examen. Voir [istqb.org](https://www.istqb.org) et [cftl.fr](https://www.cftl.fr).

> 📖 **Repo en lecture seule.** Il est mis à disposition librement pour vos révisions, mais il n'accepte pas de contributions externes : les mises à jour sont faites par son auteur. Vous êtes libre de le **forker** pour l'adapter à vos besoins.

---

## 🚀 Démarrage rapide

**1. Lancer le quiz** (aucune installation, 100 % hors-ligne) :

```bash
git clone https://github.com/bensalemwael/ISTQB.git
cd ISTQB/quiz
python -m http.server 8000   # puis ouvrir http://localhost:8000
```

Ou plus simple encore : **double-cliquer sur [quiz/index.html](quiz/index.html)**.

**2. Choisir son plan de révision** selon le temps disponible (voir [Plans de révision](#-plans-de-révision)).

**3. Réviser les chapitres**, faire les quiz, noter ses erreurs, recommencer.

---

## 📚 Ce que contient ce repo

| Dossier / fichier | Contenu |
|---|---|
| **[chapters/](chapters/)** | Les **6 chapitres** du syllabus, condensés et structurés (tableaux, encarts « À l'examen », quiz éclair) |
| **[fiches/01-fiche-synthese.md](fiches/01-fiche-synthese.md)** | 🧠 **Mémo express** — tout le syllabus en 2 pages, à relire 30 min avant l'examen |
| **[fiches/02-exercices-k3-corriges.md](fiches/02-exercices-k3-corriges.md)** | ✍️ **16 exercices K3 corrigés pas à pas** — EP, BVA, tables de décision, transitions d'état, couverture, estimation 3 points |
| **[fiches/03-pieges-examen.md](fiches/03-pieges-examen.md)** | ⚠️ **23 pièges classiques** — les confusions qui font échouer, avec les questions types |
| **[fiches/04-glossaire-essentiel.md](fiches/04-glossaire-essentiel.md)** | 📖 **~110 termes FR/EN** groupés par chapitre |
| **[quiz/](quiz/)** | 🎯 **Quiz interactif** — 193 questions, mode examen blanc chronométré |
| **[plan-5-jours.md](plan-5-jours.md)** | 📅 Plan de révision intensif, heure par heure |

---

## 🎯 Le quiz

**193 questions** rédigées au format de l'examen officiel (mises en situation, associations « 1C, 2A, 3B, 4D », scénarios chiffrés) :

- ✅ **43 questions K3** (calculs) avec correction détaillée : couverture BVA en %, Each Choice avec contraintes, transitions minimales, estimation par ratios, priorisation avec dépendances…
- ✅ **Mode examen blanc** : 40 questions, 60 min chrono, **distribution officielle par chapitre (8/6/4/11/9/2)** conforme aux *Exam Structure Tables v1.3*
- ✅ **Mode entraînement** : feedback immédiat avec explication après chaque réponse
- ✅ Filtres par chapitre et par niveau cognitif (K1/K2/K3)
- ✅ Score, historique local (localStorage), mélange aléatoire, reprise des erreurs

### Le publier en ligne (GitHub Pages)

`Settings → Pages → Branch: main, Folder: /quiz` → accessible sur `https://<votre-user>.github.io/<repo>/`

---

## 📊 L'examen en chiffres

| Élément | Valeur |
|---|---|
| Questions | **40 QCM** (une seule bonne réponse) |
| Durée | **60 min** (75 min si l'examen n'est pas dans votre langue maternelle) |
| Seuil de réussite | **65 % — soit 26/40** |
| Niveaux cognitifs | K1 (se souvenir) · K2 (comprendre) · K3 (appliquer) |
| Points négatifs | ❌ Aucun — **ne jamais laisser une question vide** |

### Où sont les points ? (distribution officielle)

| Ch. | Titre | **Questions** | Poids | Priorité de révision |
|---|---|---|---|---|
| 1 | Fondamentaux des tests | **8** | 20 % | 🟠 Haute |
| 2 | Tests dans le cycle de vie | **6** | 15 % | 🟠 Haute |
| 3 | Test statique | **4** | 10 % | 🟡 Moyenne |
| 4 | Analyse & conception des tests | **11** | 27,5 % | 🔴 **Maximale** |
| 5 | Gestion des activités de test | **9** | 22,5 % | 🔴 **Maximale** |
| 6 | Outils de test | **2** | 5 % | 🟢 Basse |

> 💡 **Ch4 + Ch5 = 50 % de l'examen** — et c'est là que se trouvent la quasi-totalité des ~8 questions K3 (calculs). C'est le meilleur retour sur temps investi.

---

## 📅 Plans de révision

### ⚡ Examen dans moins d'une semaine
👉 Suivre le **[plan intensif 5 jours](plan-5-jours.md)** : découpage bloc par bloc, critères de sortie quotidiens, stratégie du jour J.

### 📆 4 semaines devant soi
1. **Semaine 1** — Chapitres 1 et 2 + quiz par chapitre (K1/K2)
2. **Semaine 2** — Chapitres 3 et 4 + [exercices K3](fiches/02-exercices-k3-corriges.md) refaits **sur papier**
3. **Semaine 3** — Chapitres 5 et 6 + quiz complets
4. **Semaine 4** — Examens blancs à répétition + [pièges d'examen](fiches/03-pieges-examen.md), en ciblant les chapitres faibles

### 🌙 La veille et le jour J
- **Veille** : uniquement la [fiche synthèse](fiches/01-fiche-synthese.md) et vos erreurs notées. **Pas de nouveauté.** Dormir tôt.
- **30 min avant** : la fiche synthèse, rien d'autre.
- **Pendant** : 1 min 30 par question. Premier passage sur les questions sûres, second sur les douteuses. Attention aux négations (« n'est **PAS** », « **JAMAIS** »). En cas de doute, choisir la réponse qui colle au **vocabulaire exact du syllabus**, pas à son expérience terrain.

---

## 💡 Conseils qui font la différence

1. **Tenir un fichier `mes-erreurs.md`** (ignoré par git) : une ligne par question ratée = notion + règle exacte. C'est la fiche la plus précieuse la veille de l'examen.
2. **Refaire les exercices K3 à la main**, sans regarder la solution. À l'examen, il n'y a qu'un brouillon.
3. **Le vocabulaire prime sur l'expérience.** Beaucoup de professionnels expérimentés échouent en répondant « comme sur le terrain » plutôt que selon le syllabus.
4. **Faire au moins deux examens blancs complets en conditions réelles** (chrono, sans notes) avant le jour J.

---

## 📌 Utilisation et réutilisation

Ce repo est un **support de révision en lecture seule**. Il n'accepte pas de contributions externes (pull requests), mais la licence MIT vous autorise à :

- ✅ **Cloner ou forker** le repo pour réviser
- ✅ **Adapter le contenu** à vos besoins dans votre propre fork (ajouter vos questions, vos notes)
- ✅ **Le partager** avec d'autres candidats

Si vous repérez une erreur de contenu, n'hésitez pas à la signaler — merci d'indiquer l'**ID de la question** et la **section du syllabus** concernée.

---

## 📖 Ressources officielles

- **Syllabus CTFL v4.0 (FR)** — [cftl.fr/syllabus](https://www.cftl.fr/syllabus)
- **Glossaire des tests ISTQB** — [glossary.istqb.org](https://glossary.istqb.org)
- **Examens blancs officiels** — disponibles sur le site du CFTL / ISTQB
- **Exam Structure Tables** — répartition officielle des questions par objectif d'apprentissage

---

## ⚖️ Licence

Le contenu original de ce repo (notes, quiz, exercices) est publié sous licence **[MIT](LICENSE)** — libre de le réutiliser, l'adapter et le partager.

Les concepts, la terminologie et les objectifs d'apprentissage proviennent du syllabus **ISTQB® / CFTL**, qui en restent propriétaires ; ils sont ici reformulés et cités à des fins pédagogiques. **ISTQB®** est une marque déposée de l'International Software Testing Qualifications Board.

---

<div align="center">

**Ce repo vous a aidé à décrocher votre certification ? Laissez une ⭐ — ça aide les prochains à le trouver.**

Bonne révision, et bonne chance ! 💪

</div>
