# Bac à sable TypeScript

## NODE TYPESCRIPT

### Install Typescript
```
npm i typescript --save-dev
```
Compilation et surveillance :
```
"tsc": "tsc",
"watch": "tsc -w"
```
Initialisation du projet :
```
npx tsc --init
```
### *_TsConfig.json_* 
Permet de modifier les parametrage de typescript dans notre projet.

## Exo hamburger
Utilisation de la classe *_recipe_* avec l'import de l'interface *_IIngredients_* qui utlise un enum pour les categories *_ECategory_*