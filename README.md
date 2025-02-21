### **Compte rendu du TP : Albums API avec Fastify et Mongoose**

Dans ce TP, nous avons créé une **API REST sécurisée** permettant de gérer une collection de livres en utilisant **Fastify, Mongoose et MongoDB**. Voici les étapes réalisées :

1. **Installation et configuration**
   - Installation de **MongoDB** et connexion avec **Mongoose**.
   - Création d’un projet **Node.js** et installation de **Fastify**.
   - Génération d’un certificat **HTTPS** pour sécuriser les requêtes.

2. **Définition du modèle de données**
   - Création d’un modèle `Book` avec Mongoose contenant :
     - `titre` (obligatoire)
     - `auteur` (obligatoire)
     - `description` (optionnel)
     - `format` (`"poche"`, `"manga"`, `"audio"`, valeur par défaut : `"poche"`)

3. **Création des routes CRUD**
   - **POST `/books`** : Ajouter un livre.
   - **GET `/books`** : Récupérer tous les livres.
   - **GET `/books/:id`** : Récupérer un livre par son ID.
   - **PUT `/books/:id`** : Mettre à jour un livre.
   - **DELETE `/books/:id`** : Supprimer un livre.

4. **Sécurisation de l’API**
   - Validation des entrées et sorties avec **JSON Schema**.
   - Protection des entêtes HTTP avec **Helmet.js**.
   - Restriction des **données exposées** pour éviter les fuites.

5. **Passage à ESModules**
   - Remplacement de **CommonJS (`require`)** par **ESModules (`import/export`)**.
   - Ajout de `"type": "module"` dans **package.json**.

6. **Tests**
   - Utilisation de **Postman** ou **cURL** pour tester les routes.
   - Vérification des erreurs et des validations.
