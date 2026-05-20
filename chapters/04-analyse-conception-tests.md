# Chapitre 4 — Analyse et conception des tests (390 min)

## Mots-clés
critères d'acceptation, ATDD, technique de test boîte noire, analyse des valeurs limites, couverture des branches, test basé sur une checklist, approche de test basée sur la collaboration, couverture, élément de couverture, test basé sur une table de décision, partition d'équivalence, estimation d'erreurs, technique de test basée sur l'expérience, test exploratoire, test des transitions d'état, couverture des instructions, technique de test, technique de test boîte blanche.

> 🔥 **Chapitre majeur** : 390 minutes, beaucoup de K3 (appliquer). C'est le chapitre avec le plus de questions à l'examen.

---

## 4.1 Aperçu des techniques

| Catégorie | Basée sur | Caractéristique |
|---|---|---|
| **Boîte noire** (spécifications) | Spécifications | Indépendantes de l'implémentation ; restent valides si l'implémentation change |
| **Boîte blanche** (structure) | Structure interne | Dépendent de la conception/code |
| **Basées sur l'expérience** | Connaissances/expérience du testeur | Complémentaires des deux autres |

Référence : **ISO/IEC/IEEE 29119-4**.

---

## 4.2 Techniques boîte noire

### 4.2.1 Partitions d'équivalence (EP) — K3

**Principe** : diviser les données en partitions (valides/invalides) ; un test par partition suffit (toutes les valeurs d'une partition sont traitées de la même manière).

**Couverture "Each Choice"** : exercer chaque partition de chaque ensemble au moins une fois (sans combiner).

**Formule de couverture** :
```
Couverture EP (%) = (Partitions exercées / Partitions identifiées) × 100
```

**Exemple** : âge ∈ [18 ; 65]
- Partition invalide basse : âge < 18 → ex. 10
- Partition valide : 18 ≤ âge ≤ 65 → ex. 30
- Partition invalide haute : âge > 65 → ex. 70

➜ **3 cas de test** pour 100 % EP.

### 4.2.2 Analyse des valeurs limites (BVA) — K3

S'applique uniquement aux **partitions ordonnées**. Cible les limites (où les développeurs se trompent le plus).

#### Technique à **2 valeurs** (Craig, Myers)
Pour chaque limite : la valeur + sa **voisine la plus proche dans la partition adjacente**.

#### Technique à **3 valeurs** (Koomen, O'Regan)
Pour chaque limite : la valeur + ses **2 voisines** (de part et d'autre).

**Exemple** : âge entre 18 et 65 inclus.

| Limite | 2 valeurs | 3 valeurs |
|---|---|---|
| 18 (basse) | 17, 18 | 17, 18, 19 |
| 65 (haute) | 65, 66 | 64, 65, 66 |

➜ 4 valeurs en technique 2-valeurs, 6 valeurs en 3-valeurs.

> 💡 3-valeurs détecte un bug "x = 10" implémenté à la place de "x ≤ 10" → seul x = 9 le révèle.

### 4.2.3 Test par tables de décisions — K3

Pour les **règles métier** combinant plusieurs conditions.

Structure :
- **Lignes** : conditions + actions
- **Colonnes** : règles de décision (combinaisons)

**Notation** :
| Symbole | Signification |
|---|---|
| V (T) | Condition vraie |
| F | Condition fausse |
| – | Non pertinente |
| N/A | Irréalisable |
| X | Action a lieu |
| (vide) | Action ne se produit pas |

**Couverture 100 %** : exercer toutes les colonnes réalisables.

**Simplifications** : retirer colonnes irréalisables ; fusionner colonnes où certaines conditions n'affectent pas le résultat.

**Exemple** : Carte fidélité (≥ 1000€ → 10%, ≥ 500€ → 5%)

| Conditions | R1 | R2 | R3 |
|---|---|---|---|
| Montant ≥ 1000€ | V | F | F |
| Montant ≥ 500€ | – | V | F |
| **Action** : remise 10% | X | | |
| **Action** : remise 5% | | X | |
| **Action** : aucune remise | | | X |

### 4.2.4 Test de transition d'état — K3

Modélise un système par ses **états** et **transitions**.

Syntaxe d'une transition : `événement [condition de garde] / action`

**Diagramme** vs **table d'états** : la table montre **explicitement** les transitions invalides (cellules vides).

#### Critères de couverture

| Critère | Éléments couverts | Couverture 100 % implique… |
|---|---|---|
| **Couverture de tous les états** | Tous les états visités | — |
| **Couverture des transitions valides** (0-switch) | Toutes les transitions valides | ⇒ tous les états |
| **Couverture de toutes les transitions** | Valides ET tentatives d'invalides | ⇒ états + valides ; **exigence minimale pour mission/sécurité critiques** |

> ⚠️ Ne tester **qu'une seule transition invalide** par cas de test → évite le **masquage des défauts**.

---

## 4.3 Techniques boîte blanche

### 4.3.1 Test des instructions (statement) — K2
- **Élément de couverture** : instruction exécutable
- 100 % = chaque instruction exécutée au moins une fois
- ⚠️ N'assure pas la couverture des décisions ni des défauts dépendant des données

```
Couverture instructions (%) = (Instructions exercées / Total instructions) × 100
```

### 4.3.2 Test des branches (branch) — K2
Une **branche** = transfert de contrôle entre 2 nœuds du graphe de flux.
- Conditionnel (if/then, switch, sortie/continuation de boucle) ou inconditionnel
- 100 % branches **englobe** 100 % instructions (l'inverse n'est pas vrai)

```
Couverture branches (%) = (Branches exercées / Total branches) × 100
```

**Exemple** :
```python
if x > 0:
    print("positif")
else:
    print("négatif")
```
- 2 instructions exécutables (print) → 1 cas suffit pour 100 % instructions
- 2 branches (vraie/fausse) → besoin de 2 cas pour 100 % branches

### 4.3.3 Valeur des tests boîte blanche
- Prend en compte **toute** l'implémentation (utile si spec vague/incomplète)
- ⚠️ Ne détecte pas les **exigences non implémentées**
- Utilisable aussi en **statique** (revue de code, pseudocode)
- Fournit une **mesure objective** de couverture impossible avec uniquement la boîte noire

---

## 4.4 Techniques basées sur l'expérience

### 4.4.1 Estimation d'erreurs (error guessing)
Anticiper erreurs/défauts/défaillances à partir de l'expérience.
Catégories : entrée, sortie, logique, calcul, interface, données.

**Attaques de fautes** (fault attacks) : approche méthodique → liste d'erreurs probables → tests ciblés.

### 4.4.2 Test exploratoire
**Définition** : tests simultanément conçus, exécutés et évalués pendant que le testeur découvre l'objet.

**Test basé sur des sessions** :
- Charte de test (objectifs)
- Time-box
- Débriefing avec parties prenantes

Utile quand :
- Spécifications insuffisantes
- Forte pression temporelle
- Pour compléter des techniques formelles

Plus efficace si testeur **expérimenté**, connaissant le domaine, analytique et créatif.

### 4.4.3 Test basé sur des checklists
**Conditions de test → éléments de checklist** (souvent sous forme de question).

Construction :
- Expérience
- Connaissance utilisateur
- Compréhension des défaillances logicielles

⚠️ Ne pas inclure : éléments vérifiables automatiquement, critères d'entrée/sortie, éléments trop généraux.

Mettre à jour régulièrement (les checklists deviennent moins efficaces avec le temps : les devs apprennent).

---

## 4.5 Approches basées sur la collaboration

Objectif : **éviter** les défauts par la communication, pas seulement les détecter.

### 4.5.1 Rédaction collaborative de User Stories

**Format** :
> En tant que [rôle], je veux [objectif], afin de [valeur métier]

**Les 3 C** (Jeffries 2000) :
- **Carte** — support physique/virtuel
- **Conversation** — comment le logiciel sera utilisé
- **Confirmation** — critères d'acceptation

**Critères INVEST** :
- **I**ndépendante
- **N**égociable
- **V**aleur (apporte de la valeur)
- **E**stimable
- **S**mall (petite)
- **T**estable

Si on ne sait pas comment tester une US → elle n'est pas assez claire.

### 4.5.2 Critères d'acceptation
= conditions à remplir pour qu'une US soit acceptée. Servent à :
- Définir le périmètre de l'US
- Consensus entre parties prenantes
- Scénarios positifs **et** négatifs
- Base pour les tests d'acceptation utilisateur
- Planification/estimation précises

**Deux formats principaux** :
1. **Orienté-scénario** (Given/When/Then — BDD)
2. **Orienté vers les règles** (checklist à puces, table entrée-sortie)

### 4.5.3 ATDD (Acceptance Test-Driven Development) — K3

Étapes :
1. **Atelier de spécification** — analyse de la User Story et de ses critères d'acceptation
2. **Création des cas de test** — équipe ou testeur, basés sur les critères d'acceptation
3. Tests positifs → puis négatifs → puis non-fonctionnels

Les cas de test :
- Compréhensibles par les parties prenantes
- Langage naturel : préconditions, données d'entrée, postconditions
- Couvrent toutes les caractéristiques de l'US (pas au-delà)
- Pas de doublon
- Si format adapté → automatisables → **exigences exécutables**

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-4.1.1 | K2 | Distinguer techniques BN/BB/expérience |
| FL-4.2.1 | **K3** | Utiliser partitions d'équivalence |
| FL-4.2.2 | **K3** | Utiliser analyse valeurs limites |
| FL-4.2.3 | **K3** | Utiliser tables de décisions |
| FL-4.2.4 | **K3** | Utiliser tests de transition d'état |
| FL-4.3.1 | K2 | Expliquer test des instructions |
| FL-4.3.2 | K2 | Expliquer test des branches |
| FL-4.3.3 | K2 | Valeur des tests boîte blanche |
| FL-4.4.1 | K2 | Expliquer estimation d'erreurs |
| FL-4.4.2 | K2 | Expliquer test exploratoire |
| FL-4.4.3 | K2 | Expliquer test basé checklists |
| FL-4.5.1 | K2 | User Stories en collaboration |
| FL-4.5.2 | K2 | Classer formats critères d'acceptation |
| FL-4.5.3 | **K3** | Utiliser ATDD pour dériver cas de test |
