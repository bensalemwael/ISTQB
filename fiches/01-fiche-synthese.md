# Fiche synthèse — Mémo express ISTQB CTFL v4.0

## Les 7 principes du test
1. Le test montre la **présence** de défauts, pas leur absence
2. Le test **exhaustif est impossible**
3. **Tester tôt** économise temps et argent (shift-left)
4. **Regroupement** des défauts (Pareto)
5. **Usure** des tests (paradoxe du pesticide)
6. Le test **dépend du contexte**
7. **Illusion de l'absence de défauts**

## Erreur → Défaut → Défaillance
```
Cause racine → Erreur (humaine) → Défaut (artefact) → Défaillance (exécution)
```

## Test vs Débogage
- **Test** : détecte les défaillances/défauts
- **Débogage** : reproduit → diagnostique → corrige (puis test de confirmation + régression)

## 5 niveaux de test
1. Composants (unitaires)
2. Intégration de composants
3. Système
4. Intégration système
5. Acceptation (UAT, OAT, contractuelle/réglementaire, alpha, bêta)

## 4 types de test
- **Fonctionnel** : ce que fait le système
- **Non fonctionnel** : comment il se comporte (ISO 25010)
- **Boîte noire** : spécifications
- **Boîte blanche** : structure interne

## ISO 25010 — 7 caractéristiques qualité non fonctionnelles
Performance · Compatibilité · Utilisabilité · Fiabilité · Sécurité · Maintenabilité · Portabilité

## Confirmation vs Régression
- **Confirmation** : le défaut est-il bien corrigé ?
- **Régression** : a-t-on cassé autre chose ?

## Maintenance — 4 catégories
Corrective · Adaptative · Perfective · Préventive

## Activités du processus de test
1. Planification
2. Pilotage & contrôle
3. Analyse
4. Conception
5. Implémentation
6. Exécution
7. Clôture

## 4 types de revues
| Type | Auteur joue | Préparation | Formalité |
|---|---|---|---|
| Informelle | – | Non | Aucune |
| Walkthrough (relecture) | Anime | Optionnelle | Faible |
| Revue technique | Réviseur possible | Oui | Moyenne |
| Inspection | Auteur ≠ réviseur/scribe | Oui | **Max** |

## Rôles de revue
Manager • Auteur • Modérateur • Scribe • Réviseur • Responsable de revue

## Techniques de test (chapitre 4)

### Boîte noire
- Partitions d'équivalence (EP)
- Analyse des valeurs limites (BVA — 2 ou 3 valeurs)
- Tables de décisions
- Transitions d'état

### Boîte blanche
- Test des instructions
- Test des branches *(englobe les instructions)*

### Basée sur l'expérience
- Estimation d'erreurs (et attaques de fautes)
- Test exploratoire (sessions, chartes)
- Test basé sur des checklists

## Critères de couverture (transitions d'état)
1. Tous les états
2. Transitions valides (0-switch) ⇒ inclut tous les états
3. Toutes les transitions ⇒ inclut les deux précédents — **min. pour critique**

## User Stories — INVEST
Indépendantes · Négociables · Valeur · Estimables · Small · Testables

## 3 C des User Stories
Carte · Conversation · Confirmation (critères d'acceptation)

## Format ATDD/BDD
**Given/When/Then** = Étant donné / Lorsque / Alors

## Approches pilotées par les tests
- **TDD** : test → code → refactor
- **ATDD** : test à partir des critères d'acceptation
- **BDD** : comportement en langage naturel

## Techniques d'estimation
1. **Ratios** (métrique)
2. **Extrapolation** (métrique)
3. **Delphi large bande** (expertise) → **Planning Poker** = variante Agile
4. **3 points (PERT)** : **E = (a + 4m + b) / 6**, **SD = (b − a) / 6**

## Stratégies de priorisation
- Basée sur les risques
- Basée sur la couverture (+ variante additionnelle)
- Basée sur les exigences

## Risques
- **Niveau de risque = probabilité × impact**
- **Projet** : organisationnels, humains, techniques, fournisseurs
- **Produit** : caract.-qualité ISO 25010

## Options de réponse au risque
Atténuation · Acceptation · Transfert · Plan d'urgence

## DevOps : bénéfices pour le test
Feedback rapide · Shift-left · Automatisation CI/CD · Visibilité non fonctionnel · Moins de test manuel répétitif · Réduction du risque de régression

## Rapport de défaut — éléments clés
ID unique · Titre/résumé · Date, auteur, rôle · Objet de test, environnement · Contexte · Étapes (reproduction) · Attendu vs réel · **Sévérité** ≠ **Priorité** · Statut · Références

## Critères Agile
- **DoR** (Definition of Ready) = critères d'entrée
- **DoD** (Definition of Done) = critères de sortie

## Pyramide des tests (Cohn 2009)
```
   E2E / UI       ← peu, lents, larges
   Service / Intégration
   Unit / Composants  ← nombreux, rapides, fins
```

## Quadrants de tests (Marick 2003)
| | Soutien équipe | Critique produit |
|---|---|---|
| **Métier** | Q2 : fonctionnels, US, exemples, API | Q3 : exploratoires, utilisabilité, UAT |
| **Technologie** | Q1 : composants, intégration | Q4 : smoke, non fonctionnels |

## Normes principales
- **ISO/IEC/IEEE 29119** : 1 (concepts), 2 (processus), 3 (doc), 4 (techniques)
- **ISO/IEC 25010** : modèle qualité logiciel
- **ISO/IEC 20246** : revues
- **ISO/IEC/IEEE 14764** : maintenance
- **ISO 31000** : gestion des risques

## L'examen
- 40 questions QCM
- 60 minutes (75 si non-anglophone natif)
- Seuil : **65 % = 26/40**
- Niveaux : K1 (souvenir), K2 (comprendre), K3 (appliquer)
