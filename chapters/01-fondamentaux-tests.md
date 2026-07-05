# Chapitre 1 — Fondamentaux des tests (180 min)

## Mots-clés
couverture, débogage, défaut, erreur, défaillance, qualité, assurance qualité, cause racine, analyse de test, base de test, cas de test, clôture des tests, condition de test, contrôle des tests, données de test, conception des tests, exécution des tests, implémentation des tests, pilotage des tests, objet de test, objectif de test, planification des tests, procédure de test, résultat de test, test, testware, validation, vérification.

---

## 1.1 Qu'est-ce que le test ?

**Définition** : ensemble d'activités visant à découvrir les défauts et à évaluer la qualité des artefacts logiciels (les **objets de test**).

Le test :
- inclut bien plus que l'exécution (planification, analyse, conception, implémentation, exécution, clôture)
- comporte **vérification** (conformité aux exigences spécifiées) **ET validation** (conformité aux besoins des utilisateurs)
- peut être **dynamique** (exécution du logiciel) ou **statique** (revues + analyse statique)
- est une activité largement **intellectuelle** (analyse, pensée critique, pensée systémique)

### 1.1.1 Objectifs typiques du test (K1)
1. Évaluer les produits d'activités (exigences, user stories, conception, code)
2. Provoquer des défaillances et trouver des défauts
3. Assurer la couverture requise
4. Réduire le risque de qualité insuffisante
5. Vérifier la satisfaction des exigences spécifiées
6. Vérifier la conformité (contractuelle, légale, réglementaire)
7. Fournir des informations aux parties prenantes pour la prise de décision
8. Construire la confiance dans la qualité
9. Valider que l'objet de test est complet et conforme aux attentes

### 1.1.2 Test vs débogage (K2)

| Test | Débogage |
|---|---|
| Détecte une défaillance/un défaut | Trouve la **cause** d'une défaillance et la **corrige** |
| Reproduit → constate | Reproduit → diagnostique → corrige |
| Activité du testeur | Activité du développeur |

Après débogage : **test de confirmation** (a-t-on bien corrigé ?) + **test de régression** (n'a-t-on rien cassé ?).

---

## 1.2 Pourquoi tester ?

### 1.2.1 Contributions au succès
- Moyen efficace et peu coûteux de détecter des défauts
- Évaluation directe de la qualité à différents stades
- Représentation indirecte des utilisateurs
- Conformité aux exigences contractuelles/légales

### 1.2.2 Test vs Assurance Qualité (AQ)

| Contrôle qualité (QC) — dont le test | Assurance qualité (QA) |
|---|---|
| **Corrective, axée produit** | **Préventive, axée processus** |
| Atteindre des niveaux de qualité | Mettre en œuvre/améliorer les processus |
| Test, méthodes formelles, simulation | Définition et suivi des processus |
| Responsabilité de l'équipe test | Responsabilité de **tous** les acteurs |

### 1.2.3 Erreur, défaut, défaillance, cause racine (K2)

```
Cause racine → Erreur (humaine) → Défaut (dans l'artefact) → Défaillance (en exécution)
```

- **Erreur (error/mistake)** : action humaine produisant un résultat incorrect
- **Défaut (bug, fault)** : imperfection dans un produit d'activités
- **Défaillance (failure)** : comportement effectif ≠ comportement attendu
- **Cause racine** : raison fondamentale identifiée par **analyse des causes racines**

⚠️ Toutes les défaillances ne viennent pas de défauts → environnement (radiations, champs EM) peut causer des défauts dans le firmware.

---

## 1.3 Les 7 principes du test (K2) ⭐ **TRÈS EXAMINÉ**

1. **Le test montre la présence de défauts, pas leur absence** — Buxton 1970
2. **Le test exhaustif est impossible** — sauf cas triviaux ; utiliser techniques, priorisation, tests basés sur les risques
3. **Tester tôt économise temps et argent** (= shift-left) — Boehm 1981
4. **Regroupement (clustering) des défauts** — principe de Pareto : peu de composants = la majorité des défauts
5. **Usure des tests (paradoxe du pesticide)** — Beizer 1990 : mêmes tests répétés ⇒ moins efficaces
6. **Le test dépend du contexte** — pas d'approche universelle (Kaner 2011)
7. **Illusion de l'absence de défauts** — un système sans défauts n'est pas forcément utile/utilisable

> 💡 Moyen mnémotechnique : **P-E-T-G-U-C-I** : Présence, Exhaustif, Tôt, Groupement, Usure, Contexte, Illusion

---

## 1.4 Activités, testware et rôles

### 1.4.1 Activités du processus de test

| Activité | Description | Section |
|---|---|---|
| **Planification** | Définir objectifs et approche | 5.1 |
| **Pilotage & contrôle** | Vérifier progrès / actions correctives | 5.3 |
| **Analyse** | "Que tester ?" → conditions de test | — |
| **Conception** | "Comment tester ?" → cas de test + **exigences en données de test** + **exigences d'environnement de test** | — |
| **Implémentation** | Créer/réunir concrètement le testware (procédures, scripts, suites), **mettre en place** l'environnement, ordonnancer | — |
| **Exécution** | Lancer les tests, comparer, signaler les anomalies | — |
| **Clôture** | Archiver, leçons apprises, rapport final | — |

Elles sont souvent **itératives et parallèles**, pas séquentielles.

> ⚠️ **Piège d'examen** : « quelle activité travaille avec les conditions de test, les exigences de données de test, les exigences d'environnement de test et les cas de test ? » → **Conception**. La conception *identifie les besoins* (données, environnement) ; l'implémentation *les réalise* (créer les données, monter l'environnement). Ne pas confondre avec l'exécution, qui *utilise* tout cela.

### 1.4.2 Facteurs contextuels

Parties prenantes • Équipe • Domaine • Technique • Contraintes projet • Organisation • Cycle de vie • Outils.

### 1.4.3 Testware (produits d'activités du test)

| Activité | Testware produit |
|---|---|
| Planification | Plan de test, calendrier, **référentiel des risques**, critères de sortie |
| Pilotage & contrôle | Rapports d'avancement, directives de contrôle |
| Analyse | Conditions de test (priorisées), rapports de défaut sur la base |
| Conception | Cas de test (priorisés), chartes de test, éléments de couverture |
| Implémentation | Procédures, scripts, suites, calendrier d'exécution, environnement (bouchons/pilotes/simulateurs) |
| Exécution | Logs de test, rapports de défaut |
| Clôture | Rapport de clôture, actions, leçons, demandes de changement |

### 1.4.4 Traçabilité base de test ↔ testware

Permet :
- Évaluer la **couverture** (cas ↔ exigences)
- Évaluer le **risque résiduel** (résultats ↔ risques)
- Analyse d'impact des changements
- Faciliter audits et gouvernance IT
- Rendre rapports plus compréhensibles

### 1.4.5 Rôles dans le test (deux rôles principaux)

| Test Manager | Testeur |
|---|---|
| Responsabilité globale du processus | Aspect technique |
| Planification, pilotage, contrôle, clôture | Analyse, conception, implémentation, exécution |

Une même personne peut cumuler les deux rôles ; en Agile certaines tâches du Test Manager sont diluées dans l'équipe.

---

## 1.5 Compétences essentielles

### 1.5.1 Compétences génériques
- Connaissance des tests
- Rigueur, attention, curiosité, souci du détail, méthode
- Communication, écoute active, esprit d'équipe
- Réflexion analytique, esprit critique, créativité
- Connaissances techniques
- Connaissance du domaine

> ⚠️ Le testeur porte souvent les "mauvaises nouvelles" → communication **constructive** essentielle (biais de confirmation).

### 1.5.2 Approche équipe intégrée (whole-team approach)
- Issue de **XP**
- Tout membre peut faire toute tâche, chacun responsable de la qualité
- Espace partagé, communication facilitée
- ⚠️ Inadaptée si **indépendance élevée** requise (ex. systèmes critiques sécurité)

### 1.5.3 Indépendance du test

| Niveau | Qui teste |
|---|---|
| Aucune | L'auteur |
| Faible | Pairs de la même équipe |
| Élevée | Testeurs hors équipe, dans l'organisation |
| Très élevée | Testeurs externes à l'organisation |

**Avantages** : détecte des défauts différents, remet en cause les hypothèses.
**Inconvénients** : isolement, conflits, perte de responsabilité qualité chez les devs, perception de "goulot d'étranglement".

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-1.1.1 | K1 | Identifier les objectifs du test |
| FL-1.1.2 | K2 | Différencier tester et déboguer |
| FL-1.2.1 | K2 | Donner des exemples de nécessité des tests |
| FL-1.2.2 | K1 | Rappeler la relation test ↔ AQ |
| FL-1.2.3 | K2 | Distinguer cause racine, erreur, défaut, défaillance |
| FL-1.3.1 | K2 | Expliquer les 7 principes |
| FL-1.4.1 | K2 | Résumer les activités et tâches |
| FL-1.4.2 | K2 | Expliquer l'impact du contexte |
| FL-1.4.3 | K2 | Différencier les composants du testware |
| FL-1.4.4 | K2 | Valeur de la traçabilité |
| FL-1.4.5 | K2 | Comparer les rôles |
| FL-1.5.1 | K2 | Donner des exemples de compétences |
| FL-1.5.2 | K1 | Rappeler les avantages d'équipe intégrée |
| FL-1.5.3 | K2 | Avantages/inconvénients indépendance |
