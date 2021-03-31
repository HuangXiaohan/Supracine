# Supracine

Supracine est une application qui simule un site d'information sur les films. Elle est réalisée de deux manières. L'un est en framework React et l'autre est en Angular.

## Fonctionnalités

- **Recherche de film:** Lorsque vous entrez sur la page d'accueil, vous verrez une liste de films selon des critères de recherche par défaut. Vous pouvez aussi rechercher les films selon vos choix des critères.

- **Detail de film:** En cliquant un film, vous allez entrer un nouvel page qui affiche les détails du film. Le logo vous permet de renterer la page d'acceuil.

- **Favoris:** Dans le page de détail, un bouton vous permet d'ajouter le film dans vos favoris. Vous pouvez également l'enlever des favoris. Il y a aussi un lien qui permet d'aller à la liste des favoris. Dans la page de favoris, en cliquant chaque élément, vous pouvez rentrer la page de détail correspondant.

## Lancement

- **supracine-react**: Demande **Node >= 10.16** et **npm >= 5.6**. Les versions sur mon ordinateur sont Node 14.16.0 et npm 7.7.5. Pour lancer l'application, exécutez: **npm start**.

    Si vous rencontrez une erreur de lancement comme:
    ```
    events.js:xxx
    throw er; // Unhandled 'error' event
    ^
    ```
    Essayez d'exécuter:

    ```
    npm install react-scripts@2.1.8
    npm start
    ```

    ou

    ```
    rm -rf node_modules
    npm cache clear --force
    npm install
    ```

- **supracine-angular**: Ce projet a été généré avec **Angular CLI version 11.2.6**. Pour lancer l'application, exécutez: **ng serve --open**.