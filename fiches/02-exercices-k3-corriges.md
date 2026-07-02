# Exercices K3 corrigés — Techniques de test & estimation (ISTQB CTFL v4.0)

> 🎯 **Pourquoi cette fiche** : ~8 questions sur 40 à l'examen sont de niveau **K3 (appliquer)**. Elles portent presque toutes sur le **chapitre 4** (EP, BVA, tables de décision, transitions d'état) et le **chapitre 5** (estimation, priorisation, rapport de défaut). C'est là que l'on perd le plus de points — et là qu'on peut en gagner le plus facilement : les méthodes sont **mécaniques**. Objectif : les dérouler sans réfléchir.

**Méthode de travail** : cache la correction, fais l'exercice sur papier, puis compare **chaque étape** (pas seulement la réponse finale).

---

## 1. Partitions d'équivalence (EP) — FL-4.2.1 (K3)

### Rappel express

- Diviser les données en **partitions** (valides **et** invalides) : toutes les valeurs d'une partition sont traitées de la même manière → **1 test par partition suffit**.
- Les partitions ne se **chevauchent pas** et sont **non vides**.
- **Éléments de couverture = les partitions** (y compris les invalides).

```
Couverture EP (%) = (partitions exercées par ≥ 1 cas de test / partitions identifiées) × 100
```

- **Plusieurs paramètres → couverture Each Choice** : exercer **chaque partition de chaque ensemble** au moins une fois, **sans combiner** les partitions entre elles.
- 💡 Nombre **minimum** de cas de test en Each Choice = **le plus grand nombre de partitions parmi les ensembles** (chaque cas de test « consomme » une partition de chaque ensemble en parallèle).

### Exercice 1.1 — Champ simple

> **Énoncé.** Un champ « quantité commandée » accepte les **entiers de 1 à 999**. Toute valeur inférieure à 1 ou supérieure à 999 est rejetée.
> a) Identifiez les partitions d'équivalence.
> b) Quel est le nombre **minimum** de cas de test pour une couverture EP de 100 % ?

**Résolution pas à pas**

1. Je trace la droite des valeurs et je place les bornes de l'énoncé : 1 et 999.
2. J'identifie la **partition valide** : les entiers de 1 à 999 → `[1 ; 999]`.
3. J'identifie les **partitions invalides** de part et d'autre :
   - invalide basse : quantité ≤ 0 (ex. 0, −5)
   - invalide haute : quantité ≥ 1000 (ex. 1500)
4. Je compte : **3 partitions** (1 valide + 2 invalides). Chaque partition = 1 élément de couverture = 1 cas de test suffit.

✅ **Réponse** :
a) 3 partitions : `≤ 0` (invalide), `[1 ; 999]` (valide), `≥ 1000` (invalide).
b) **3 cas de test** minimum, par exemple : quantité = 0, quantité = 500, quantité = 1200.

---

### Exercice 1.2 — Plusieurs paramètres (Each Choice)

> **Énoncé.** Un formulaire de commande comporte trois champs indépendants :
> - **Type de client** : particulier, entreprise (2 partitions)
> - **Mode de paiement** : carte, virement, PayPal (3 partitions)
> - **Langue de facturation** : FR, EN, DE, ES (4 partitions)
>
> Quel est le nombre **minimum** de cas de test pour atteindre 100 % de couverture **Each Choice** ?

**Résolution pas à pas**

1. Each Choice = chaque partition de **chaque ensemble** exercée au moins une fois — **pas besoin de tester les combinaisons** (ce serait 2 × 3 × 4 = 24 cas, hors périmètre).
2. Chaque cas de test choisit **une partition dans chaque ensemble** simultanément.
3. Le minimum est donc dicté par l'ensemble le plus « riche » : max(2, 3, 4) = **4**.
4. Je construis 4 cas qui balayent tout :

| Cas | Type client | Paiement | Langue |
|---|---|---|---|
| TC1 | particulier | carte | FR |
| TC2 | entreprise | virement | EN |
| TC3 | particulier | PayPal | DE |
| TC4 | entreprise | carte | ES |

5. Vérification : les 2 types, les 3 paiements, les 4 langues sont tous couverts. ✔

✅ **Réponse** : **4 cas de test** (= le maximum du nombre de partitions parmi les ensembles).

> ⚠️ **Piège d'examen** : répondre 2 + 3 + 4 = 9 (faux : un cas couvre une partition de chaque ensemble à la fois) ou 2 × 3 × 4 = 24 (faux : Each Choice ne combine pas).

---

### Exercice 1.3 — Calcul de couverture

> **Énoncé.** Pour un thermostat, la température de consigne valide va de **5 à 30 °C** (entiers). On a identifié 4 partitions : invalide basse (< 5), valide (5–30), invalide haute (> 30), et « entrée non numérique » (invalide). Les cas de test exécutés utilisent les entrées : **12, 3 et 45**.
> Quelle couverture des partitions d'équivalence est atteinte ?

**Résolution pas à pas**

1. Éléments de couverture identifiés : **4 partitions**.
2. J'affecte chaque valeur testée à sa partition :
   - 12 → partition valide `[5 ; 30]` ✔
   - 3 → partition invalide basse ✔
   - 45 → partition invalide haute ✔
   - partition « non numérique » → **jamais exercée** ✘
3. Partitions exercées : 3 sur 4.
4. Couverture = 3 / 4 × 100 = **75 %**.

✅ **Réponse** : **75 %** (il manque un test avec une entrée non numérique, ex. « abc »).

---

## 2. Analyse des valeurs limites (BVA) — FL-4.2.2 (K3)

### Rappel express

- Ne s'applique qu'aux **partitions ordonnées** ; les valeurs **min et max** d'une partition sont ses **valeurs limites**.
- Les développeurs se trompent surtout aux limites (borne décalée, `<` au lieu de `≤`, limite omise).
- **Technique à 2 valeurs** (Craig, Myers) : pour chaque valeur limite → la **limite** + sa **voisine la plus proche dans la partition adjacente**.
- **Technique à 3 valeurs** (Koomen, O'Regan) : pour chaque valeur limite → la **limite** + ses **deux voisines** (de part et d'autre, même dans sa propre partition).

```
Couverture BVA (%) = (éléments de couverture exercés / éléments identifiés) × 100
```

- 💡 La 3-valeurs est plus rigoureuse : le défaut « `x = 10` implémenté au lieu de `x ≤ 10` » n'est détecté ni par 10 ni par 11 (2-valeurs), mais par **9** (3-valeurs).

### Exercice 2.1 — L'exemple type : « le champ accepte 1..100 »

> **Énoncé.** Un champ accepte les **entiers de 1 à 100** (bornes incluses). Toute autre valeur est rejetée.
> a) Listez **exactement** les valeurs de test avec la technique à **2 valeurs**.
> b) Même question avec la technique à **3 valeurs**.

**Résolution pas à pas**

1. Partition valide ordonnée : `[1 ; 100]`. Ses valeurs limites : **1** et **100**.
2. **Technique à 2 valeurs** — pour chaque limite : la limite + le voisin **hors de la partition** (dans la partition adjacente) :
   - limite 1 → 1 (la limite) et **0** (voisin dans la partition invalide basse)
   - limite 100 → 100 (la limite) et **101** (voisin dans la partition invalide haute)
3. **Technique à 3 valeurs** — pour chaque limite : la limite + ses **2 voisines** (une de chaque côté) :
   - limite 1 → **0, 1, 2**
   - limite 100 → **99, 100, 101**

| Limite | 2 valeurs | 3 valeurs |
|---|---|---|
| 1 (basse) | 0, 1 | 0, 1, 2 |
| 100 (haute) | 100, 101 | 99, 100, 101 |

✅ **Réponse** :
a) 2-valeurs : **{0, 1, 100, 101}** → 4 valeurs de test.
b) 3-valeurs : **{0, 1, 2, 99, 100, 101}** → 6 valeurs de test.

> 💡 **La différence à retenir** : en 2-valeurs, on ajoute à chaque borne son voisin **hors partition** uniquement. En 3-valeurs, on entoure chaque borne **des deux côtés** — donc on ajoute aussi les voisins **intérieurs** (2 et 99), qui ne sont pas eux-mêmes des valeurs limites.

---

### Exercice 2.2 — Plusieurs partitions adjacentes

> **Énoncé.** Les frais de port dépendent du **nombre d'articles** (entier) :
> - 1 à 3 articles → 6 €
> - 4 à 10 articles → 4 €
> - 11 à 50 articles → offerts
> - hors de 1..50 → commande refusée
>
> a) Combien de valeurs de test en technique à **2 valeurs** ? Listez-les.
> b) Combien en technique à **3 valeurs** ? Listez-les.

**Résolution pas à pas**

1. Je pose les partitions ordonnées et leurs limites :
   - `≤ 0` (invalide) · `[1 ; 3]` · `[4 ; 10]` · `[11 ; 50]` · `≥ 51` (invalide)
   - Valeurs limites des partitions valides : **1, 3, 4, 10, 11, 50** (6 limites).
2. **2 valeurs** : chaque limite + son voisin dans la partition adjacente :
   - 1 → 0 · 3 → 4 · 4 → 3 · 10 → 11 · 11 → 10 · 50 → 51
   - J'assemble **sans doublons** : {0, 1, 3, 4, 10, 11, 50, 51}.
3. **3 valeurs** : chaque limite ± 1 :
   - 1 → {0, 1, 2} · 3 → {2, 3, 4} · 4 → {3, 4, 5} · 10 → {9, 10, 11} · 11 → {10, 11, 12} · 50 → {49, 50, 51}
   - Union sans doublons : {0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 49, 50, 51}.

✅ **Réponse** :
a) 2-valeurs : **8 valeurs** → {0, 1, 3, 4, 10, 11, 50, 51}.
b) 3-valeurs : **13 valeurs** → {0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 49, 50, 51}.

> ⚠️ **Piège d'examen** : oublier d'éliminer les **doublons** aux frontières internes (3/4 et 10/11 se partagent des voisins). Toujours faire l'**union** des ensembles avant de compter.

---

### Exercice 2.3 — Calcul de couverture BVA

> **Énoncé.** Un champ accepte les entiers de **10 à 99**. Avec la technique à **2 valeurs**, le testeur a exécuté des cas de test avec les entrées **9, 10 et 99**. Quelle couverture a-t-il atteinte ?

**Résolution pas à pas**

1. Limites de la partition valide `[10 ; 99]` : 10 et 99.
2. Éléments de couverture en 2-valeurs : {9, 10} pour la limite basse, {99, 100} pour la haute → **4 éléments** : 9, 10, 99, 100.
3. Éléments exercés : 9 ✔, 10 ✔, 99 ✔ — il manque **100**.
4. Couverture = 3 / 4 × 100 = **75 %**.

✅ **Réponse** : **75 %**. Il faut ajouter un cas de test avec la valeur 100 pour atteindre 100 %.

---

## 3. Tables de décision — FL-4.2.3 (K3)

### Rappel express

- Pour les **règles métier** combinant plusieurs conditions → résultats différents.
- **Lignes** = conditions puis actions ; **colonnes** = règles de décision (une combinaison unique chacune).
- Table **complète** à entrée limitée (conditions booléennes) : **2ⁿ colonnes** pour n conditions.
- **Notation** : `V` vrai · `F` faux · `–` non pertinente · `N/A` irréalisable · `X` action a lieu · (vide) action n'a pas lieu.
- **Simplification** : supprimer les colonnes **irréalisables** ; **fusionner** les colonnes où une condition n'affecte pas le résultat.
- **Éléments de couverture = les colonnes réalisables** → **1 colonne = 1 cas de test**.

```
Couverture (%) = (colonnes exercées / colonnes réalisables) × 100
```

### Exercice 3.1 — Construire une table complète (2 conditions)

> **Énoncé.** Un distributeur de billets applique les règles : si la **carte est valide** et le **PIN correct**, l'accès au compte est accordé. Si la carte est valide mais le PIN incorrect, un message d'erreur PIN s'affiche. Si la carte est invalide, elle est rejetée (le PIN n'a pas d'influence).
> a) Construisez la table de décision complète.
> b) Minimisez-la. Combien de cas de test pour 100 % de couverture ?

**Résolution pas à pas**

1. J'identifie les **conditions** : C1 = carte valide ; C2 = PIN correct → 2 conditions → table complète = 2² = **4 colonnes**.
2. J'identifie les **actions** : A1 = accès accordé ; A2 = erreur PIN ; A3 = carte rejetée.
3. J'énumère toutes les combinaisons (méthode : alterner V/F systématiquement) :

| | R1 | R2 | R3 | R4 |
|---|---|---|---|---|
| C1 : carte valide | V | V | F | F |
| C2 : PIN correct | V | F | V | F |
| A1 : accès accordé | X | | | |
| A2 : erreur PIN | | X | | |
| A3 : carte rejetée | | | X | X |

4. **Minimisation** : R3 et R4 produisent la même action (A3) et ne diffèrent que par C2, qui n'affecte pas le résultat → fusion en une colonne `F, –`.

| | R1 | R2 | R3' |
|---|---|---|---|
| C1 : carte valide | V | V | F |
| C2 : PIN correct | V | F | – |
| A1 : accès accordé | X | | |
| A2 : erreur PIN | | X | |
| A3 : carte rejetée | | | X |

✅ **Réponse** :
a) Table complète : **4 colonnes** (2²).
b) Après fusion : **3 colonnes** → **3 cas de test** suffisent pour 100 % de couverture.

---

### Exercice 3.2 — 3 conditions, colonnes irréalisables et fusion

> **Énoncé.** Une compagnie ferroviaire calcule la remise sur un billet :
> - C1 : le voyageur a **60 ans ou plus**
> - C2 : le voyageur a **25 ans ou moins**
> - C3 : le voyage est en **heure creuse**
>
> Actions : senior en heure creuse → −40 % ; senior en heure pleine → −25 % ; jeune (≤ 25 ans) → −30 % quelle que soit l'heure ; sinon, heure creuse → −10 % ; sinon → pas de remise.
> a) Construisez la table complète. Combien de colonnes ?
> b) Identifiez les colonnes irréalisables et les colonnes fusionnables.
> c) Combien de cas de test pour 100 % de couverture ?

**Résolution pas à pas**

1. 3 conditions → table complète = 2³ = **8 colonnes**.
2. J'énumère (V/F en binaire décroissant) :

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---|---|---|---|---|---|---|---|
| C1 : ≥ 60 ans | V | V | V | V | F | F | F | F |
| C2 : ≤ 25 ans | V | V | F | F | V | V | F | F |
| C3 : heure creuse | V | F | V | F | V | F | V | F |
| A1 : −40 % | | | X | | | | | |
| A2 : −25 % | | | | X | | | | |
| A3 : −30 % | | | | | X | X | | |
| A4 : −10 % | | | | | | | X | |
| A5 : aucune remise | | | | | | | | X |

3. **Colonnes irréalisables** : R1 et R2 exigent C1 = V **et** C2 = V — impossible d'avoir à la fois ≥ 60 ans et ≤ 25 ans → **N/A**, on les supprime. Restent **6 colonnes réalisables**.
4. **Fusion** : R5 et R6 (jeune) donnent la même action A3 et ne diffèrent que par C3 qui n'influe pas → fusion en `F, V, –`. La table minimisée compte **5 colonnes** : R3, R4, R5/6 fusionnée, R7, R8.
5. Couverture : 1 colonne réalisable = 1 cas de test.

✅ **Réponse** :
a) **8 colonnes** (2³).
b) 2 irréalisables (C1 ∧ C2), R5 + R6 fusionnables (C3 sans effet quand C2 = V).
c) **5 cas de test** (table minimisée) — ou 6 si l'on travaille sur la table non minimisée (les 6 colonnes réalisables).

> 💡 À l'examen, lisez bien si la question porte sur la table **complète** (2ⁿ), les colonnes **réalisables** (2ⁿ − irréalisables) ou la table **minimisée** (après fusion). Ce sont trois nombres différents !

---

### Exercice 3.3 — Calcul de couverture

> **Énoncé.** Une table de décision comporte **4 conditions** booléennes. Trois combinaisons sont irréalisables. Les cas de test exécutés couvrent **9 colonnes** distinctes réalisables.
> a) Combien de colonnes dans la table complète ?
> b) Quelle couverture de la table de décision est atteinte ?

**Résolution pas à pas**

1. Table complète : 2⁴ = **16 colonnes**.
2. Éléments de couverture = colonnes **réalisables** : 16 − 3 = **13**.
3. Couverture = colonnes exercées / colonnes réalisables = 9 / 13 ≈ **69,2 %**.
4. Pour 100 % : il faut exercer les 13 colonnes réalisables → 4 cas de test supplémentaires.

✅ **Réponse** : a) 16 colonnes ; b) 9/13 ≈ **69 %** (les colonnes irréalisables ne comptent **pas** dans le dénominateur).

---

## 4. Transitions d'état — FL-4.2.4 (K3)

### Rappel express

- Syntaxe d'une transition : `événement [condition de garde] / action`.
- La **table d'états** (lignes = états, colonnes = événements) montre **explicitement** les transitions invalides (cellules vides) — le diagramme, non.
- Un cas de test = une **séquence d'événements** depuis l'état initial ; il couvre en général plusieurs transitions.

| Critère | Éléments de couverture | Implique |
|---|---|---|
| **Tous les états** | les états | — |
| **Transitions valides** (0-switch) | les transitions valides | ⇒ tous les états |
| **Toutes les transitions** | transitions valides **+ invalides** (tentées) | ⇒ les deux précédents · **minimum exigé pour les logiciels critiques** (mission/sécurité) |

- ⚠️ **Une seule transition invalide par cas de test** → évite le **masquage des défauts**.

### Exercice 4.1 — Compter, puis couvrir

> **Énoncé.** Une commande en ligne suit ce modèle (état initial : Panier) :
> - Panier —`valider`→ Paiement
> - Paiement —`payer OK`→ Confirmée *(état final)*
> - Paiement —`échec paiement`→ Panier
> - Panier —`abandonner`→ Annulée *(état final)*
>
> a) Combien d'états et de transitions valides ?
> b) Nombre **minimum** de cas de test pour couvrir **tous les états** ?
> c) Nombre **minimum** de cas de test pour couvrir **toutes les transitions valides** (0-switch) ?

**Résolution pas à pas**

1. Je liste les **états** : Panier, Paiement, Confirmée, Annulée → **4 états**. Les **transitions valides** : les 4 flèches de l'énoncé → **4 transitions**.
2. **Tous les états** : Confirmée et Annulée sont des états **finaux** (aucune transition sortante). Un cas de test se termine dès qu'il y entre → un seul cas ne peut pas visiter les deux.
   - TC1 : `valider`, `payer OK` → visite Panier, Paiement, Confirmée.
   - TC2 : `abandonner` → visite Panier, Annulée.
   - → 4/4 états visités avec **2 cas** ; 1 cas est impossible (deux états finaux).
3. **Transitions valides** : même contrainte (deux transitions mènent à des états finaux distincts) → au moins 2 cas. Je vérifie que 2 suffisent :
   - TC1 : `valider` (①), `échec paiement` (③), `valider` (①), `payer OK` (②) → couvre ①, ③, ②.
   - TC2 : `abandonner` (④).
   - → 4/4 transitions valides couvertes avec **2 cas**. ✔

✅ **Réponse** : a) 4 états, 4 transitions valides ; b) **2 cas de test** ; c) **2 cas de test** (un cas peut réutiliser plusieurs fois la même boucle Panier ⇄ Paiement).

> 💡 **Réflexe** : repérez d'abord les **états finaux**. Chaque état final « consomme » une fin de cas de test → ils dictent souvent le nombre minimum de cas.

---

### Exercice 4.2 — Table d'états et transitions invalides

> **Énoncé.** Une lampe connectée a 3 états — Éteinte (E), Allumée (A), Veille (V) — et 3 événements. Table d'états (∅ = transition invalide) ; état initial : E :
>
> | État \ Événement | `bouton_on` | `bouton_off` | `minuterie` |
> |---|---|---|---|
> | **E** (Éteinte) | → A | ∅ | ∅ |
> | **A** (Allumée) | ∅ | → E | → V |
> | **V** (Veille) | → A | → E | ∅ |
>
> a) Combien d'éléments de couverture pour le critère « **toutes les transitions** » ?
> b) Si les cas de test n'exercent que les transitions valides, quelle couverture de toutes les transitions est atteinte ?
> c) Nombre **minimum** de cas de test pour 100 % de « toutes les transitions » ?

**Résolution pas à pas**

1. Je compte les cellules de la table : 3 états × 3 événements = **9 cellules**.
   - Transitions **valides** : (E, on), (A, off), (A, minuterie), (V, on), (V, off) → **5**.
   - Transitions **invalides** (cellules ∅) : (E, off), (E, minuterie), (A, on), (V, minuterie) → **4**.
2. « Toutes les transitions » = valides + invalides = 5 + 4 = **9 éléments de couverture**.
3. Si seules les 5 valides sont exercées : 5 / 9 ≈ **55,6 %**.
4. Minimum de cas : règle « **1 transition invalide par cas de test** » → il faut **au moins 4 cas** (un par transition invalide). Je vérifie que les 5 valides tiennent dans ces 4 cas :
   - TC1 : depuis E, tenter `bouton_off` (invalide ✘), puis `bouton_on` (E→A), `minuterie` (A→V), `bouton_off` (V→E) → 1 invalide + 3 valides.
   - TC2 : depuis E, tenter `minuterie` (invalide ✘), puis `bouton_on` (E→A), `bouton_off` (A→E) → 1 invalide + 1 valide nouvelle.
   - TC3 : `bouton_on` (E→A), tenter `bouton_on` (invalide ✘).
   - TC4 : `bouton_on` (E→A), `minuterie` (A→V), `bouton_on` (V→A, dernière valide restante), `minuterie` (A→V), puis tenter `minuterie` depuis V (invalide ✘).
   - → toutes les valides et les 4 invalides sont couvertes en **4 cas**. ✔

✅ **Réponse** : a) **9** (5 valides + 4 invalides) ; b) ≈ **56 %** ; c) **4 cas de test** minimum (dicté par la règle « une invalide par cas »).

---

### Exercice 4.3 — Quelle couverture atteint cette séquence ?

> **Énoncé.** Avec le modèle de l'exercice 4.1, on exécute un seul cas de test : `valider`, `échec paiement`, `abandonner`.
> a) Quelle couverture de **tous les états** ? b) Des **transitions valides** ? c) Que faut-il ajouter pour 100 % des transitions valides ?

**Résolution pas à pas**

1. Je déroule la séquence depuis Panier : `valider` → Paiement (①), `échec paiement` → Panier (③), `abandonner` → Annulée (④).
2. **États visités** : Panier, Paiement, Annulée = 3 sur 4 (Confirmée jamais atteint) → 3/4 = **75 %**.
3. **Transitions valides exercées** : ①, ③, ④ = 3 sur 4 (manque ② `payer OK`) → 3/4 = **75 %**.
4. Pour compléter : un second cas `valider`, `payer OK` couvre ② et visite Confirmée → 100 % des deux critères.

✅ **Réponse** : a) 75 % ; b) 75 % ; c) ajouter le cas de test `valider`, `payer OK`.

---

## 5. Couverture des instructions et des branches — FL-4.3.1 / FL-4.3.2 (K2, mais calculs fréquents)

### Rappel express

- **Instruction** : élément de couverture = instruction exécutable. 100 % = chaque instruction exécutée ≥ 1 fois.
- **Branche** : transfert de contrôle entre deux nœuds du graphe de flux de contrôle — **conditionnel** (résultat V/F d'un `if`, cas d'un `switch`, **sortir/continuer une boucle**) ou inconditionnel.

```
Couverture instructions (%) = instructions exercées / total instructions exécutables × 100
Couverture branches (%)     = branches exercées / total branches × 100
```

- 🔑 **100 % branches ⇒ 100 % instructions. L'inverse est FAUX** (piège n° 1 de l'examen). Le contre-exemple classique : un `if` **sans** `else`.

### Exercice 5.1 — Calculer la couverture atteinte

> **Énoncé.** Soit le pseudo-code (instructions exécutables numérotées) :
> ```
> 1  LIRE note
> 2  SI note >= 10 ALORS
> 3      AFFICHER "admis"
> 4      SI note >= 16 ALORS
> 5          AFFICHER "mention"
>    FINSI FINSI
> 6  SINON : AFFICHER "ajourné"
> 7  AFFICHER "fin"
> ```
> On exécute un seul cas de test : **note = 17**.
> a) Quelle couverture des **instructions** est atteinte ?
> b) Quelle couverture des **branches** (résultats de décision) ?
> c) Combien de cas au **minimum** pour 100 % instructions ? Pour 100 % branches ?

**Résolution pas à pas**

1. Je déroule note = 17 : ligne 1 ✔, décision ligne 2 (17 ≥ 10 → **V**) ✔, ligne 3 ✔, décision ligne 4 (17 ≥ 16 → **V**) ✔, ligne 5 ✔, ligne 6 ✘ (jamais atteinte), ligne 7 ✔.
2. **Instructions** : 6 exercées sur 7 → 6/7 ≈ **85,7 %**.
3. **Branches** : 2 décisions × 2 résultats = 4 résultats de décision. Note = 17 exerce : D1 = V ✔, D2 = V ✔. Manquent D1 = F et D2 = F → 2/4 = **50 %**.
4. **100 % instructions** : il manque seulement la ligne 6 → un cas avec note < 10 (ex. 8) la couvre. Total : **2 cas** (17 et 8).
5. **100 % branches** : il faut D1 = F (note = 8 ✔) **et** D2 = F. Or D2 n'est évaluée que si D1 = V → il faut un cas avec 10 ≤ note < 16 (ex. 12). Total : **3 cas** (17, 12, 8).

✅ **Réponse** : a) ≈ 85,7 % (6/7) ; b) 50 % (2/4) ; c) **2 cas** pour 100 % instructions, **3 cas** pour 100 % branches. On voit que la couverture des branches est plus exigeante.

---

### Exercice 5.2 — Boucle : le résultat contre-intuitif

> **Énoncé.** Soit le pseudo-code :
> ```
> 1  LIRE n
> 2  total ← 0
> 3  TANT QUE n > 0 FAIRE
> 4      total ← total + n
> 5      n ← n − 1
>    FIN TANT QUE
> 6  AFFICHER total
> ```
> a) Quelle couverture des instructions atteint le cas **n = 0** ?
> b) Combien de cas au minimum pour **100 % instructions ET 100 % branches** ?

**Résolution pas à pas**

1. **n = 0** : lignes 1, 2 ✔ ; décision ligne 3 (0 > 0 → **F**) → le corps (4, 5) est sauté ; ligne 6 ✔. → 4 instructions sur 6 → 4/6 ≈ **66,7 %**.
2. La boucle `TANT QUE` a 2 branches : **continuer** (condition V, on entre dans le corps) et **sortir** (condition F).
3. Un cas avec **n = 2** : entre dans la boucle (V ✔) deux fois, puis la condition devient fausse et on sort (F ✔) → **les deux branches de la boucle sont couvertes par ce seul cas**, et toutes les instructions (1–6) sont exécutées.

✅ **Réponse** : a) ≈ 66,7 % (4/6) ; b) **1 seul cas suffit** (tout n ≥ 1) : la boucle qui s'exécute puis se termine couvre ses deux branches. Une boucle n'exige pas forcément deux cas de test !

---

### Exercice 5.3 — Le classique « if sans else »

> **Énoncé.** Soit le pseudo-code :
> ```
> 1  SI solde < 0 ALORS
> 2      AFFICHER "découvert"
>    FINSI
> 3  AFFICHER solde
> ```
> Le cas de test **solde = −50** est exécuté.
> a) Couverture des instructions ? b) Couverture des branches ? c) Que conclure ?

**Résolution pas à pas**

1. solde = −50 : décision ligne 1 (V) ✔, ligne 2 ✔, ligne 3 ✔ → **3/3 instructions = 100 %**.
2. Branches (résultats de la décision) : V ✔, F ✘ → 1/2 = **50 %**. Il faudrait un second cas avec solde ≥ 0.
3. Conclusion : on a **100 % instructions avec seulement 50 % branches** — la preuve que 100 % instructions **n'implique pas** 100 % branches. En revanche, tout jeu de tests qui atteint 100 % branches atteint mécaniquement 100 % instructions (chaque instruction est sur une branche).

✅ **Réponse** : a) 100 % ; b) 50 % ; c) **100 % branches ⇒ 100 % instructions, jamais l'inverse.** À l'examen, toute affirmation du type « 100 % instructions garantit 100 % branches/décisions » est **fausse**.

---

## 6. Estimation en trois points — FL-5.1.4 (K3)

### Rappel express

Technique **basée sur l'expertise** : trois estimations d'experts —
**a** = la plus optimiste · **m** = la plus probable · **b** = la plus pessimiste.

```
E  = (a + 4×m + b) / 6        ← moyenne pondérée (m compte 4 fois)
SD = (b − a) / 6              ← erreur de mesure (écart-type)
Résultat final : E ± SD, soit l'intervalle [E − SD ; E + SD]
```

Les 3 autres techniques K3 du 5.1.4 : **ratios** (métrique, données historiques), **extrapolation** (métrique, idéale en itératif), **Delphi large bande** (expertise, itératif → consensus ; **Planning Poker** = sa variante Agile).

### Exercice 6.1 — Application directe

> **Énoncé.** Pour estimer l'effort de test d'un module, les experts donnent : estimation optimiste **a = 8** personnes-heures, la plus probable **m = 11**, pessimiste **b = 26**.
> Calculez l'estimation finale, l'erreur de mesure et l'intervalle d'estimation.

**Résolution pas à pas**

1. Je pose la formule : E = (a + 4m + b) / 6.
2. Je calcule le terme central d'abord : 4 × m = 4 × 11 = 44.
3. E = (8 + 44 + 26) / 6 = 78 / 6 = **13** personnes-heures.
4. SD = (b − a) / 6 = (26 − 8) / 6 = 18 / 6 = **3**.
5. Intervalle : E ± SD = 13 ± 3 → **[10 ; 16]**.

✅ **Réponse** : E = **13 personnes-heures**, SD = **3**, soit un effort estimé **entre 10 et 16 personnes-heures** (13 ± 3).

---

### Exercice 6.2 — Deuxième passage (en personnes-jours)

> **Énoncé.** a = 3, m = 6, b = 15 (personnes-jours). Donnez l'estimation sous la forme « E ± SD » et l'intervalle.

**Résolution pas à pas**

1. 4 × m = 24.
2. E = (3 + 24 + 15) / 6 = 42 / 6 = **7** personnes-jours.
3. SD = (15 − 3) / 6 = 12 / 6 = **2**.
4. Intervalle : 7 ± 2 → **[5 ; 9]** personnes-jours.

✅ **Réponse** : **7 ± 2 personnes-jours**, soit entre 5 et 9 personnes-jours.

> ⚠️ **Pièges d'examen** : oublier le facteur **4** devant m ; diviser par 3 au lieu de **6** ; calculer SD = (b − a) / 4 ; inverser a et b. Les distracteurs de l'examen correspondent exactement à ces erreurs — si votre résultat n'est pas un nombre « rond », refaites le calcul.

---

### Exercice 6.3 — Bonus : ratios et extrapolation (aussi K3 !)

> **Énoncé.**
> a) Sur le projet précédent, le rapport effort de développement : effort de test était de **3:2**. Le nouveau projet prévoit **450 personnes-jours** de développement. Estimez l'effort de test.
> b) Les trois dernières itérations ont demandé **24, 30 et 36 heures** de test. Estimez par extrapolation l'effort de test de la prochaine itération.

**Résolution pas à pas**

1. a) Ratio 3:2 → effort de test = 2/3 de l'effort de développement = 450 × 2 / 3 = **300 personnes-jours**.
2. b) Extrapolation la plus simple : moyenne des itérations passées = (24 + 30 + 36) / 3 = 90 / 3 = **30 heures**.

✅ **Réponse** : a) **300 personnes-jours** ; b) **30 heures**. Retenez la classification : ratios et extrapolation = **basées sur les métriques** ; Delphi large bande et 3 points = **basées sur l'expertise**.

---

## 🧠 Réflexes examen — les automatismes K3

### Partitions d'équivalence
1. **Dessiner la droite des valeurs**, placer les bornes, hachurer valide / invalide.
2. Compter **toutes** les partitions, invalides comprises → 1 partition = 1 cas de test minimum.
3. Plusieurs paramètres + « Each Choice » → réponse = **max** du nombre de partitions par ensemble (jamais la somme, jamais le produit).
4. Question de couverture → dénominateur = **partitions identifiées**, numérateur = partitions réellement touchées par les tests listés.

### BVA
1. Vérifier que la partition est **ordonnée** (sinon BVA inapplicable — piège théorique).
2. Souligner chaque **borne** dans l'énoncé, y compris les bornes **internes** entre partitions adjacentes.
3. **2 valeurs** = borne + voisin **hors partition**. **3 valeurs** = borne + **les deux** voisins.
4. Faire l'**union** et éliminer les doublons **avant** de compter — les frontières internes en produisent toujours.
5. « Bornes incluses/excluses » : relire deux fois ; « strictement inférieur à 100 » → la borne valide est 99.

### Tables de décision
1. n conditions → écrire immédiatement **2ⁿ** ; dessiner la table en alternant V/F en binaire (jamais de colonne oubliée).
2. Chasser les combinaisons **irréalisables** (conditions mutuellement exclusives : âge, statuts…) → elles sortent du dénominateur de couverture.
3. Fusionner les colonnes de même action qui ne diffèrent que par une condition sans effet (`–`).
4. **1 colonne réalisable = 1 cas de test.** Bien lire : table complète, réalisable ou minimisée ?

### Transitions d'état
1. **Compter d'abord** : nb d'états, nb de transitions valides, nb de cellules vides (invalides) — avant même de lire les questions.
2. Hiérarchie à réciter : **toutes les transitions ⊃ transitions valides (0-switch) ⊃ tous les états**.
3. États **finaux** (sans sortie) → chacun force la fin d'un cas de test → ils déterminent souvent le minimum de cas.
4. « Toutes les transitions » → ajouter les invalides, **une seule invalide par cas de test** (anti-masquage des défauts).
5. Logiciel critique (mission/sécurité) → exiger « **toutes les transitions** ».

### Instructions / branches
1. Numéroter les instructions exécutables, puis **dérouler chaque cas de test au crayon** ligne par ligne.
2. Repérer les **`if` sans `else`** : c'est le signal du piège « 100 % instructions ≠ 100 % branches ».
3. Réciter : **100 % branches ⇒ 100 % instructions ; l'inverse est faux.** Éliminer d'office toute réponse qui viole cette hiérarchie.
4. Une **boucle** = une décision (continuer/sortir) ; un cas qui entre **puis** sort de la boucle couvre ses deux branches.
5. Décision imbriquée (if dans if) → la branche F de l'interne exige un cas dédié → souvent 3 cas pour 100 % branches quand 2 suffisent pour les instructions.

### Estimation (chapitre 5)
1. Écrire les formules **avant** de lire les réponses : `E = (a + 4m + b)/6` et `SD = (b − a)/6`.
2. Calculer **4 × m en premier**, puis la somme, puis diviser par 6. Résultat presque toujours entier à l'examen.
3. L'intervalle demandé = **[E − SD ; E + SD]**, jamais [a ; b].
4. Classer sans hésiter : ratios / extrapolation = **métriques** ; Delphi large bande (+ Planning Poker) / 3 points = **expertise**.

### Hygiène générale K3
- Ces questions se **calculent**, elles ne se devinent pas : brouillon systématique, même pour « facile ».
- Les distracteurs correspondent aux **erreurs de méthode classiques** (somme au lieu de max, oubli des invalides, /4 au lieu de /6…) : si votre réponse figure dans les choix, c'est bien — mais vérifiez qu'elle ne correspond pas à un piège connu.
- Budget temps : ~1,5 min par question K3. Si un décompte devient long, marquer la question et y revenir.

---

*Fiche 02 — à travailler avec la fiche 01 (synthèse) et la fiche 03 (pièges). Bon courage pour J-5 ! 🎓*
