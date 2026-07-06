# Chapitre 2 — Tester tout au long du cycle de vie du développement logiciel (130 min)

## Mots-clés
tests d'acceptation, tests boîte noire, tests d'intégration de composants, tests de composants, tests de confirmation, tests fonctionnels, tests d'intégration, tests de maintenance, tests non fonctionnels, tests de régression, shift-left, tests d'intégration de systèmes, tests de systèmes, niveau de test, objet de test, type de test, tests boîte blanche.

---

## 2.1 Tester dans le contexte d'un cycle de vie (SDLC)

### Modèles SDLC

| Famille | Exemples |
|---|---|
| Séquentiel | Cascade, V |
| Itératif | Spirale, prototypage |
| Incrémental | Processus Unifié |
| Agile / pratiques | ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, TDD |

### 2.1.1 Impact du SDLC sur le test
Le choix du SDLC influence :
- Périmètre et calendrier des activités
- Niveau de détail de la documentation
- Choix des techniques et de l'approche
- Degré d'automatisation
- Rôle et responsabilités du testeur

**Séquentiel** : tests dynamiques tardifs ; testeurs impliqués tôt sur revue/analyse/conception.
**Itératif/incrémental** : tests à chaque itération, régression intensive, feedback rapide.
**Agile** : documentation légère + automatisation poussée + techniques basées sur l'expérience.

### 2.1.2 Bonnes pratiques transverses
- À chaque activité de dev = une activité de test

> ❗ Cette bonne pratique s'applique à **TOUT modèle de SDLC** (séquentiel, itératif, incrémental, Agile) — pas seulement au modèle en V. Piège d'examen : une réponse limitant cette correspondance à un seul type de modèle est fausse.
- Niveaux de test = objectifs distincts (éviter redondance)
- Analyse/conception de chaque niveau démarre **avec la phase de dev correspondante** (test précoce)
- Testeurs impliqués dans les revues dès les premiers brouillons (shift-left)

### 2.1.3 Test en moteur du développement (TDD, ATDD, BDD)

| Approche | Caractéristique |
|---|---|
| **TDD** (Beck 2003) | Pilote le code par les tests ; *test first* → code → refactor |
| **ATDD** (Gärtner 2011) | Dérive les tests à partir des **critères d'acceptation** (conception système) |
| **BDD** (Chelimsky 2010) | Exprime le comportement en langage naturel, format **Given/When/Then** (Etant donné/Lorsque/Alors) |

Toutes : tests précoces + shift-left + tests persistants automatisés.

### 2.1.4 DevOps et tests

**DevOps** = synergie Dev + Ops avec mêmes objectifs. Pratiques : autonomie, feedback rapide, chaînes d'outils, **CI/CD**.

✅ Bénéfices pour le test :
- Feedback rapide sur la qualité
- Promeut le shift-left
- Automatisation des pipelines (envs stables)
- Visibilité accrue des caract. non fonctionnelles
- Réduit le test manuel répétitif
- Minimise le risque de régression

⚠️ Risques :
- Pipeline à définir/maintenir
- Outils CI/CD à introduire/maintenir
- Automatisation = exigences supplémentaires

> ❗ DevOps ≠ "tout automatisé" — du test manuel reste nécessaire, surtout côté utilisateur.

### 2.1.5 Shift-left

Principe = appliquer "tester tôt" (principe 3).
Pratiques :
- Revue des spécifications du point de vue test
- Écrire les tests avant le code (TDD)
- CI et test automatisé déclenché à chaque commit
- Test statique du code avant test dynamique
- Test non fonctionnel dès le niveau composant

Trade-off : effort initial supplémentaire → économies plus tard.

### 2.1.6 Rétrospectives & amélioration de processus
Organisées en fin de projet/itération/livraison. Participants : testeurs, devs, architectes, PO, BA.

3 questions clés :
1. Qu'est-ce qui a réussi (à conserver) ?
2. Qu'est-ce qui n'a pas fonctionné (à améliorer) ?
3. Comment intégrer ces améliorations ?

Bénéfices : efficacité/efficience, qualité du testware, cohésion d'équipe, qualité de la base de test, coopération dev/test.

---

## 2.2 Niveaux de test et types de test

### 2.2.1 Les 5 niveaux de test ⭐

| Niveau | Focus | Qui | Base de test |
|---|---|---|---|
| **Tests de composants** (unitaires) | Composant isolé | Développeurs | Conception détaillée, code |
| **Tests d'intégration de composants** | Interfaces entre composants | Devs / testeurs | Conception architecture |
| **Tests système** | Système complet | Équipe de test indépendante | Spécifications système |
| **Tests d'intégration système** | Interfaces avec systèmes externes | Testeurs | Spécifications d'interface |
| **Tests d'acceptation** | Aptitude au déploiement | Utilisateurs prévus | Besoins métier, processus |

Stratégies d'intégration : **ascendante (bottom-up), descendante (top-down), big-bang**.

Formes principales de tests d'acceptation :
- **UAT** (utilisateurs)
- Tests d'acceptation **opérationnelle** (OAT)
- Acceptation **contractuelle** / **réglementaire**
- Tests **alpha** (chez le développeur)
- Tests **bêta** (chez le client)

Critères distinctifs entre niveaux : objet, objectifs, base de test, défauts/défaillances, approche/responsabilités.

### 2.2.2 Les 4 types de test

| Type | Évalue… | Norme/référence |
|---|---|---|
| **Fonctionnel** | "Ce que" fait le système (complétude, exactitude, adéquation) | — |
| **Non fonctionnel** | "Comment" se comporte | **ISO/IEC 25010** : Performance, Compatibilité, Utilisabilité, Fiabilité, Sécurité, Maintenabilité, Portabilité |
| **Boîte noire** | Comportement vs spécifications | ch. 4.2 |
| **Boîte blanche** | Couverture de la structure interne | ch. 4.3 |

Les 4 types peuvent s'appliquer à tous les niveaux.

### 2.2.3 Test de confirmation vs test de régression

| Test de **confirmation** (re-test) | Test de **régression** |
|---|---|
| Vérifier que le défaut original est corrigé | Vérifier qu'aucune conséquence négative |
| Re-exécution des cas en échec + nouveaux cas | Suite étendue, **analyse d'impact** d'abord |
| Si manque de temps : reproduire les étapes seulement | Excellent candidat à l'**automatisation** (CI/DevOps) |

> 🔑 Bonne pratique : démarrer l'automatisation de régression **dès le début** du projet.

> 🔑 **Lecture d'un historique d'exécutions** (question type d'examen) : après une correction, les tests de **confirmation** ré-exécutent les cas qui **ÉCHOUAIENT** (vérifier la correction) ; les tests de **régression** ré-exécutent des cas qui **PASSAIENT** auparavant (vérifier l'absence d'effets de bord). Un cas qui réussissait et qu'on relance après une modification = régression, pas confirmation.

---

## 2.3 Test de maintenance

Catégories de maintenance (ISO/IEC 14764) :
- **Corrective** (corriger un défaut)
- **Adaptative** (s'adapter à l'environnement)
- **Perfective** (améliorer performance/maintenabilité)
- **Préventive**

Périmètre dépend de : degré de risque, taille du système, ampleur des modifs.

**Déclencheurs** :
- Modifications (améliorations planifiées, correctifs, hotfix)
- Mises à niveau / migrations (plateforme, données)
- **Retrait** d'un système (test d'archivage, restauration)

L'**analyse d'impact** doit précéder le changement pour évaluer ses conséquences.

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-2.1.1 | K2 | Expliquer l'impact du SDLC sur le test |
| FL-2.1.2 | K1 | Rappeler les bonnes pratiques transverses |
| FL-2.1.3 | K1 | Rappeler des exemples d'approches pilotées par les tests |
| FL-2.1.4 | K2 | Résumer l'impact de DevOps |
| FL-2.1.5 | K2 | Expliquer le shift-left |
| FL-2.1.6 | K2 | Rétrospectives comme amélioration |
| FL-2.2.1 | K2 | Distinguer les niveaux de test |
| FL-2.2.2 | K2 | Distinguer les types de test |
| FL-2.2.3 | K2 | Confirmation vs régression |
| FL-2.3.1 | K2 | Résumer maintenance + déclencheurs |
