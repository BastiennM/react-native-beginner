## Prérequis

Ce projet utilise `nvm` (Node Version Manager) pour gérer les versions de Node.js. Assurez-vous d'avoir `nvm` installé sur votre machine avant de continuer.

### Installation de `nvm`

Pour installer `nvm`, suivez les instructions sur le [dépôt GitHub officiel de nvm](https://github.com/nvm-sh/nvm).

### Utilisation de `nvm`

Une fois `nvm` installé, vous pouvez installer et utiliser la version de Node.js spécifiée pour ce projet en exécutant les commandes suivantes :

```sh
nvm install
nvm use
```

## Clé API
Placer la clé API dans un fichier `.env` à la racine du projet (se référer au fichier `.env.example` pour le format).

## Auto-notation
Je me donne 16/20

20/20 signifie pour moi le projet parfait, ce qu'il m'a manqué :
Je m'enlève des points pour les raisons suivantes :

- Architecture du projet -> Elle peut être améliorée dans le nommage des fichiers / dossiers + erreur TS sur les icônes
- Dark mode -> Seulement sur un switch manuel, aurait pu être automatique en fonction du système et ensuite possibilité de switcher manuellement
- Connaissance du language -> J'ai surement utilisé des widgets qui ne sont pas optimisés ou qui ne sont pas les meilleurs pour la situation (résulte de la non connaissance du language)
- Temps de chargement des films -> J'aurais pu optimiser le chargement des films en utilisant un système de loader / skeleton
- Composant de switch de Catégorie -> Composant pas tout à fait correspondant à la maquette (pas de blur)
