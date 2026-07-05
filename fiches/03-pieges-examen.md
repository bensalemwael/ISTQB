# Pièges classiques de l'examen — ISTQB CTFL v4.0

> 40 QCM · 26/40 pour réussir · Lisez CHAQUE mot de la question. La plupart des erreurs viennent d'une lecture trop rapide, pas d'un manque de connaissances.

---

## 1. Erreur vs Défaut vs Défaillance (et cause racine)

**La confusion** : utiliser ces trois termes comme synonymes de « bug ».

**La règle exacte** :
```
Cause racine → Erreur (humaine) → Défaut (dans un artefact) → Défaillance (à l'exécution)
```
- **Erreur** (error/mistake) : action **humaine** (méprise) — fatigue, pression du temps, complexité, manque de formation
- **Défaut** (defect/fault/bug) : imperfection dans un **artefact** — code, exigence, script de test, fichier de build
- **Défaillance** (failure) : comportement incorrect observé **à l'exécution**
- **Cause racine** : raison **fondamentale** du problème (ex. la situation qui a conduit à l'erreur) ; identifiée par l'analyse des causes racines

**Pièges associés** :
- Un défaut **n'entraîne pas toujours** une défaillance (certains ne se manifestent jamais, d'autres seulement dans des circonstances spécifiques)
- Les défaillances peuvent aussi venir de **conditions environnementales** (radiations, champs électromagnétiques) — pas seulement d'erreurs humaines
- Un défaut dans une **exigence** peut se propager en défauts dans le code (effet cascade)

**Question piège** : « Un testeur observe qu'un calcul de TVA affiche un montant faux. De quoi s'agit-il ? »
✅ **Une défaillance** (comportement observé à l'exécution). Le défaut est la ligne de code fautive ; l'erreur est la méprise du développeur.

---

## 2. Test vs Débogage

**La confusion** : croire que le débogage fait partie du test.

**La règle exacte** : ce sont des activités **distinctes**.
- **Test** (dynamique) : déclenche des défaillances / constate des défauts
- **Débogage** : **reproduction** de la défaillance → **diagnostic** (trouver la cause racine) → **correction** de la cause
- Après le débogage : **test de confirmation** (de préférence par la même personne qui a fait le test initial) puis **tests de régression**
- Cas particulier : après un **test statique**, le débogage = simplement **éliminer le défaut** — pas de reproduction ni de diagnostic (aucune défaillance n'a été provoquée)

**Question piège** : « Le débogage comprend : reproduire la défaillance, diagnostiquer, corriger… et exécuter le test de confirmation. Vrai ? »
✅ **Faux** — le test de confirmation est une activité de **test**, pas de débogage.

---

## 3. Test vs Assurance Qualité (QA vs QC)

**La confusion** : « test » = « assurance qualité ». Non !

**La règle exacte** : le test est une forme de **contrôle qualité (QC)**.
| | Contrôle qualité (QC) | Assurance qualité (QA) |
|---|---|---|
| Approche | **Corrective** | **Préventive** |
| Axée sur | Le **produit** | Les **processus** |
| Principe | Atteindre les niveaux de qualité | Un bon processus → un bon produit |
| Responsabilité | Équipes concernées | **Tous** les acteurs du projet |

- Les **résultats de test** sont utilisés par les **deux** : en QC pour corriger les défauts, en QA pour évaluer l'efficacité des processus

**Question piège** : « L'assurance qualité se concentre principalement sur la détection et la correction des défauts. »
✅ **Faux** — ça, c'est le contrôle qualité. La QA est préventive et axée processus.

---

## 4. Sévérité vs Priorité

**La confusion** : croire que sévérité élevée ⇒ priorité élevée (et inversement).

**La règle exacte** : ce sont deux attributs **indépendants** du rapport de défaut.
- **Sévérité** : **degré d'impact** du défaut sur les intérêts des parties prenantes ou les exigences (point de vue technique/métier)
- **Priorité** : **urgence** de la correction (ordre de traitement, point de vue business/planification)

**Exemples croisés** :
- Faute d'orthographe dans le nom de l'entreprise sur la page d'accueil : sévérité **faible**, priorité **élevée**
- Crash d'une fonction obscure utilisée une fois par an : sévérité **élevée**, priorité **faible**

**Question piège** : « Un défaut de sévérité critique doit TOUJOURS être corrigé en premier. »
✅ **Faux** — l'ordre de correction est déterminé par la **priorité**, définie par le business.

---

## 5. Test de confirmation vs Test de régression

**La confusion** : intervertir les deux, ou oublier lequel vérifie quoi.

**La règle exacte** :
- **Confirmation** (re-test) : le défaut original **a-t-il bien été corrigé** ? (ré-exécuter les tests qui avaient échoué, ou ajouter de nouveaux tests)
- **Régression** : la modification (correction OU nouvelle fonctionnalité) **a-t-elle cassé autre chose** ailleurs ? (effets de bord non intentionnels)

**Pièges associés** :
- La régression concerne aussi **d'autres composants, d'autres systèmes connectés, voire l'environnement**
- Une **analyse d'impact** aide à optimiser l'étendue du test de régression
- Les tests de régression sont d'**excellents candidats à l'automatisation** (répétés souvent — exception bénéfique au paradoxe du pesticide)
- Confirmation et régression sont nécessaires **à tous les niveaux de test** où l'on corrige/modifie

**Question piège** : « Après correction d'un défaut, on ré-exécute le cas de test qui avait échoué. De quel test s'agit-il ? »
✅ **Test de confirmation** (pas régression — on vérifie la correction elle-même).

---

## 6. Vérification vs Validation

**La confusion** : les deux mots se ressemblent, les définitions s'inversent facilement.

**La règle exacte** :
- **Vérification** : conformité aux **exigences spécifiées** → « construit-on le produit **correctement** ? »
- **Validation** : conformité aux **besoins des utilisateurs et parties prenantes** dans l'environnement opérationnel → « construit-on le **bon** produit ? »
- Le test inclut **les deux** (idée fausse : le test = seulement vérification)
- Le principe n°7 (« illusion de l'absence de défauts ») rappelle que la vérification seule ne suffit pas : il faut **aussi valider**

**Question piège** : « Un système passe tous les tests dérivés des exigences, mais les utilisateurs le rejettent. Quel principe est illustré ? »
✅ **L'illusion de l'absence de défauts** (principe 7) — vérifié mais pas validé.

---

## 7. Test statique vs Analyse statique vs Revue

**La confusion** : croire que test statique = revue, ou que l'analyse statique est manuelle.

**La règle exacte** :
```
Test statique (sans exécution du logiciel)
├── Revues (examen MANUEL — tout produit lisible et compréhensible)
└── Analyse statique (avec OUTIL — exige une structure formelle : code, modèles)
```
- Le test statique **constate directement les défauts** ; le test dynamique provoque des **défaillances** puis on remonte au défaut par analyse
- Le test statique s'applique aux produits **non exécutables** (exigences, contrats, plans de test…) et mesure des caractéristiques indépendantes de l'exécution (ex. maintenabilité)
- Typiques du statique : code inaccessible, variables non déclarées, écarts aux standards, ambiguïtés dans les exigences, vulnérabilités (débordement de tampon)
- L'analyse statique est souvent intégrée aux outils de **CI** ; elle demande moins d'effort car **aucun cas de test n'est nécessaire**

**Question piège** : « Le test statique ne peut pas détecter les vulnérabilités de sécurité. »
✅ **Faux** — l'analyse statique détecte par exemple les débordements de mémoire tampon.

---

## 8. Relecture technique (walkthrough) vs Revue technique vs Inspection

**La confusion** : qui anime ? préparation individuelle obligatoire ou non ?

**La règle exacte** :
| Type | Animée/menée par | Revue individuelle préalable | Objectif principal | Particularités |
|---|---|---|---|---|
| **Revue informelle** | – | Non exigée | Détecter des anomalies | Pas de processus défini, pas de résultat documenté formel exigé |
| **Relecture technique (walkthrough)** | **L'AUTEUR** | **Optionnelle** (pas obligatoire) | Multiples : qualité, consensus, former, générer des idées, détecter des anomalies | La moins formelle des revues « avec réunion » |
| **Revue technique** | Un **MODÉRATEUR** (réviseurs techniquement qualifiés) | **Oui** | **Consensus et décisions** sur un problème technique | |
| **Inspection** | Processus complet, rôles stricts | **Oui** | **Trouver le MAXIMUM d'anomalies** | La plus formelle ; **métriques** collectées ; l'auteur ne peut être **ni réviseur ni scribe** |

**Questions pièges** :
- « Qui mène une relecture technique ? » ✅ **L'auteur** (dans la revue technique, c'est le modérateur)
- « Dans quelle revue l'auteur ne peut-il pas être scribe ? » ✅ **L'inspection**
- « L'objectif principal de l'inspection est d'obtenir un consensus. » ✅ **Faux** — c'est trouver le maximum d'anomalies (le consensus = revue technique)

**Rappel rôles de revue** : Manager (décide quoi revoir, fournit ressources) · Auteur (crée et corrige) · Modérateur/facilitateur (réunions efficaces, médiation) · Scribe/rapporteur (consigne anomalies et décisions) · Réviseur (effectue la revue) · Responsable de la revue (responsabilité générale, décide qui participe, lieu et date).

---

## 9. BVA 2 valeurs vs 3 valeurs

**La confusion** : combien d'éléments de couverture par limite ?

**La règle exacte** (BVA = analyse des valeurs limites, uniquement sur des **partitions ordonnées**) :
- **2 valeurs** : la valeur limite + sa **voisine la plus proche dans la partition adjacente** → 2 éléments de couverture par limite
- **3 valeurs** : la valeur limite + ses **deux voisines** → 3 éléments de couverture par limite (plus rigoureuse)

**Exemple type** : partition valide 1..10 (limites 1 et 10)
- BVA 2 valeurs : {0, 1, 10, 11}
- BVA 3 valeurs : {0, 1, 2, 9, 10, 11}

**Pourquoi 3 valeurs ?** Si « x ≤ 10 » est implémenté par erreur « x = 10 » : les tests {10, 11} (2 valeurs) ne détectent rien ; **x = 9** (3 valeurs) détecte le défaut.

**Question piège** : « Avec la BVA 2 valeurs sur la partition 1..100, combien de valeurs de test pour couvrir 100 % ? »
✅ **4** : 0, 1, 100, 101.

---

## 10. Couverture des branches vs couverture des instructions

**La confusion** : quelle couverture « englobe » l'autre ?

**La règle exacte** :
- **100 % branches ⇒ 100 % instructions** (la couverture des branches **englobe** celle des instructions)
- **L'inverse est FAUX** : 100 % instructions ne garantit PAS 100 % branches (ex. un `if` sans `else` : une seule exécution avec condition vraie couvre toutes les instructions, mais pas la branche « faux »)
- Une branche = transfert de contrôle entre deux nœuds du graphe de flux de contrôle (conditionnel ou inconditionnel)
- 100 % de couverture ne prouve pas l'absence de défauts (défauts dépendant des données, ex. division par zéro ; chemins spécifiques non exercés)
- Les tests boîte blanche trouvent des défauts même si la spécification est vague — mais **ne détectent pas les exigences non implémentées** (omissions)

**Question piège** : « Une suite de tests atteint 100 % de couverture des instructions. Atteint-elle 100 % de couverture des branches ? »
✅ **Pas nécessairement** — c'est l'implication inverse qui est vraie.

---

## 11. Transitions d'état : tous les états vs 0-switch vs toutes les transitions

**La confusion** : hiérarchie des critères de couverture.

**La règle exacte** (du plus faible au plus fort) :
1. **Tous les états** : chaque état visité au moins une fois (le plus faible)
2. **Transitions valides = 0-switch** : chaque transition **valide** exercée ⇒ garantit tous les états (critère **le plus utilisé**)
3. **Toutes les transitions** : transitions valides + **tentatives** de transitions invalides ⇒ garantit les deux précédents — **exigence minimale pour les logiciels critiques** (mission/sécurité)

**Pièges associés** :
- Les transitions **invalides** apparaissent dans la **table d'états** (cellules vides), pas dans le diagramme
- Tester **une seule transition invalide par cas de test** (éviter le masquage des défauts)
- Syntaxe d'une transition : « événement [condition de garde] / action »

**Question piège** : « La couverture 0-switch exige de tester les transitions invalides. »
✅ **Faux** — 0-switch = transitions **valides** uniquement. Les invalides relèvent de « toutes les transitions ».

---

## 12. Critères d'entrée (DoR) vs Critères de sortie (DoD)

**La confusion** : inverser les deux notions Agile.

**La règle exacte** :
- **Critères d'entrée** : préconditions pour **commencer** une activité (ressources disponibles, testware disponible, niveau de qualité initial — ex. smoke tests réussis). En Agile : **Definition of Ready (DoR)** — ce qu'une User Story doit remplir pour démarrer développement/test
- **Critères de sortie** : ce qui doit être réalisé pour déclarer une activité **achevée** (mesures d'exhaustivité : couverture atteinte, défauts non résolus, densité de défauts ; critères de clôture). En Agile : **Definition of Done (DoD)**
- **Piège classique** : l'**épuisement du temps ou du budget** PEUT être un critère de sortie valable — si les parties prenantes ont revu et accepté le risque de livrer sans tests supplémentaires

**Question piège** : « Terminer les tests parce que le budget est épuisé n'est jamais acceptable. »
✅ **Faux** — c'est acceptable si les parties prenantes acceptent le risque résiduel.

---

## 13. Risque produit vs Risque projet

**La confusion** : classer un exemple dans la mauvaise catégorie.

**La règle exacte** :
- **Risque projet** : lié à la **gestion et au contrôle du projet** → problèmes **organisationnels** (retards, mauvaises estimations), **humains** (compétences, conflits, manque de personnel), **techniques** (dépassement de périmètre, manque d'outils), **fournisseurs** (défaillance d'un tiers, faillite). Impact : calendrier, budget, périmètre
- **Risque produit** : lié aux **caractéristiques-qualité du produit** (ISO 25010) → fonctionnalités manquantes/incorrectes, calculs erronés, temps de réponse inadéquat, vulnérabilités de sécurité, mauvaise UX. Conséquences : insatisfaction, perte de revenus/réputation, dommages, sanctions, blessures/décès
- **Niveau de risque = probabilité × impact** (probabilité : > 0 et < 1 — jamais 0 ni 1 !)
- Analyse des risques = **identification + évaluation** · Contrôle des risques = **atténuation + surveillance (pilotage)**
- Réponses possibles au risque : atténuation, acceptation, transfert, plan d'urgence

**Question piège** : « Le départ du testeur senior en plein projet est un risque produit. »
✅ **Faux** — problème humain ⇒ risque **projet**.

---

## 14. Pilotage des tests (monitoring) vs Contrôle des tests (control)

**La confusion** : les deux forment une seule activité du processus, mais l'examen les distingue.

**La règle exacte** :
- **Pilotage** : **collecte d'informations** — vérification continue des activités, comparaison de l'avancement réel au plan, mesure des critères de sortie (couverture des risques, exigences, critères d'acceptation)
- **Contrôle** : **actions** — utilise les infos du pilotage pour émettre des **directives de contrôle** : reprioriser les tests, réévaluer les critères d'entrée/sortie, ajuster le calendrier, ajouter des ressources

**Question piège** : « Ajuster le calendrier des tests suite au retard de livraison de l'environnement de test relève du pilotage. »
✅ **Faux** — prendre une mesure corrective = **contrôle**. Mesurer/constater = pilotage.

---

## 15. Objectifs du test vs objectifs du débogage

**La confusion** : attribuer au test des objectifs de correction.

**La règle exacte** :
- **Objectifs du test** : évaluer les produits d'activités ; **provoquer des défaillances et trouver des défauts** ; assurer la couverture requise ; réduire le risque ; vérifier les exigences spécifiées ; vérifier la conformité contractuelle/légale/réglementaire ; informer les parties prenantes ; construire la confiance ; valider l'objet de test
- **Le test ne CORRIGE PAS les défauts** — l'élimination des défauts (débogage) **ne relève pas du test** ; le test contribue seulement **indirectement** à des objets de test de meilleure qualité
- **Objectifs du débogage** : trouver les causes de la défaillance, les analyser, les éliminer

**Question piège** : « Un des objectifs du test est de corriger les défauts. »
✅ **Faux** — trouver, oui ; corriger, non (c'est le débogage).

---

## 16. Les formulations pièges du QCM

**« TOUJOURS » / « JAMAIS »** : quasi systématiquement **faux** en test (principe 6 : le test dépend du contexte). Exceptions notables qui sont VRAIES : « le test exhaustif est impossible » (sauf cas triviaux), « 100 % branches implique toujours 100 % instructions ».

**« Le PLUS important » / « l'objectif PRINCIPAL »** : plusieurs réponses sont vraies, une seule est LA principale.
- Objectif **principal** de l'inspection → trouver le **maximum d'anomalies**
- Objectif **principal** de la revue technique → **consensus/décisions** techniques
- Objectif **principal** du test fonctionnel → complétude, exactitude, adéquation fonctionnelles

**« n'est PAS » / « SAUF »** : on cherche l'intrus. Relisez la question après avoir choisi : votre réponse doit être celle qui ne colle PAS.

**Doubles négations** : « Lequel n'est pas un inconvénient de l'indépendance ? » = « lequel est un avantage (ou neutre) ? ». Reformulez toujours en positif avant de répondre.

**Mots absolus déguisés** : « garantit », « prouve », « assure que le logiciel est correct » → faux (principe 1 : le test montre la **présence** de défauts, pas leur absence).

**« de préférence » vs « obligatoirement »** : le test de confirmation est fait *de préférence* par la même personne ; les tests d'acceptation *idéalement* par les utilisateurs — pas « obligatoirement ».

---

## 17. Testeur vs rôle de gestion de test (répartition des activités)

**La confusion** : attribuer une activité du processus de test au mauvais rôle.

**La règle exacte** (deux **rôles**, pas forcément deux personnes) :
| Rôle de **test manager** | Rôle de **testeur** |
|---|---|
| Responsabilité globale du **processus**, de l'équipe, de la direction des activités | Responsabilité globale de l'aspect **technique** |
| **Planification** des tests | **Analyse** de test |
| **Pilotage et contrôle** des tests | **Conception** des tests |
| **Clôture** des tests | **Implémentation** des tests |
| | **Exécution** des tests |

**Pièges associés** :
- Une **même personne** peut assumer les deux rôles
- En Agile, certaines tâches du test manager peuvent être gérées par **l'équipe Agile** elle-même ; les tâches multi-équipes reviennent à des test managers **hors équipe**

**Question piège** : « Qui a la responsabilité principale du rapport d'avancement des tests ? »
✅ Le **test manager** (pilotage et contrôle). L'exécution et le rapport de défaut → testeur.

---

## 18. Test exploratoire vs test basé sur des checklists vs estimation d'erreurs

**La confusion** : trois techniques basées sur l'expérience, chacune avec son mécanisme propre.

**La règle exacte** :
- **Estimation d'erreurs** : **anticiper** les erreurs/défauts/défaillances probables à partir de la connaissance (fonctionnement passé de l'appli, erreurs typiques des développeurs, défaillances d'applis similaires). Version méthodique = **attaques de fautes** (liste d'erreurs/défauts → tests ciblés)
- **Test exploratoire** : conception, exécution et évaluation **simultanées** pendant la découverte de l'objet de test. Structurable en **test basé sur des sessions** (temps défini + **charte de test** + débriefing). Utile quand : spécifications pauvres/inadéquates, forte pression du temps, en complément des techniques formelles
- **Test basé sur des checklists** : couvrir des conditions de test à partir d'une **liste** (souvent des questions), construite sur l'expérience. Checklists à mettre à jour régulièrement (les entrées s'usent). Haut niveau ⇒ **couverture potentiellement plus grande mais répétabilité moindre**

**Question piège** : « Dans quelle technique les tests sont-ils conçus et exécutés simultanément ? »
✅ **Test exploratoire** (la charte guide la session, mais les tests ne sont pas pré-écrits).

---

## 19. Pyramide des tests vs Quadrants de tests

**La confusion** : deux modèles du chapitre 5, logiques totalement différentes.

**La règle exacte** :
- **Pyramide** (Cohn) : axe = **granularité / vitesse / isolation**. Plus on monte : tests **moins détaillés, moins isolés, plus lents** (et moins nombreux). Base : unitaires — nombreux, petits, rapides, isolés. Sommet : E2E/UI — peu nombreux, lents, larges. Usage : guider l'**automatisation** et l'**allocation de l'effort**
- **Quadrants** (Marick) : axes = **orienté métier vs technologie** × **soutien à l'équipe vs critique du produit**. Usage : s'assurer que **tous les types/niveaux de test** sont couverts, communiquer avec les parties prenantes

| Quadrant | Orientation | Contenu à mémoriser |
|---|---|---|
| **Q1** | Technologie / soutien équipe | Tests de composants, intégration de composants — automatisés, en CI |
| **Q2** | Métier / soutien équipe | Tests fonctionnels, exemples, tests de User Story, prototypes UX, tests d'API |
| **Q3** | Métier / critique produit | Tests **exploratoires**, **utilisabilité**, **UAT** — souvent manuels |
| **Q4** | Technologie / critique produit | **Smoke tests**, tests **non fonctionnels** (sauf utilisabilité) — souvent automatisés |

**Questions pièges** :
- « Où placez-vous les tests d'utilisabilité ? » ✅ **Q3** (exception : ils ne sont PAS en Q4 avec les autres non fonctionnels)
- « Dans la pyramide, les tests du sommet sont plus isolés. » ✅ **Faux** — moins isolés, plus larges, plus lents

---

## 20. Bonus — pièges rapides à ne pas rater

- **Partitions d'équivalence** : couverture 100 % = chaque partition (y compris **invalides**) couverte **au moins une fois**. Une valeur par partition suffit. Les partitions ne doivent **ni se chevaucher ni être vides**. Multi-paramètres → critère **Each Choice**
- **Tables de décision** : éléments de couverture = **colonnes réalisables** ; le nombre de règles croît **exponentiellement** avec le nombre de conditions ; notation « - » = indifférent, « N/A » = irréalisable
- **Niveaux vs types de test** : les 4 types (fonctionnel, non fonctionnel, boîte noire, boîte blanche) s'appliquent à **TOUS les niveaux** de test
- **Indépendance du test** : l'indépendance ne remplace pas la **proximité** ; les développeurs trouvent efficacement des défauts dans **leur propre code**. Inconvénients : isolement, perte du sens de responsabilité qualité chez les devs, goulot d'étranglement
- **Anomalie ≠ défaut** : une anomalie signalée en revue ou en test peut être un **faux positif** ou une demande de changement — c'est l'analyse qui tranche
- **Rétrospectives** : leurs résultats sont consignés dans le **rapport de clôture des tests**
- **Automatisation (ch6)** : « l'outil garantit le succès » = faux ; risque = attentes irréalistes, dépendance au fournisseur, coûts de maintenance sous-estimés ; bénéfice = temps gagné sur le répétitif, cohérence, feedback plus rapide — mais les tests manuels restent nécessaires (vue utilisateur)
- **Gestion de configuration** : un élément approuvé pour les tests devient une **base de référence** (baseline), modifiable uniquement via un processus formel de contrôle des modifications

---

## 21. Conception des tests vs implémentation des tests (activités du processus)

**La confusion** : les deux activités manipulent données de test et environnement — mais pas de la même façon.

**La règle exacte** :
- **Conception** : dériver les **cas de test** depuis les conditions de test + **identifier** les exigences en **données de test** et en **environnement de test** (« quoi faut-il ? »)
- **Implémentation** : **créer/réunir** le testware concret — procédures, scripts, suites, calendrier d'exécution — et **mettre en place** l'environnement (« le fabriquer »)

**Question piège** : « Quelle activité implique de travailler avec les conditions de test, les exigences relatives aux données de test, les exigences relatives à l'environnement de test et les cas de test ? »
✅ **Conception des tests** — c'est elle qui *travaille avec les exigences* (les identifie). L'implémentation *réalise* ; l'exécution *utilise*.

## 22. Mesure de la qualité du produit vs métrique de test

**La confusion** : toutes les métriques du chapitre 5.3.1 semblent « mesurer la qualité ».

**La règle exacte** :
- **Qualité du PRODUIT** : disponibilité, temps de réponse, **MTTF (délai moyen de défaillance)**, MTBF — elles décrivent le comportement du logiciel lui-même
- **Métriques de TEST** : nombre de défauts trouvés, couverture des exigences/du code, **DDP (% de détection des défauts)**, tests exécutés/réussis — elles décrivent l'avancement ou l'efficacité **du test**

**Question piège** : « Lequel est une mesure de la qualité du produit ? a) Délai moyen de défaillance b) Nombre de défauts trouvés c) Couverture des exigences d) DDP »
✅ **a) Délai moyen de défaillance (MTTF)** — les trois autres mesurent le test, pas le produit.
