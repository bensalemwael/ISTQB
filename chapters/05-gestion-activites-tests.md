# Chapitre 5 — Gestion des activités de test (335 min)

## Mots-clés
gestion des défauts, rapport de défaut, critères d'entrée, critères de sortie, risque produit, risque projet, risque, analyse des risques, évaluation des risques, contrôle des risques, identification des risques, niveau de risque, gestion des risques, atténuation des risques, pilotage des risques, tests basés sur les risques, approche de test, rapport de clôture des tests, contrôle des tests, pilotage des tests, planification des tests, rapport d'avancement des tests, pyramide des tests, quadrants des tests.

---

## 5.1 Planification des tests

### 5.1.1 Plan de test
Un plan de test :
- Documente moyens et calendrier
- S'assure que les activités répondent aux critères
- Sert de moyen de communication
- Démontre la conformité (ou explique les écarts) avec la politique/stratégie de test

**Contenu typique** :
- Contexte (périmètre, objectifs, contraintes, base de test)
- Hypothèses & contraintes
- Parties prenantes (rôles, responsabilités, formation)
- Communication (formes, fréquence, modèles)
- Référentiel des risques
- Approche de test (niveaux, types, techniques, livrables, critères E/S, indépendance, métriques, données, environnement)
- Budget & calendrier

Référence : **ISO/IEC/IEEE 29119-3**.

### 5.1.2 Contribution du testeur à la planification

| Planification de la **release** | Planification de l'**itération** |
|---|---|
| Livre un produit | Fin d'une seule itération |
| Définit/redéfinit le product backlog | Backlog d'itération |
| Rédige US testables + critères d'acceptation | Analyse risques détaillée des US |
| Analyse risques projet/qualité | Détermine la testabilité |
| Estime l'effort | Décompose en tâches |
| Détermine l'approche de test | Estime tâches de test |
| Planifie les tests de la release | Identifie/affine aspects fonct./non-fonct. |

### 5.1.3 Critères d'entrée et de sortie

| Critères d'**entrée** | Critères de **sortie** |
|---|---|
| Préconditions pour démarrer une activité | À atteindre pour déclarer l'activité terminée |
| Si non remplis → activité plus longue/coûteuse/risquée | Définis par niveau et selon objectifs |

**Critères d'entrée typiques** : ressources disponibles, matériel de test, niveau initial de qualité (smoke tests OK).
**Critères de sortie typiques** : mesures d'exhaustivité (couverture, défauts non résolus, densité, échecs), critères de clôture (tests exécutés, statiques effectués, défauts signalés, régression automatisée).

| Exemple concret | Entrée ou sortie ? |
|---|---|
| Environnement de test **prêt et disponible** | **Entrée** |
| Le testeur peut **se connecter à l'objet de test** | **Entrée** |
| Exigences traduites en **given/when/then** (DoR) | **Entrée** |
| Smoke tests réussis (qualité initiale) | **Entrée** |
| Couverture ou **densité de défauts** cible atteinte | **Sortie** |
| Tests de **régression automatisés** | **Sortie** |
| Tests planifiés exécutés, défauts signalés | **Sortie** |

L'épuisement temps/budget peut être un critère de sortie valable, sous accord des parties prenantes.

**En Agile** :
- **Definition of Done (DoD)** = critères de sortie
- **Definition of Ready (DoR)** = critères d'entrée pour démarrer une US

### 5.1.4 Techniques d'estimation — K3 ⭐

| Technique | Type | Principe |
|---|---|---|
| **Ratios** | Métrique | Ratios standards de projets passés (ex. dev:test = 3:2) |
| **Extrapolation** | Métrique | Mesurer tôt, projeter (idéal pour itératif) |
| **Delphi large bande** | Expertise | Experts isolés, discussion, itération → consensus. **Planning Poker** = variante Agile |
| **Estimation en 3 points (PERT)** | Expertise | a (optimiste), m (probable), b (pessimiste) → **E = (a + 4m + b) / 6** ; écart-type **SD = (b - a) / 6** |

**Exemple 3-points** : a=6, m=9, b=18
- E = (6 + 4×9 + 18) / 6 = **60/6 = 10** personnes-heures
- SD = (18 − 6) / 6 = **2**
- → 10 ± 2 (entre 8 et 12)

### 5.1.5 Priorisation des cas de test — K3

Stratégies courantes :
1. **Basée sur les risques** — cas couvrant les + grands risques en premier
2. **Basée sur la couverture** — cas avec la + haute couverture en premier
   - Variante : **couverture additionnelle** (greedy)
3. **Basée sur les exigences** — selon priorités des exigences (parties prenantes)

⚠️ Si dépendances entre cas → le cas de moindre priorité peut devoir s'exécuter avant. Tenir compte de la **disponibilité des ressources**.

### 5.1.6 Pyramide des tests

```
        /\
       /  \   Tests E2E / UI    ← peu, lents, grossiers
      /----\
     /      \  Tests d'intégration
    /--------\
   /          \  Tests unitaires/composants  ← nombreux, rapides, fins
  /____________\
```

Plus la couche est haute :
- moins de détails dans les tests
- moins d'isolation (couvre + de fonctionnalités)
- plus de temps d'exécution

Modèle original (Cohn 2009) : Unit / Service / UI.
Variantes : Unitaires / Intégration / Bout-en-bout.

### 5.1.7 Quadrants de tests (Marick 2003)

Deux axes :
- **Orientation** : Métier ↔ Technologie
- **Rôle** : Soutien à l'équipe ↔ Critique du produit

```
              | Soutien à l'équipe   | Critique du produit
--------------|----------------------|----------------------
Métier        | Q2 : fonctionnels,   | Q3 : exploratoires,
              | exemples, US tests,  | utilisabilité, UAT
              | API, simulations     | (orientés utilisateur)
--------------|----------------------|----------------------
Technologie   | Q1 : composants,     | Q4 : smoke tests,
              | intégr. composants   | tests non fonctionnels
              | (CI, automatisés)    | (souvent automatisés)
```

---

## 5.2 Gestion des risques

ISO 31000. Activités :
- **Analyse des risques** = identification + évaluation (5.2.3)
- **Contrôle des risques** = atténuation + pilotage (5.2.4)

L'approche reposant sur ces activités s'appelle **test basé sur les risques**.

### 5.2.1 Risque et attributs
- **Probabilité** (entre 0 et 1)
- **Impact** (préjudice)

**Niveau de risque = f(probabilité, impact)**

### 5.2.2 Risques projet vs produit ⭐

| Risques **projet** | Risques **produit** |
|---|---|
| Liés à la gestion du projet | Liés aux caract.-qualité (ISO 25010) |
| **Catégories** : | **Exemples** : |
| - Organisationnels (retards, coûts) | - Fonctionnalités manquantes/incorrectes |
| - Humains (compétences, conflits) | - Calculs erronés, erreurs d'exécution |
| - Techniques (périmètre, outils) | - Performance / réponse lente |
| - Fournisseurs (livraison tierce) | - UX, sécurité, architecture |
| **Impact** : calendrier, budget, périmètre | **Impact** : insatisfaction, perte revenus/confiance, dommages, sanctions |

### 5.2.3 Analyse des risques produit
1. **Identification** — brainstorming, ateliers, entretiens, diagrammes cause-effet
2. **Évaluation** — catégoriser, probabilité, impact, niveau, priorité, atténuation

Approches :
- **Quantitative** : niveau = probabilité × impact
- **Qualitative** : matrice de risque

Influence : périmètre des tests, niveaux et types choisis, techniques et couverture, effort, ordre de priorité, autres activités hors test.

### 5.2.4 Contrôle des risques produit
Options de réponse :
- **Atténuation** par les tests
- **Acceptation**
- **Transfert**
- **Plan d'urgence** (contingency)

> 🔑 **Effectuer des tests** en réponse à un risque produit (ex. tests de **performance** face à un risque de lenteur, tests **alpha/bêta** face à un risque d'inadéquation aux usages) = **ATTÉNUATION** du risque. Le **transfert** = confier le risque à un tiers (assurance, sous-traitant) ; l'**acceptation** = ne rien faire en connaissance de cause ; le **plan d'urgence** = prévoir quoi faire si le risque se réalise.

Mesures d'atténuation par tests :
- Choisir des testeurs avec les bonnes compétences
- Niveau d'indépendance approprié
- Revues + analyses statiques
- Techniques et couverture appropriées
- Types de tests adaptés aux caract.-qualité
- Tests dynamiques incluant régression

---

## 5.3 Pilotage, contrôle et clôture des tests

| Activité | But |
|---|---|
| **Pilotage** | Collecter info → mesurer atteinte des critères de sortie |
| **Contrôle** | Utiliser ces infos → directives correctives (re-priorisation, ré-évaluation critères, ajustement calendrier, ressources) |
| **Clôture** | Consolider expérience, testware, infos pertinentes aux jalons |

### 5.3.1 Métriques courantes
- **Avancement projet** : clôture tâches, ressources, effort
- **Avancement tests** : implémentation, préparation environnement, exécutés/non-exécutés, réussis/échecs, durée
- **Qualité produit** : disponibilité, temps de réponse, **MTTF (délai moyen de défaillance)**, MTBF
- **Défauts** : nombre, priorité, densité, % détection (DDP)
- **Risque** : niveau résiduel
- **Couverture** : exigences, code
- **Coût** : test, coût organisationnel de la qualité

> ⚠️ **Piège d'examen** : « lequel est une mesure de la **qualité du produit** ? » → MTTF/MTBF, temps de réponse, disponibilité (caractéristiques du produit lui-même). Le *nombre de défauts trouvés*, la *couverture des exigences* et le *DDP* mesurent le **test** (avancement ou efficacité), pas directement la qualité du produit.

### 5.3.2 Rapports de test

**Rapport d'avancement** (régulier : quotidien, hebdo) :
- Période
- Progression / écarts
- Obstacles + contournements
- Métriques
- Risques nouveaux/modifiés
- Plan de la période suivante

**Rapport de clôture** (jalons) :
- Résumé
- Évaluation test + qualité vs plan
- Écarts (calendrier, durée, effort)
- Obstacles & contournements
- Métriques
- Risques non atténués, défauts non corrigés
- Leçons apprises

Modèles dans **ISO/IEC/IEEE 29119-3** (les rapports d'avancement sont parfois appelés "rapports d'état").

### 5.3.3 Communication de l'état
Options : verbale, tableaux de bord (CI/CD, burn-down), e-mail/chat, doc en ligne, rapports formels.

Équipes distribuées → communication plus formelle. Adapter aux parties prenantes.

---

## 5.4 Gestion de configuration

Discipline qui identifie, contrôle et suit les produits d'activités (plans, stratégies, conditions, cas, scripts, résultats, logs, rapports) en tant qu'**éléments de configuration**.

Bénéfices :
- Identification unique, versionnage, traçabilité
- Référencement sans ambiguïté dans la doc de test
- Bases de référence (baselines) approuvées, modifiables seulement via contrôle formel
- **Retour à une baseline antérieure** pour reproduire des résultats
- Souvent automatisée en pipeline DevOps

> ⚠️ **Piège d'examen** : « enregistrer/versionner un script de test dans un référentiel (ex. Git) » = **gestion de configuration** — pas « tests de maintenance » (le test de maintenance teste un système modifié, cf. ch. 2.3), ni « gestion des défauts ». Tout le testware (plans, cas, scripts, résultats) est traité comme **élément de configuration**.

---

## 5.5 Gestion des défauts — K3 ⭐

Workflow : enregistrer → analyser/classer → décider responsabilité → corriger ou maintenir → clôturer.

Le processus doit être suivi par **toutes les parties prenantes**. À appliquer aussi aux défauts issus de l'**analyse statique**.

### Objectifs d'un rapport de défaut
1. Donner aux responsables suffisamment d'info pour résoudre
2. Suivre la qualité du produit
3. Améliorer les processus de dev et de test

### Contenu typique d'un rapport de défaut
- **Identifiant unique**
- Titre + résumé bref
- **Date** d'observation, **organisation émettrice, auteur** + son rôle
- Identification **objet de test** + **environnement**

  > 🔑 L'identification de l'**élément de test** (avec sa **version**) et de l'**environnement de test** est indispensable pour permettre la **reproduction** de la défaillance par les développeurs — c'est souvent LA bonne réponse quand l'examen demande quelle information manque à un rapport de défaut rejeté « non reproductible ».
- Contexte (cas de test, activité, phase SDLC, technique, données…)
- **Description de la défaillance** (étapes, logs, captures) → permet la reproduction
- **Résultats attendus** vs **résultats réels**
- **Sévérité** (impact)
- **Priorité** de correction
- **Statut** (ouvert, différé, dupliqué, en attente de correction, en attente de test de confirmation, ré-ouvert, fermé, rejeté)
- Références (cas de test…)

> 💡 Distinction **sévérité** (impact technique/métier) ≠ **priorité** (urgence de correction).

Référence : **ISO/IEC/IEEE 29119-3** (rapports d'incident).

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-5.1.1 | K2 | Objet et contenu d'un plan de test |
| FL-5.1.2 | K1 | Valeur du testeur dans la planification |
| FL-5.1.3 | K2 | Critères E/S |
| FL-5.1.4 | **K3** | Techniques d'estimation |
| FL-5.1.5 | **K3** | Priorisation des cas de test |
| FL-5.1.6 | K1 | Concepts pyramide des tests |
| FL-5.1.7 | K2 | Quadrants des tests |
| FL-5.2.1 | K1 | Niveau de risque |
| FL-5.2.2 | K2 | Risques projet vs produit |
| FL-5.2.3 | K2 | Analyse des risques produit |
| FL-5.2.4 | K2 | Mesures de contrôle |
| FL-5.3.1 | K1 | Métriques |
| FL-5.3.2 | K2 | Objet, contenu, destinataires des rapports |
| FL-5.3.3 | K2 | Communiquer l'avancement |
| FL-5.4.1 | K2 | Gestion de configuration soutient les tests |
| FL-5.5.1 | **K3** | Préparer un rapport de défaut |
