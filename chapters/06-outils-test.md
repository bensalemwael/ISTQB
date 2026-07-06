# Chapitre 6 — Outils de test (20 min)

## Mots-clés
automatisation des tests.

> Un seul mot-clé officiel dans ce chapitre : **automatisation des tests** — utilisation d'outils pour réaliser ou soutenir des activités de test.

> 🎯 **2 questions seulement à l'examen** (1 × K2 sur 6.1, 1 × K1 sur 6.2). Petit chapitre = points faciles si les deux listes de 6.2 sont mémorisées.

---

## 6.1 Les outils pour soutenir les tests (K2)

Les outils **soutiennent et facilitent** de nombreuses activités de test. Catégories du syllabus (avec exemples concrets) :

| Catégorie | Rôle | Exemples concrets |
|---|---|---|
| **Outils de gestion** | Augmentent l'efficience du processus de test en facilitant la gestion : du **cycle de vie du développement** (ALM), des **exigences**, des **tests**, des **défauts**, de la **configuration** | Jira, Xray/TestRail (gestion de tests), Jira/Bugzilla (défauts), Git (configuration), Confluence (ALM) |
| **Outils de test statique** | Aident à effectuer des **revues** et des **analyses statiques** | SonarQube, ESLint/Pylint, outils de revue de code (merge requests GitLab) |
| **Outils de conception et d'implémentation des tests** | Facilitent la **génération** des cas de test, des **données de test** et des **procédures de test** | Générateurs de données (Faker), outils de test combinatoire (PICT), model-based testing |
| **Outils d'exécution des tests et de couverture** | Facilitent l'**exécution automatisée** et la **mesure de couverture** | **Robot Framework**, **Selenium**, pytest/JUnit, coverage.py/JaCoCo |
| **Outils de tests non fonctionnels** | Permettent des tests non fonctionnels **difficiles ou impossibles à réaliser manuellement** | JMeter/Gatling (performance, charge), OWASP ZAP (sécurité) |
| **Outils DevOps** | Soutiennent le **pipeline de livraison DevOps** : suivi du workflow, **builds automatisés**, **CI/CD** | **GitLab CI**, Jenkins, GitHub Actions |
| **Outils de collaboration** | Facilitent la **communication** | Slack/Teams, wikis, visioconférence |
| **Outils d'évolutivité et de standardisation du déploiement** | Environnements reproductibles et évolutifs | **Machines virtuelles**, **conteneurisation** (Docker, Kubernetes) |
| **Tout autre outil aidant aux tests** | Selon le contexte | Un **tableur** est un outil de test dans le contexte des tests ⭐ |

**Zoom sur les sous-domaines des outils de gestion** (souvent testés sous forme d'association) :
- gestion du **cycle de vie du développement logiciel** (ALM)
- gestion des **exigences** (traçabilité exigences ↔ tests)
- gestion des **tests** (référentiel de cas, campagnes, résultats)
- gestion des **défauts** (cycle de vie du défaut, suivi)
- gestion de **configuration** (versionner le testware et le code)

> 💡 Exemple de chaîne complète : cas de test écrits avec **Robot Framework** (mots-clés **Selenium** pour le web), exécutés automatiquement dans un pipeline **GitLab CI** à chaque commit, dans des conteneurs Docker, avec rapports de couverture publiés — cela combine 4 catégories (exécution/couverture, DevOps, évolutivité, gestion).

> ℹ️ Les outils s'appuyant sur l'**IA** (génération de cas de test, auto-réparation de localisateurs, analyse de logs) se répandent, mais ne sont **pas détaillés dans le syllabus v4.0** — ne pas les sur-interpréter à l'examen.

---

> ⚠️ **Piège d'examen** : un outil de **préparation des données de test** (génération, anonymisation, chargement de jeux de données) soutient les activités d'**implémentation et d'exécution des tests** — les données concrètes sont fabriquées à l'implémentation puis (ré)injectées à chaque exécution. La *conception* ne définit que les **exigences** en données de test (syllabus 1.4.1).

## 6.2 Avantages et risques de l'automatisation des tests (K1)


> ⚠️ **Acquérir un outil ≠ garantie de succès.** Chaque nouvel outil demande des efforts pour obtenir des avantages réels et durables : **introduction, maintenance, formation**. Les risques doivent être **analysés et atténués**.

### ✅ Avantages potentiels (liste complète du syllabus)

| Avantage | Exemples |
|---|---|
| **Gain de temps** — réduction du travail manuel répétitif | Exécution des **tests de régression**, réintroduction des mêmes données de test, comparaison résultats attendus/réels, vérification des normes de codage |
| **Prévention des erreurs humaines simples** — cohérence et répétabilité accrues | Tests dérivés de manière cohérente des exigences, données de test créées systématiquement, tests exécutés dans le **même ordre** et à la **même fréquence** |
| **Évaluation plus objective** | Mesure de **couverture**, métriques trop compliquées à calculer pour des humains |
| **Accès plus facile à l'information** sur les tests (gestion + reporting) | Statistiques, **graphiques**, données agrégées : avancement, taux de défauts, durée d'exécution |
| **Réduction des délais d'exécution** | → détection **plus précoce** des défauts, feedback plus rapide, **time-to-market** plus rapide |
| **Plus de temps pour les testeurs** | → concevoir de **nouveaux tests plus approfondis et plus efficaces** |

### ⚠️ Risques potentiels (liste complète du syllabus)

1. **Attentes irréalistes** quant aux avantages de l'outil (fonctionnalités **et** facilité d'utilisation)
2. **Estimations inexactes** : temps, coûts et exigences pour l'**introduction** de l'outil, la **maintenance des scripts**, la modification du processus de test manuel existant
3. Utiliser un outil alors que le **test manuel serait plus approprié**
4. **Trop grande dépendance à l'outil** — ex. ignorer la nécessité d'une **réflexion humaine critique**
5. **Dépendance au fournisseur** : faillite, retrait de l'outil, **vente à un autre fournisseur**, support médiocre (réponses, mises à jour, corrections)
6. **Logiciel libre (open source)** : projet **abandonné** (plus de mises à jour) ou composants internes nécessitant des mises à jour **très fréquentes**
7. **Incompatibilité** de l'outil d'automatisation avec la **plateforme de développement**
8. Choix d'un outil **inadapté aux exigences réglementaires et/ou standards de sécurité**

> 💡 Vécu terrain : un framework open source comme Robot Framework ou Selenium illustre le risque n°6 (dépendance à la communauté, mises à jour de drivers fréquentes) — et l'avantage « gain de temps sur la régression » quand il est branché sur GitLab CI.

---

## 📝 À l'examen — Chapitre 6

**2 questions** sur les 40 :
- **FL-6.1.1 (K2)** : associer un type d'outil à l'activité de test qu'il soutient. Piège classique : un outil de **couverture** appartient à la catégorie *exécution & couverture*, pas à la gestion ; les outils de **CI/CD** sont dans la catégorie **DevOps**.
- **FL-6.2.1 (K1)** : reconnaître si un énoncé est un **avantage** ou un **risque** de l'automatisation. Pure mémorisation des deux listes ci-dessus.

**Quoi mémoriser** :
- Les **9 catégories** d'outils et un exemple par catégorie (le tableur = outil de test selon le contexte).
- Les **6 avantages** : temps, erreurs humaines/répétabilité, objectivité, accès à l'info, délais réduits, temps libéré pour les testeurs.
- Les **8 risques** : attentes irréalistes, estimations inexactes, manuel plus approprié, dépendance à l'outil, dépendance fournisseur, open source abandonné, incompatibilité plateforme, non-conformité réglementaire/sécurité.

**Pièges fréquents** :
1. « L'automatisation garantit un gain de temps » → FAUX : le gain de temps est un avantage **potentiel** ; la **sous-estimation de l'effort/maintenance** est un risque.
2. « Acheter un bon outil suffit » → FAUX : introduction, **maintenance**, **formation** requises.
3. « L'automatisation remplace la réflexion du testeur » → FAUX : la trop grande dépendance à l'outil (perte de pensée critique) est un **risque**.
4. Les tests **non fonctionnels** (charge, performance) sont cités comme **difficiles ou impossibles manuellement** → argument type en faveur de l'outillage.

**Exemples de formulations type à l'examen** :
- *« Lequel des éléments suivants est un risque de l'automatisation des tests ? »* → chercher parmi les distracteurs les 3 **avantages** reformulés ; la bonne réponse est du type « le fournisseur de l'outil peut cesser son support ».
- *« Quel type d'outil soutient le pipeline de livraison et les builds automatisés ? »* → **outils DevOps** (distracteurs classiques : outils de gestion, outils d'exécution, outils de collaboration).

---

## ⚡ Quiz éclair (auto-contrôle)

| Question | Réponse |
|---|---|
| Un outil de CI/CD appartient à quelle catégorie ? | **Outils DevOps** |
| Robot Framework / Selenium → catégorie ? | **Exécution des tests et couverture** |
| Docker / machines virtuelles → catégorie ? | **Évolutivité et standardisation du déploiement** |
| JMeter (tests de charge) → catégorie ? | **Tests non fonctionnels** |
| SonarQube → catégorie ? | **Test statique** |
| Un tableur peut-il être un outil de test ? | **Oui**, selon le contexte |
| « Répétabilité accrue » : avantage ou risque ? | **Avantage** |
| « Projet open source abandonné » : avantage ou risque ? | **Risque** |
| « Évaluation plus objective de la couverture » ? | **Avantage** |
| « Attentes irréalistes » ? | **Risque** |
| « Incompatibilité avec la plateforme de développement » ? | **Risque** |
| « Plus de temps pour concevoir de nouveaux tests » ? | **Avantage** |
| Acheter un outil garantit-il le succès ? | **Non** — introduction, maintenance, formation nécessaires |

---

## Récapitulatif des objectifs d'apprentissage

| ID | Niveau | Objectif |
|---|---|---|
| FL-6.1.1 | K2 | Expliquer comment différents types d'outils soutiennent les tests |
| FL-6.2.1 | K1 | Rappeler les avantages et les risques de l'automatisation des tests |
