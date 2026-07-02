# Chapitre 3 — Test statique (80 min)

## Mots-clés
anomalie, test dynamique, revue formelle, revue informelle, inspection, revue, analyse statique, test statique, revue technique, relecture technique (walkthrough).

> 🎯 **4 questions à l'examen** sur ce chapitre. Le point le plus examiné : la comparaison des **types de revues** (3.2.4).

---

## 3.1 Bases du test statique

Le test statique = examen **sans exécution** du logiciel testé. Deux familles :
- **Revues** — examen manuel (humain) des produits d'activités
- **Analyse statique** — examen à l'aide d'**outils** (le code, les modèles…)

Objectifs : améliorer la qualité, détecter des défauts, évaluer des caractéristiques telles que **lisibilité, complétude, justesse, testabilité, cohérence**.

Le test statique s'applique à la **vérification ET à la validation**.

**En Agile** : testeurs, représentants métier et développeurs collaborent lors des sessions de **cartographie d'exemples** (example mapping), de **rédaction collaborative de user stories** et d'**affinage du backlog** (backlog refinement) — pour vérifier que les user stories respectent les critères définis (ex. **Definition of Ready**, voir 5.1.3) : complètes, compréhensibles, avec des **critères d'acceptation testables**. Les testeurs posent les bonnes questions, explorent et remettent en question les user stories proposées.

**L'analyse statique** :
- identifie les problèmes **avant** le test dynamique, souvent avec **moins d'effort** (aucun cas de test nécessaire, outils utilisés)
- est souvent incorporée dans les frameworks d'**intégration continue** (CI, voir 2.1.4)
- détecte des défauts de code, mais évalue aussi la **maintenabilité** et la **sécurité**
- autres exemples d'outils : **vérificateurs d'orthographe**, outils de **lisibilité**

### 3.1.1 Produits d'activités examinables par le test statique (K1)

Presque **tous** les produits d'activités peuvent être examinés :
- Spécifications d'exigences
- Code source
- Plans de test, cas de test, chartes de test
- Éléments du **product backlog**
- Documentation du projet, **contrats**, **modèles**

Règles à retenir :

| Technique | Condition sur le produit |
|---|---|
| **Revue** | Tout ce qui peut être **lu et compris** par un humain |
| **Analyse statique** | Besoin d'une **structure** vérifiable : modèles, code, texte à **syntaxe formelle** |

❌ **Ne conviennent PAS au test statique** : les produits **difficiles à interpréter par des humains** ET qui **ne devraient pas être analysés par des outils** (ex. code exécutable d'une **tierce partie**, pour des raisons **juridiques**).

### 3.1.2 Valeur du test statique (K2)

- **Détection précoce** des défauts, dès les premières phases du SDLC (→ principe « tester tôt économise temps et argent », voir 1.3)
- Détecte des défauts **non détectables par le test dynamique** :
  - **code inaccessible** (code mort)
  - **canevas de conception** (design patterns) non implémentés comme souhaité
  - défauts dans des **produits d'activités non exécutables** (exigences, contrats…)
- Évalue la qualité des produits d'activités et **construit la confiance**
- En vérifiant les exigences documentées, les parties prenantes s'assurent qu'elles décrivent leurs **besoins réels**
- Crée une **compréhension partagée** et améliore la **communication** entre parties prenantes → recommandé d'impliquer une **grande variété de parties prenantes**
- Coût : les revues peuvent être coûteuses, mais les **coûts globaux du projet sont généralement bien plus faibles** (moins de corrections tardives)
- L'**analyse statique** détecte les défauts de code de façon **plus efficiente** que le test dynamique → moins de défauts de code, effort de développement global réduit

### 3.1.3 Différences test statique vs test dynamique (K2)

Les deux pratiques se **complètent** : objectifs similaires (détecter des défauts), mais certains types de défauts ne sont trouvés **que** par l'une ou l'autre.

| Aspect | Test statique | Test dynamique |
|---|---|---|
| Exécution du code ? | **Non** | **Oui** |
| Trouve… | **Directement les défauts** | Provoque des **défaillances** → les défauts sont déterminés par **analyse ultérieure** |
| Chemins rarement exécutés / difficiles à atteindre | **Plus facile** | Difficile |
| Produits non exécutables | ✅ Applicable | ❌ Exécutables uniquement |
| Caractéristiques qualité mesurées | Indépendantes de l'exécution : **maintenabilité**, sécurité… | Dépendantes de l'exécution : **efficacité de la performance**, fiabilité… |
| Débogage associé | Élimination directe (pas de reproduction ni diagnostic) | Reproduction → diagnostic → correction |

**Défauts typiques plus faciles / moins coûteux à trouver par le test statique** ⭐ :

| Catégorie | Exemples |
|---|---|
| **Exigences** | incohérences, ambiguïtés, contradictions, omissions, inexactitudes, duplications |
| **Conception** | structures de base de données inefficaces, modularité insuffisante |
| **Codage** | variables à valeurs non définies, variables non déclarées, code inaccessible ou dupliqué, complexité excessive |
| **Standards** | non-respect des conventions de nommage des standards de codage |
| **Interfaces** | nombre, type ou ordre des paramètres non concordants |
| **Sécurité** | certaines vulnérabilités (ex. débordements de mémoire tampon / buffer overflows) |
| **Couverture** | lacunes/imprécisions dans la couverture de la base de test (ex. tests manquants pour un critère d'acceptation) |

> 💡 À l'inverse, les défauts typiquement trouvés en **dynamique** : défauts de performance, de fiabilité, comportements erronés visibles seulement à l'exécution (défaillances).

---

## 3.2 Processus de feedback et de revue

### 3.2.1 Bénéfices d'un feedback précoce et fréquent des parties prenantes (K1)

- Communique **rapidement** les problèmes de qualité potentiels
- Si les parties prenantes sont peu impliquées → risque que le produit ne corresponde pas à leur **vision initiale ou actuelle**
- Évite : rectifications coûteuses, délais non respectés, jeux de reproches, voire **échec total du projet**
- Évite les **malentendus sur les exigences** ; les changements d'exigences sont compris et mis en œuvre **plus tôt**
- L'équipe améliore sa **compréhension de ce qu'elle construit**
- Permet de se concentrer sur les caractéristiques **apportant le plus de valeur** et ayant l'impact le plus positif sur les **risques identifiés**

### 3.2.2 Activités du processus de revue (ISO/IEC 20246) ⭐ (K2)

Le standard **ISO/IEC 20246** définit un processus de revue **générique**, cadre structuré mais **flexible**, adaptable à chaque situation. Plus la revue est **formelle**, plus le nombre de tâches est important. Un produit trop volumineux pour un seul réviseur → le processus peut être **invoqué plusieurs fois**.

| # | Activité | Contenu |
|---|---|---|
| 1 | **Planification** | Définir le **périmètre** : objectif, produit d'activités à examiner, caractéristiques qualité à évaluer, domaines à privilégier, **critères de sortie**, informations complémentaires (standards), **effort** et **délais** |
| 2 | **Lancement de la revue** | S'assurer que **tout le monde est prêt** : accès au produit, compréhension des rôles et responsabilités, réception de tout ce qui est nécessaire |
| 3 | **Revue individuelle** | Chaque réviseur évalue la qualité et identifie **anomalies, recommandations, questions** en appliquant une ou plusieurs **techniques de revue** (basée sur checklist, basée sur scénarios…). Tout est **enregistré** |
| 4 | **Communication et analyse** | Les anomalies **ne sont pas nécessairement des défauts** → analyse et discussion. Pour chaque anomalie : décision sur **statut, responsable, actions**. Généralement en **réunion de revue** : décision sur le **niveau de qualité** du produit et les actions de suivi. Une **revue de suivi** peut être nécessaire |
| 5 | **Correction et rapport** | Créer un **rapport de défaut** pour chaque défaut (suivi des corrections). Quand les **critères de sortie sont atteints** → le produit peut être **accepté**. Les résultats sont **rapportés** |

> ⚠️ Piège : une **anomalie** relevée en revue individuelle n'est pas automatiquement un **défaut** — elle doit d'abord être analysée/discutée (activité 4).

### 3.2.3 Rôles et responsabilités dans les revues (K1)

| Rôle | Responsabilité |
|---|---|
| **Manager** | Décide **ce qui** doit être revu ; fournit les **ressources** (personnel, temps) |
| **Auteur** | **Crée et corrige** le produit d'activités revu |
| **Modérateur** (facilitateur) | Assure le déroulement **efficace des réunions** : médiation, gestion du temps, **environnement sûr** où chacun s'exprime librement |
| **Scribe** (rapporteur) | **Rassemble les anomalies** des réviseurs ; **enregistre** les informations de la revue (décisions, nouvelles anomalies trouvées en réunion) |
| **Réviseur** | **Effectue les revues** ; peut être membre du projet, expert du sujet ou toute autre partie prenante |
| **Responsable de la revue** (review leader) | **Responsabilité générale** de la revue : décide **qui** est impliqué, organise **où et quand** |

> 💡 Distinction piégeuse : le **manager** décide *ce qui* est revu ; le **responsable de la revue** décide *qui participe, où et quand*. Une même personne peut jouer plusieurs rôles. D'autres rôles plus détaillés existent dans ISO/IEC 20246.

### 3.2.4 Types de revues ⭐ TRÈS EXAMINÉ (K2)

Le niveau de formalité dépend : du cycle de vie suivi, de la **maturité** du processus de développement, de la **criticité/complexité** du produit, des exigences **légales/réglementaires**, des besoins d'**audit**.
Le choix du type dépend aussi : besoins du projet, disponibilités, type de produit et risques, domaine d'activité, **culture d'entreprise**.

| Critère | Revue informelle | Relecture technique (walkthrough) | Revue technique | Inspection |
|---|---|---|---|---|
| **Formalité** | Aucune (pas de processus défini) | Faible à variable | Moyenne à élevée | **Maximale** (processus générique complet) |
| **Objectif principal** | **Détecter des anomalies** | Multiples : qualité, confiance, **formation des réviseurs**, **consensus**, nouvelles idées, motivation de l'auteur, détection d'anomalies | **Consensus + décisions sur un problème technique** (+ détection, qualité, confiance, idées, motivation) | **Trouver le MAXIMUM d'anomalies** (+ qualité, confiance, motivation, amélioration du processus) |
| **Animée par** | — (pas de réunion requise) | **L'AUTEUR** | **Modérateur** | **Modérateur** (formé) |
| **Réviseurs** | Un collègue suffit | Équipe / pairs | **Techniquement qualifiés** | Formés ; **l'auteur ne peut être ni réviseur ni scribe** |
| **Préparation individuelle** | Non requise | **Optionnelle** | Oui | **Oui, obligatoire** |
| **Checklists / règles** | Non | Optionnelles | Possibles | **Oui** (processus formel) |
| **Scribe / résultats documentés** | Résultat formel **non exigé** | Scribe souvent présent, compte-rendu possible | Oui, anomalies consignées | **Oui**, tout est documenté |
| **Métriques** | Non | Non | Rarement | **Oui — collectées et utilisées pour améliorer le SDLC**, y compris le processus d'inspection lui-même |

> 💡 Un même produit peut être revu **plusieurs fois avec des types différents** — ex. d'abord une revue informelle, puis une revue plus formelle.

**Détail par type (formulations du syllabus)** :

- **Revue informelle**
  - Ne suit **pas un processus défini**, n'exige **pas de résultat formel documenté**
  - Objectif principal : **détecter des anomalies**
  - Formes courantes : buddy check, pair review, relecture rapide par un collègue

- **Relecture technique (walkthrough)**
  - **Menée par l'auteur**
  - Objectifs multiples : évaluer la qualité et construire la confiance, **former les réviseurs**, obtenir un **consensus**, générer de **nouvelles idées**, **motiver l'auteur** et lui permettre de s'améliorer, détecter des anomalies
  - Revue individuelle préalable **possible mais non obligatoire**

- **Revue technique**
  - Réviseurs **techniquement qualifiés**, dirigée par un **modérateur**
  - Objectifs : **consensus et prise de décision sur un problème technique**, détecter des anomalies, évaluer la qualité, construire la confiance, générer des idées, motiver l'auteur

- **Inspection**
  - Type de revue **le plus formel** → suit le **processus générique complet** (voir 3.2.2)
  - Objectif principal : **trouver le maximum d'anomalies**
  - Autres objectifs : évaluer la qualité, construire la confiance, motiver l'auteur et lui permettre de s'améliorer
  - **Métriques collectées** → amélioration du SDLC **et** du processus d'inspection lui-même
  - **L'auteur ne peut pas être réviseur ni scribe**

**Moyens mnémotechniques** :
- Walkthrough = « l'auteur fait *marcher* les autres à travers son document » → mené par l'**auteur**, préparation **optionnelle**.
- Revue **T**echnique = consensus/décision **T**echnique, réviseurs **T**echniquement qualifiés.
- **I**nspection = **I**ntense : la plus formelle, **max d'anomalies**, **métriques**, auteur exclu des rôles de réviseur/scribe.

### 3.2.5 Facteurs de réussite des revues (K1)

- **Objectifs clairs** et **critères de sortie mesurables** — l'évaluation des participants ne doit **jamais** être un objectif ⚠️
- Choisir le **type de revue approprié** aux objectifs, au type de produit, aux participants, aux besoins du projet et au contexte
- Revues en **petits groupes** (éviter la déconcentration en revue individuelle et en réunion)
- Fournir un **feedback** aux parties prenantes et aux auteurs (amélioration du produit et des activités)
- Accorder **suffisamment de temps de préparation**
- **Soutien du management** au processus de revue
- **Intégration dans la culture** de l'organisation → apprentissage et amélioration des processus
- **Formation adéquate** de tous les participants à leur rôle
- **Faciliter** les réunions

---

## 📝 À l'examen — Chapitre 3

**4 questions** sur les 40 de l'examen. Répartition typique : 2 questions K1 (3.1.1, 3.2.1, 3.2.3 ou 3.2.5) + 2 questions K2 (souvent 3.2.4 et 3.1.2 ou 3.1.3 ou 3.2.2).

**Pièges fréquents** :
1. **Walkthrough mené par l'AUTEUR** vs revue technique menée par le **MODÉRATEUR** — l'inversion est le piège n°1.
2. Objectif **principal** de l'inspection = trouver le **maximum d'anomalies** (pas le consensus ; le consensus = revue technique).
3. Dans une **inspection**, l'auteur **ne peut pas** être réviseur ni scribe (il reste présent en tant qu'auteur).
4. **Statique → défauts directement** ; **dynamique → défaillances** puis analyse pour trouver les défauts.
5. Une **anomalie** trouvée en revue n'est pas forcément un **défaut** (d'où l'activité « communication et analyse »).
6. Ordre des 5 activités : **P**lanification → **L**ancement → **R**evue individuelle → **C**ommunication & analyse → **C**orrection & rapport (« **PLRCC** »).
7. **Manager** = décide *quoi* revoir + ressources ; **responsable de la revue** = *qui/où/quand*.
8. Évaluer les **participants** n'est **jamais** un objectif de revue (facteur de réussite piège).
9. Le test statique couvre **vérification ET validation** (pas seulement la vérification).
10. Le **code mort**, les **exigences ambiguës**, les **standards de nommage** → statique ; la **performance** → dynamique.

---

## ⚡ Quiz éclair (auto-contrôle)

| Question | Réponse |
|---|---|
| Qui mène un walkthrough ? | L'**auteur** |
| Objectif principal d'une inspection ? | Trouver le **maximum d'anomalies** |
| Objectif principal d'une revue technique ? | **Consensus + décisions** sur un problème technique |
| Type de revue sans processus défini ni résultat documenté ? | Revue **informelle** |
| Où sont collectées des métriques pour améliorer le processus ? | **Inspection** |
| Dans quelle activité décide-t-on du statut de chaque anomalie ? | **Communication et analyse** |
| Qui fournit les ressources (personnel, temps) ? | Le **manager** |
| Qui décide qui participe, où et quand ? | Le **responsable de la revue** |
| Qui garantit un environnement de réunion sûr ? | Le **modérateur** (facilitateur) |
| Qui enregistre les décisions et anomalies en réunion ? | Le **scribe** (rapporteur) |
| Le test statique trouve des défauts ou des défaillances ? | Des **défauts** (directement) |
| Un buffer overflow se trouve plutôt en statique ou dynamique ? | **Statique** (analyse statique) |
| L'analyse statique exige quoi du produit ? | Une **structure** (code, modèle, syntaxe formelle) |
| Standard du processus de revue générique ? | **ISO/IEC 20246** |
| L'évaluation des participants peut-elle être un objectif ? | **Jamais** |

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-3.1.1 | K1 | Reconnaître les types de produits examinables par les techniques de test statique |
| FL-3.1.2 | K2 | Expliquer la valeur du test statique |
| FL-3.1.3 | K2 | Comparer et opposer test statique et test dynamique |
| FL-3.2.1 | K1 | Identifier les avantages d'un feedback précoce et fréquent des parties prenantes |
| FL-3.2.2 | K2 | Résumer les activités du processus de revue |
| FL-3.2.3 | K1 | Rappeler les responsabilités des rôles principaux dans les revues |
| FL-3.2.4 | K2 | Comparer et opposer les différents types de revues |
| FL-3.2.5 | K1 | Rappeler les facteurs contribuant à la réussite d'une revue |
