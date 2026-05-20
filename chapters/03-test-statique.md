# Chapitre 3 — Test statique (80 min)

## Mots-clés
anomalie, test dynamique, revue formelle, revue informelle, inspection, revue, analyse statique, test statique, revue technique, relecture technique.

---

## 3.1 Bases du test statique

Le test statique = examen **sans exécution** du code/produit. Deux familles :
- **Revues** (humaines)
- **Analyse statique** (outils)

Objectifs : améliorer la qualité, détecter des défauts, évaluer caractéristiques (lisibilité, complétude, justesse, testabilité, cohérence).

Le test statique peut servir à la **vérification ET à la validation**.

### 3.1.1 Produits examinables
- Spécifications d'exigences
- Code source
- Plans / cas / charters de tests
- Éléments du product backlog
- Documentation projet, contrats, modèles

Pour l'**analyse statique** spécifiquement → besoin d'une **structure** (modèles, code, texte à syntaxe formelle).

Inadaptés : produits difficiles à interpréter humainement et non analysables par outil (ex. code exécutable tiers pour raisons juridiques).

### 3.1.2 Valeur du test statique
- Détection précoce (principe du test précoce)
- Trouve des défauts **non détectables** en dynamique (code mort, conception inadéquate, défauts dans documents non exécutables)
- Construit la confiance
- Améliore la compréhension partagée et la communication
- Coût global du projet **plus faible** malgré le coût des revues
- L'analyse statique du code = plus efficiente que les tests dynamiques pour certains défauts

### 3.1.3 Statique vs dynamique

| Aspect | Statique | Dynamique |
|---|---|---|
| Exécute le code ? | Non | Oui |
| Trouve… | Directement les **défauts** | Provoque des **défaillances** → analyse → défauts |
| Chemins rares | Plus facile | Difficile (souvent inaccessibles) |
| Produits non exécutables | ✅ | ❌ |
| Caract. qualité | Maintenabilité, sécurité… | Performance, fiabilité… |

**Défauts typiques détectés en statique** :
- Exigences ambiguës, contradictoires, incomplètes, en double
- Défauts de conception (BD inefficaces, modularité insuffisante)
- Variables non initialisées/non déclarées, code inaccessible/dupliqué, complexité excessive
- Écarts vs standards (nommage)
- Interfaces incorrectes (paramètres)
- Vulnérabilités (buffer overflows)
- Lacunes de couverture de la base de test

---

## 3.2 Processus de feedback et de revue

### 3.2.1 Bénéfices d'un feedback précoce et fréquent
- Communique rapidement les problèmes de qualité
- Évite les écarts entre produit et vision des parties prenantes
- Évite malentendus / coût des rectifications tardives
- Concentre l'effort sur ce qui a le plus de valeur

### 3.2.2 Activités du processus de revue (ISO/IEC 20246) ⭐

1. **Planification** — périmètre, objectif, produit, caract. qualité, critères, effort, calendrier
2. **Lancement** — distribuer le produit, valider rôles & ressources
3. **Revue individuelle** — chaque réviseur évalue (checklist, scénarios), enregistre anomalies/recommandations/questions
4. **Communication & analyse** — réunion : statut de chaque anomalie, décisions, niveau de qualité, actions
5. **Correction & rapport** — rapports de défauts, suivi, vérification des critères de sortie

### 3.2.3 Rôles dans une revue

| Rôle | Responsabilité |
|---|---|
| **Manager** | Décide ce qui est revu, fournit ressources/temps |
| **Auteur** | Crée et corrige le produit revu |
| **Modérateur** (facilitateur) | Mène la réunion, gestion temps, environnement sûr |
| **Scribe** (rapporteur) | Enregistre anomalies, décisions |
| **Réviseur** | Exécute la revue (membre projet, expert, partie prenante) |
| **Responsable de la revue** | Responsabilité globale, qui participe, où, quand |

### 3.2.4 Types de revues ⭐ TRÈS EXAMINÉ

| Type | Formalité | Mené par | Objectif principal | Préparation individuelle ? |
|---|---|---|---|---|
| **Revue informelle** | Aucune | — | Détecter anomalies | Non |
| **Relecture technique** (walkthrough) | Faible | **Auteur** | Apprentissage, consensus, détection | Optionnelle |
| **Revue technique** | Moyenne | Modérateur | Consensus technique, décisions | Oui |
| **Inspection** | **Maximale** | Modérateur (auteur ne peut pas être réviseur ni scribe) | Trouver le maximum d'anomalies, métriques, amélioration processus | Oui |

> 💡 Un même produit peut être revu plusieurs fois avec des types différents (informelle puis formelle).

### 3.2.5 Facteurs de réussite des revues
- Objectifs clairs et critères de sortie **mesurables**
- Type de revue **adapté** au contexte
- Petits groupes
- Feedback aux parties prenantes / auteurs
- Temps de préparation suffisant
- Soutien du management
- Intégration dans la culture (apprentissage)
- Formation des participants
- Faciliter les réunions

⚠️ Évaluer les **participants** ne doit **jamais** être un objectif d'une revue.

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-3.1.1 | K1 | Reconnaître les produits examinables |
| FL-3.1.2 | K2 | Expliquer la valeur du test statique |
| FL-3.1.3 | K2 | Comparer statique et dynamique |
| FL-3.2.1 | K1 | Bénéfices feedback précoce/fréquent |
| FL-3.2.2 | K2 | Résumer les activités du processus de revue |
| FL-3.2.3 | K1 | Rappeler les responsabilités des rôles |
| FL-3.2.4 | K2 | Comparer les types de revues |
| FL-3.2.5 | K1 | Rappeler les facteurs de réussite |
