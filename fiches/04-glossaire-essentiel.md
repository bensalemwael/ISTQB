# Glossaire essentiel — ISTQB CTFL v4.0 (~90 termes)

> Sélection des termes les plus probables à l'examen, groupés par chapitre du syllabus. Définitions courtes fidèles au glossaire officiel CFTL/ISTQB. Les mots-clés listés en tête de chapitre du syllabus sont exigibles au niveau K1.

---

## Chapitre 1 — Fondamentaux des tests

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Test | testing | Ensemble d'activités pour découvrir des défauts et évaluer la qualité d'artefacts logiciels |
| Objet de test | test object | Le produit d'activités (composant, système) à tester |
| Objectif de test | test objective | Raison ou but d'un test (ex. trouver des défauts, construire la confiance) |
| Erreur | error, mistake | Action humaine produisant un résultat incorrect (méprise) |
| Défaut | defect, fault, bug | Imperfection dans un produit d'activités (code, document) qui peut causer une défaillance |
| Défaillance | failure | Comportement du système qui s'écarte du comportement attendu, observé à l'exécution |
| Cause racine | root cause | Raison fondamentale de l'apparition d'un problème (ex. situation conduisant à une erreur) |
| Qualité | quality | Degré avec lequel un produit satisfait les exigences et les besoins/attentes des parties prenantes |
| Assurance qualité | quality assurance (QA) | Approche préventive axée sur les processus : un bon processus produit un bon produit |
| Contrôle qualité | quality control (QC) | Approche corrective axée sur le produit ; le test en est une forme majeure |
| Vérification | verification | Confirmation que les exigences spécifiées sont satisfaites (« produit construit correctement ») |
| Validation | validation | Confirmation que le système répond aux besoins des utilisateurs dans son environnement opérationnel (« le bon produit ») |
| Débogage | debugging | Trouver, analyser et éliminer les causes (défauts) des défaillances |
| Couverture | coverage | Degré avec lequel des éléments de couverture spécifiés sont exercés par une suite de tests, en pourcentage |
| Base de test | test basis | Corpus de connaissances (exigences, User Stories, code…) utilisé pour l'analyse et la conception des tests |
| Condition de test | test condition | Aspect testable d'un composant ou système identifié comme base pour le test |
| Élément de couverture | coverage item | Attribut mesurable dérivé d'une condition de test par une technique de test (partition, limite, branche…) |
| Cas de test | test case | Ensemble de préconditions, entrées, actions, résultats attendus et postconditions, développé à partir des conditions de test |
| Cas de test abstrait | high-level test case | Cas de test sans valeurs concrètes d'entrées ni de résultats attendus (logique) |
| Cas de test concret | low-level test case | Cas de test avec valeurs concrètes d'entrées et de résultats attendus |
| Procédure de test | test procedure | Séquence de cas de test dans l'ordre d'exécution, avec les actions associées |
| Suite de tests | test suite | Ensemble de cas de test ou de procédures de test regroupés pour l'exécution |
| Calendrier d'exécution des tests | test execution schedule | Ordonnancement définissant l'ordre d'exécution des suites de tests |
| Données de test | test data | Données nécessaires à l'exécution des tests (créées ou sélectionnées pour satisfaire les entrées) |
| Résultat de test | test result | Conséquence/issue de l'exécution d'un test (réussite, échec, résultats réels vs attendus) |
| Testware | testware | Produits d'activités issus du processus de test (plans, cas, scripts, données, rapports…) |
| Produit d'activités | work product | Artefact produit au cours d'un processus (exigence, code, documentation, testware…) |
| Traçabilité | traceability | Capacité à relier base de test, testware, résultats et défauts entre eux (soutient couverture et analyse d'impact) |
| Testabilité | testability | Facilité (efficacité/efficience) avec laquelle un objet de test peut être testé |
| Analyse de test | test analysis | Activité répondant à « quoi tester ? » : identifier les caractéristiques testables et définir les conditions de test |
| Conception des tests | test design | Activité répondant à « comment tester ? » : élaborer conditions de test en cas de test, identifier les éléments de couverture |
| Implémentation des tests | test implementation | Créer/acquérir le testware pour l'exécution (procédures, suites, données, environnement, calendrier) |
| Exécution des tests | test execution | Exécuter les tests selon le calendrier, comparer résultats réels et attendus, consigner |
| Pilotage des tests | test monitoring | Vérification continue des activités de test et comparaison de l'avancement réel au plan |
| Contrôle des tests | test control | Prendre les actions correctives nécessaires pour atteindre les objectifs du test |
| Clôture des tests | test completion | Consolider le testware et l'expérience aux jalons ; produire le rapport de clôture |
| Paradoxe du pesticide | pesticide paradox | Usure des tests : répétés à l'identique, ils ne trouvent plus de nouveaux défauts (principe 5) |
| Oracle de test | test oracle | Source pour déterminer les résultats attendus d'un test (spécification, système comparable, expertise…) |
| Indépendance du test | independence of testing | Séparation entre testeur et auteur (biais cognitifs différents) ; du « aucune » (auteur) au « très élevée » (externe à l'organisation) |
| Environnement de test | test environment | Matériel, logiciels et instrumentation nécessaires pour exécuter les tests |
| Bouchon / Pilote | stub / driver | Éléments de l'environnement de test remplaçant un composant appelé (bouchon) ou appelant (pilote) |
| Log de test | test log | Enregistrement chronologique des détails de l'exécution des tests |

---

## Chapitre 2 — Tester au long du cycle de vie

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Niveau de test | test level | Groupe d'activités de test organisées et gérées ensemble ; instance du processus de test (5 niveaux) |
| Type de test | test type | Groupe d'activités de test liées à des caractéristiques-qualité spécifiques (4 types) |
| Test de composants | component/unit testing | Teste les composants isolés ; souvent par les développeurs, avec harnais/frameworks de tests unitaires |
| Test d'intégration de composants | component integration testing | Teste les interfaces et interactions ENTRE composants (stratégies : ascendante, descendante, big-bang) |
| Test système | system testing | Teste le comportement global et les capacités d'un système entier (bout en bout, fonctionnel et non fonctionnel) |
| Test d'intégration de systèmes | system integration testing | Teste les interfaces entre le système et d'autres systèmes/services externes |
| Test d'acceptation | acceptance testing | Valide l'aptitude au déploiement ; idéalement par les utilisateurs (UAT, opérationnel, contractuel/réglementaire, alpha, bêta) |
| Test fonctionnel | functional testing | Évalue CE QUE le système doit faire (complétude, exactitude, adéquation fonctionnelles) |
| Test non fonctionnel | non-functional testing | Évalue COMMENT le système se comporte (caractéristiques ISO 25010) |
| Test boîte noire | black-box testing | Basé sur les spécifications, sans référence à la structure interne |
| Test boîte blanche | white-box testing | Basé sur la structure interne ou l'implémentation (code, architecture, flux) |
| Test de confirmation | confirmation testing | Confirme qu'un défaut original a été corrigé avec succès |
| Test de régression | regression testing | Confirme qu'une modification n'a pas causé de conséquences négatives ailleurs |
| Analyse d'impact | impact analysis | Identifie les parties du logiciel affectées par une modification ; optimise l'étendue de la régression |
| Test de maintenance | maintenance testing | Test des changements d'un système en production (déclencheurs : modification, migration/mise à niveau, retrait) |
| Shift-left | shift-left | Approche déplaçant les activités de test plus tôt dans le SDLC (principe du test précoce) |
| DevOps | DevOps | Approche organisationnelle unissant développement et exploitation autour d'objectifs communs (CI/CD, feedback rapide) |
| Intégration continue | continuous integration (CI) | Fusion et build automatisés fréquents du code, accompagnés de tests automatisés |
| TDD | test-driven development | Le test unitaire est écrit d'abord, puis le code, puis refactorisation |
| ATDD | acceptance test-driven development | Les tests sont dérivés des critères d'acceptation AVANT l'implémentation de la User Story |
| BDD | behavior-driven development | Comportement exprimé en langage naturel simple (Given/When/Then), traduit en tests exécutables |
| Rétrospective | retrospective | Réunion de fin d'itération/projet pour identifier succès et améliorations (amélioration continue) |
| Smoke test | smoke test | Suite réduite vérifiant les fonctions essentielles d'un build (souvent critère d'entrée ; quadrant Q4) |
| Harnais de test | test harness | Environnement (bouchons, pilotes, framework) nécessaire pour tester un composant isolé |

---

## Chapitre 3 — Test statique

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Test statique | static testing | Test sans exécution du logiciel : revues (manuel) et analyse statique (outillée) |
| Test dynamique | dynamic testing | Test impliquant l'exécution de l'objet de test |
| Analyse statique | static analysis | Évaluation outillée d'un produit d'activités ayant une structure formelle (code, modèles) sans l'exécuter |
| Revue | review | Examen (généralement manuel) d'un produit d'activités pour l'évaluer et détecter des anomalies |
| Anomalie | anomaly | Écart par rapport aux attentes ; pas forcément un défaut (peut être faux positif ou demande de changement) |
| Revue informelle | informal review | Revue sans processus défini ni résultat formel documenté exigé ; objectif : détecter des anomalies |
| Relecture technique | walkthrough | Revue MENÉE PAR L'AUTEUR ; préparation individuelle optionnelle ; objectifs multiples (qualité, consensus, formation) |
| Revue technique | technical review | Revue par des réviseurs qualifiés, dirigée par un MODÉRATEUR ; objectif : consensus et décisions techniques |
| Inspection | inspection | Revue LA PLUS FORMELLE (processus complet, métriques) ; objectif principal : trouver le maximum d'anomalies ; auteur ≠ réviseur/scribe |
| Revue formelle | formal review | Revue suivant un processus défini avec des résultats formellement documentés |
| Modérateur (facilitateur) | moderator | Assure le déroulement efficace des réunions de revue (médiation, gestion du temps, climat sûr) |
| Scribe (rapporteur) | scribe | Consigne les anomalies des réviseurs et les décisions de la réunion |
| Responsable de la revue | review leader | Responsabilité générale : décide qui participe, organise lieu et date |

---

## Chapitre 4 — Analyse et conception des tests

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Technique de test | test technique | Procédure utilisée pour définir les conditions de test, concevoir les cas de test et identifier les éléments de couverture |
| Technique boîte noire | black-box test technique | Basée sur l'analyse du comportement spécifié, indépendante de l'implémentation |
| Technique boîte blanche | white-box test technique | Basée sur l'analyse de la structure interne ; possible seulement après conception/implémentation |
| Technique basée sur l'expérience | experience-based test technique | Exploite les connaissances et l'expérience du testeur ; complémentaire des deux autres |
| Partition d'équivalence | equivalence partition | Sous-ensemble de données dont toutes les valeurs sont supposées traitées de la même manière |
| Analyse des valeurs limites | boundary value analysis (BVA) | Technique exerçant les limites des partitions ordonnées (versions à 2 et 3 valeurs) |
| Test par table de décision | decision table testing | Technique testant les combinaisons de conditions et leurs actions résultantes (règles = colonnes) |
| Test de transition d'état | state transition testing | Technique basée sur un modèle d'états, événements et transitions (couvertures : états, transitions valides/0-switch, toutes transitions) |
| Couverture 0-switch | 0-switch coverage | Synonyme de couverture des transitions valides : chaque transition valide exercée au moins une fois |
| Table d'états | state table | Modèle équivalent au diagramme de transition d'états, montrant explicitement les transitions invalides (cellules vides) |
| Couverture Each Choice | each choice coverage | Chaque partition de chaque ensemble de partitions exercée au moins une fois (sans combinaisons) |
| Test des instructions | statement testing | Technique boîte blanche dont les éléments de couverture sont les instructions exécutables |
| Couverture des instructions | statement coverage | % d'instructions exécutables exercées par les tests |
| Test des branches | branch testing | Technique boîte blanche dont les éléments de couverture sont les branches (transferts de contrôle) |
| Couverture des branches | branch coverage | % de branches exercées ; 100 % branches ⟹ 100 % instructions |
| Estimation d'erreurs | error guessing | Anticiper erreurs/défauts/défaillances à partir de la connaissance du testeur (historique, erreurs typiques) |
| Attaque de fautes | fault attack | Approche méthodique de l'estimation d'erreurs à partir d'une liste de défauts/défaillances possibles |
| Test exploratoire | exploratory testing | Tests conçus, exécutés et évalués simultanément pendant la découverte de l'objet de test |
| Test basé sur des sessions | session-based testing | Test exploratoire structuré : temps défini, charte de test, débriefing |
| Charte de test | test charter | Documentation de l'objectif (et des idées de test) d'une session de test exploratoire |
| Test basé sur des checklists | checklist-based testing | Conception/exécution de tests pour couvrir les conditions de test d'une checklist (souvent des questions) |
| Approche basée sur la collaboration | collaboration-based test approach | Approche axée sur l'ÉVITEMENT des défauts par collaboration et communication (US, critères d'acceptation, ATDD) |
| User Story | user story | Caractéristique utile à l'utilisateur : 3 C (Carte, Conversation, Confirmation) ; qualité INVEST |
| Critères d'acceptation | acceptance criteria | Conditions qu'une implémentation de la User Story doit remplir pour être acceptée (formats : scénario G/W/T ou règles) |

---

## Chapitre 5 — Gestion des activités de test

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Plan de test | test plan | Décrit les objectifs, ressources et processus d'un projet de test (contexte, approche, budget, calendrier, risques) |
| Planification des tests | test planning | Définir les objectifs de test et choisir l'approche dans les contraintes du contexte |
| Approche de test | test approach | Implémentation de la stratégie de test adaptée à un projet donné (niveaux, types, techniques, critères) |
| Critères d'entrée | entry criteria | Préconditions pour entreprendre une activité (≈ Definition of Ready en Agile) |
| Critères de sortie | exit criteria | Ce qui doit être réalisé pour déclarer une activité achevée (≈ Definition of Done en Agile) |
| Definition of Ready | Definition of Ready (DoR) | Critères d'entrée qu'une User Story doit remplir pour démarrer développement/test |
| Definition of Done | Definition of Done (DoD) | Critères de sortie : métriques objectives rendant un élément livrable |
| Estimation en trois points | three-point estimation | E = (a + 4m + b)/6 ; écart-type SD = (b − a)/6 (a optimiste, m probable, b pessimiste) |
| Delphi large bande | Wideband Delphi | Estimation itérative par experts, en isolation puis discussion jusqu'au consensus |
| Planning Poker | planning poker | Variante Agile du Delphi large bande, avec cartes numérotées |
| Estimation basée sur les ratios | ratio-based estimation | Ratios standards issus de projets antérieurs de l'organisation (ex. dev:test = 3:2) |
| Extrapolation | extrapolation | Estimation à partir de mesures du projet en cours (ex. moyenne des itérations précédentes) |
| Priorisation des cas de test | test case prioritization | Ordonner l'exécution : basée sur les risques, la couverture (+ additionnelle) ou les exigences |
| Pyramide des tests | test pyramid | Modèle en couches : plus on monte, moins les tests sont détaillés/isolés et plus ils sont lents |
| Quadrants de tests | testing quadrants | Modèle de Marick : métier/technologie × soutien à l'équipe/critique du produit (Q1–Q4) |
| Risque | risk | Événement potentiel dont la survenance entraîne un effet négatif ; caractérisé par probabilité et impact |
| Niveau de risque | risk level | Mesure du risque = probabilité × impact |
| Risque projet | project risk | Risque lié à la gestion/contrôle du projet (organisationnel, humain, technique, fournisseurs) |
| Risque produit | product risk | Risque lié aux caractéristiques-qualité du produit (ISO 25010) |
| Gestion des risques | risk management | Analyse des risques + contrôle des risques |
| Analyse des risques | risk analysis | Identification des risques + évaluation des risques |
| Évaluation des risques | risk assessment | Catégoriser les risques, déterminer probabilité/impact/niveau, prioriser, proposer un traitement |
| Contrôle des risques | risk control | Atténuation des risques + pilotage/surveillance des risques |
| Atténuation des risques | risk mitigation | Mettre en œuvre les actions qui réduisent le niveau de risque |
| Test basé sur les risques | risk-based testing | Approche où les activités de test sont sélectionnées, priorisées et gérées d'après l'analyse et le contrôle des risques |
| Référentiel des risques | risk register | Liste des risques avec probabilité, impact et informations d'atténuation (souvent inclus dans le plan de test) |
| Métrique de test | test metric | Mesure de l'avancement, de la qualité ou de l'efficacité (couverture, densité de défauts, taux de détection…) |
| Rapport d'avancement des tests | test progress report | Rapport régulier pendant les tests : progression, obstacles, métriques, risques, tests à venir |
| Rapport de clôture des tests | test completion report | Rapport de fin d'étape : résumé, évaluation vs plan, écarts, risques résiduels, leçons apprises |
| Burndown chart | burndown chart | Graphique du travail restant en fonction du temps dans une itération (communication de l'avancement) |
| Vélocité | velocity | Quantité de travail (ex. story points) qu'une équipe Agile réalise en moyenne par itération |
| Temps moyen jusqu'à la défaillance / de réparation | MTBF / MTTR | Métriques de fiabilité produit : temps moyen entre défaillances / temps moyen pour réparer |
| Gestion de configuration | configuration management | Identifier, contrôler et suivre les produits d'activités en tant qu'éléments de configuration |
| Base de référence | baseline | Version approuvée d'un élément de configuration, modifiable uniquement via contrôle formel des modifications |
| Gestion des défauts | defect management | Workflow de traitement des anomalies, de la découverte à la clôture, avec règles de classification |
| Rapport de défaut | defect report | Documentation d'une anomalie : identifiant, résumé, étapes, attendu/réel, sévérité, priorité, statut… |
| Sévérité | severity | Degré d'impact d'un défaut sur les intérêts des parties prenantes ou sur les exigences |
| Priorité | priority | Urgence / ordre de traitement de la correction (décision business) |
| Faux positif | false positive | Test qui signale un défaut alors qu'il n'y en a pas (fausse alarme) |
| Faux négatif | false negative | Test qui ne détecte pas un défaut pourtant présent |

---

## Chapitre 6 — Outils de test

| Terme FR | Terme EN | Définition courte |
|---|---|---|
| Automatisation des tests | test automation | Utilisation d'outils pour réaliser ou soutenir des activités de test (ex. exécution, comparaison des résultats) |
| Outil de gestion des tests | test management tool | Soutient la gestion du cycle de vie, des exigences, des tests, des défauts et de la configuration |
| Outil d'exécution des tests | test execution tool | Exécute automatiquement les tests et compare résultats réels et attendus ; mesure la couverture |
| Outil d'analyse statique | static analysis tool | Aide à effectuer revues et analyses statiques (défauts de code, sécurité, maintenabilité) |

---

## Mémo dernière minute

- **5 niveaux** : composants → intégration de composants → système → intégration de systèmes → acceptation
- **4 types** : fonctionnel · non fonctionnel · boîte noire · boîte blanche (tous applicables à tous les niveaux)
- **7 activités** : planification · pilotage & contrôle · analyse · conception · implémentation · exécution · clôture
- **Testeur** = analyse, conception, implémentation, exécution / **Test manager** = planification, pilotage & contrôle, clôture
- **Hiérarchies de couverture** : branches ⟹ instructions ; toutes transitions ⟹ 0-switch ⟹ tous les états
