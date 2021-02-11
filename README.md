# Getting Started

Il faut avoir **node** installé sur son ordinateur (personnellement j'ai la version 12.5.0).
Après avoir clone le repository, il faut installer les dependencies dans la racine et /react-backend :

    npm install

## Lancer l'application

Dans la racine :
    npm start

Gand /react-backend :
    PORT=3001 npm start

## Tests

    npm test


# ToDoList

Pour observer les résultats des tests lors de l'utilisation de l'application, il faut checker la console (F12).
Pour lancer tous les tests en même temps, il y a le bouton "Tests" en haut à droite de l'écran.

Une fois connecté, on peut manipuler la ToDoList. Pour pouvoir examiner tous les cas de figure soi-même, et ça à cause de la limite de 30 minutes entre l'ajout de deux items, il y a des boutons pour :
* Ajouter 7 items (il y a 30 minutes) : Pour tester l'envoi du mail au 8ème item
* Remplir : Pour tester la limite de 10 items
* Vider

