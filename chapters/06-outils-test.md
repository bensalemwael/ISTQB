# Chapitre 6 — Outils de test (20 min)

## Mots-clés
automatisation des tests.

---

## 6.1 Catégories d'outils de test

| Catégorie | Rôle |
|---|---|
| **Outils de gestion** | Cycle de vie, exigences, tests, défauts, configuration |
| **Outils de test statique** | Revues, analyses statiques |
| **Outils de conception/implémentation** | Génération des cas, données, procédures |
| **Outils d'exécution & couverture** | Exécution automatisée, mesure de couverture |
| **Outils de tests non fonctionnels** | Performance, charge, sécurité (peu faisable manuellement) |
| **Outils DevOps** | Pipeline de livraison, build, CI/CD, suivi workflow |
| **Outils de collaboration** | Communication |
| **Outils d'évolutivité/standardisation** | VMs, conteneurisation |
| **Autres outils** | Ex. un tableur peut être un outil de test selon le contexte |

---

## 6.2 Avantages et risques de l'automatisation

> ⚠️ Acquérir un outil ≠ succès garanti. Chaque outil nécessite formation, maintenance, effort d'intro.

### ✅ Bénéfices potentiels
- Gain de temps (réduit le travail manuel répétitif : régression, ressaisie de données…)
- Prévention d'erreurs humaines (cohérence, répétabilité)
- Évaluation objective (couverture) et métriques complexes
- Accès facile aux infos de test (stats, graphiques)
- Réduction des délais d'exécution → détection précoce et time-to-market
- Plus de temps pour les testeurs → concevoir des tests + approfondis

### ⚠️ Risques potentiels
- **Attentes irréalistes** quant aux fonctionnalités/facilité d'utilisation
- **Estimations inexactes** (temps, coûts, maintenance scripts)
- Utiliser un outil quand le **test manuel serait plus approprié**
- **Trop de dépendance** vis-à-vis de l'outil (manque de pensée critique humaine)
- Dépendance au **fournisseur** (faillite, retrait, support médiocre, vente)
- Risques avec **logiciel libre** (abandon, mises à jour fréquentes)
- **Incompatibilité** avec la plateforme de développement
- Outil **inadapté** aux exigences réglementaires/sécurité

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-6.1.1 | K2 | Expliquer comment les types d'outils soutiennent les tests |
| FL-6.2.1 | K1 | Rappeler avantages et risques de l'automatisation |
