# ESIEE-IT - 2022 - Angular Learn

## 1 - Angular

### 1.1 - Découverte de Angular

[Angular](https://angular.io/) : Google

Pourquoi Angular ou React contre PHP ? => MVC (Symphony s'ésouffle)

__But :__ Créer des composants réutilisable.

### 1.2 - Framework vs Librairie :

- Framework : tous possible
- Librairie : ajouts d'éléments

### 1.3 - Qu'est-ce que TypeScript ?

TypeScript : Javascript avec une typage de donnée

### 1.4 - Javascript - Lutter contre les errors réccurentes :

- undefined
- NaN
- Machin is Function

### 2 - Installation de Angular :

#### 2.1 - Pré-requis :

NodeJS (inclus NPM) en __LTS__ : serveur web

#### 2.2 - Vérification

```
mtl@MacBook-Pro-LDumay Sites % npm -v
8.1.4
mtl@MacBook-Pro-LDumay Sites % node -v
v17.2.0
```

### 3 - Installation de Angular CLI

#### 3.1 - Pré-requis

La dernier version __LTS__ de NodeJS

#### 3.2 - Résultat

```
npm install -g @angular/cli
```
Résultat

```
added 183 packages, and audited 184 packages in 8s

22 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Test

```
ng v
```

Resultat

```
Node.js version v17.2.0 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/releases/.

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.1.3
Node: 17.2.0 (Unsupported)
Package Manager: npm 8.1.4
OS: darwin x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1301.3 (cli-only)
@angular-devkit/core         13.1.3 (cli-only)
@angular-devkit/schematics   13.1.3 (cli-only)
@schematics/angular          13.1.3 (cli-only)
    
Warning: The current version of Node (17.2.0) is not supported by Angular.
```


### 4 - Première application

#### 4.1 - Création

Commande

```
ng new <nom_de_projet> --style=scss --skip-tests=true
```

Resultat

```
? Would you like to add Angular routing? No
CREATE mon_permier_projet/README.md (1062 bytes)
CREATE mon_permier_projet/.editorconfig (274 bytes)
CREATE mon_permier_projet/.gitignore (548 bytes)
CREATE mon_permier_projet/angular.json (3868 bytes)
CREATE mon_permier_projet/package.json (1082 bytes)
CREATE mon_permier_projet/tsconfig.json (863 bytes)
CREATE mon_permier_projet/.browserslistrc (600 bytes)
CREATE mon_permier_projet/karma.conf.js (1435 bytes)
CREATE mon_permier_projet/tsconfig.app.json (287 bytes)
CREATE mon_permier_projet/tsconfig.spec.json (333 bytes)
CREATE mon_permier_projet/.vscode/extensions.json (130 bytes)
CREATE mon_permier_projet/.vscode/launch.json (474 bytes)
CREATE mon_permier_projet/.vscode/tasks.json (938 bytes)
CREATE mon_permier_projet/src/favicon.ico (948 bytes)
CREATE mon_permier_projet/src/index.html (302 bytes)
CREATE mon_permier_projet/src/main.ts (372 bytes)
CREATE mon_permier_projet/src/polyfills.ts (2338 bytes)
CREATE mon_permier_projet/src/styles.scss (80 bytes)
CREATE mon_permier_projet/src/test.ts (745 bytes)
CREATE mon_permier_projet/src/assets/.gitkeep (0 bytes)
CREATE mon_permier_projet/src/environments/environment.prod.ts (51 bytes)
CREATE mon_permier_projet/src/environments/environment.ts (658 bytes)
CREATE mon_permier_projet/src/app/app.module.ts (314 bytes)
CREATE mon_permier_projet/src/app/app.component.scss (0 bytes)
CREATE mon_permier_projet/src/app/app.component.html (23332 bytes)
CREATE mon_permier_projet/src/app/app.component.ts (223 bytes)
✔ Packages installed successfully.
astuce: Utilisation de 'master' comme nom de la branche initiale. Le nom de la branche
astuce: par défaut peut changer. Pour configurer le nom de la branche initiale
astuce: pour tous les nouveaux dépôts, et supprimer cet avertissement, lancez :
astuce: 
astuce:         git config --global init.defaultBranch <nom>
astuce: 
astuce: Les noms les plus utilisés à la place de 'master' sont 'main', 'trunk' et
astuce: 'development'. La branche nouvellement créée peut être rénommée avec :
astuce: 
astuce:         git branch -m <nom>
    Successfully initialized git.
```

#### 4.2 - Lancement

Lancer cette commande dans le répertoire de l'application

```
ng serve
```

Résultat

```
✔ Browser application bundle generation complete.

Initial Chunk Files   | Names         |  Raw Size
vendor.js             | vendor        |   1.73 MB | 
polyfills.js          | polyfills     | 339.21 kB | 
styles.css, styles.js | styles        | 212.99 kB | 
main.js               | main          |  51.11 kB | 
runtime.js            | runtime       |   6.87 kB | 

                      | Initial Total |   2.32 MB

Build at: 2022-01-18T10:02:13.567Z - Hash: 8bf9f7176725f5ea - Time: 7638ms

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


✔ Compiled successfully.
```

#### 4.3 - Accessibilité de l'application

[http://localhost:4200/](http://localhost:4200/)

#### 4.4 - But - Mini facebook:

[https://esiee-it.o3digital.net/niceplace/](https://esiee-it.o3digital.net/niceplace/)

Base

![image_1](_img_readme/000.png)

---

### 4 - Composants et Services

#### 4.1 - Composant

![Les composants](_img_readme/_000.png)

#### 4.2 - Déclaration de composant

```
ng generate component <nom_du_composant>
```

ou

```
ng c c <nom_du_composant>
```

---

#### 4.5 - Projet - Dev 0.1.1

Codes 

![image_1](_img_readme/001.png)

Rendu

![image_1](_img_readme/002.png)

#### 4.6 - Projet - Dev 0.1.2

Codes 

![image_1](_img_readme/003.png)

Rendu

![image_1](_img_readme/004.png)

![image_1](_img_readme/005.png)

#### 4.7 - Projet - Dev dev 0.1.3

Codes 

![image_1](_img_readme/006.png)

Rendu

![image_1](_img_readme/007.png)

#### 4.8 - Projet - Dev dev 0.1.4

Codes 

Démo : `*ngIf="nicePlace.tag"`

Le ngIf inclus ou pas l'élément dans le DOM.

![image_1](_img_readme/008.png)

Rendu

![image_1](_img_readme/009.png)

Possible

![image_1](_img_readme/010.png)

#### 4.9 - Projet - Dev dev 0.1.5

Codes 

Démo : `*ngFor="let myPlace of myPlaces"`

![image_1](_img_readme/011.png)

Rendu

![image_1](_img_readme/012.png)

Possible

![image_1](_img_readme/013.png)

#### 4.10 - Projet - Dev dev 0.1.6

Codes 

Démo : `[ngStyle]="{ width: (nicePlace.score*100)+'px' }"`

![image_1](_img_readme/014.png)

Rendu

![image_1](_img_readme/015.png)

#### 4.11 - Projet - Dev dev 0.1.7

Codes 

Démo : `[ngClass]="{liked : likeButtonText == 'Je n\'aime plus !'}"`

![image_1](_img_readme/016.png)

Rendu

![image_1](_img_readme/017.png)

#### 4.12 - Projet - Dev dev 0.1.8

##### 4.12.1 - Le Pipe - Sur les titres

<element> => remplacer par :
- uppercase
- lowercase
- titlecase

```
<h2>{{ nicePlace.title | <element> }}</h2>
```

##### 4.12.2 - Le Pipe - Sur les dates

<element> => remplacer par :
- date
- date:'le d MMMM yyyy : HH:mm:ss'

```
<p>Mise en ligne le : {{ nicePlace.createDate  | <element> }}</p>
```

[aide](https://angular.io/api/common/DatePipe)

##### 4.12.3 - Le Pipe - Sur les dates en Fr

Importer dans `app.module.ts` :

```
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
```

```
providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
```

```
export class AppModule {
  constructor(){
    registerLocaleData(fr.default)
  }
}
```

![image_1](_img_readme/018.png)

Rendu

![image_1](_img_readme/019.png)

##### 4.12.4 - Le Pipe - Sur les nombres

<element> => remplacer par :
- number
- number: '1.0-0'

```
{{ nicePlace.score | number: '1.0-0' }}
```

Rendu

![image_1](_img_readme/020.png)

##### 4.12.5 - Le Pipe - Sur les pourcentages

<element> => remplacer par :
- percent
- percent: '1.0-0'

```
{{ nicePlace.score | percent: '1.0-0' }}
```

Rendu

![image_1](_img_readme/021.png)

#### 4.13 - Projet - Dev dev 0.1.11

Codes 

![image_1](_img_readme/022.png)

Rendu

![image_1](_img_readme/023.png)

#### 4.14 - Projet - Dev dev 0.1.12

Codes 

![image_1](_img_readme/024.png)

Rendu

![image_1](_img_readme/025.png)

#### 4.15 - Projet - Dev dev 0.1.13

Codes 

![image_1](_img_readme/026.png)

#### 4.16 - Projet - Dev dev 0.1.14

Codes 

![image_1](_img_readme/027.png)

Rendu 

![image_1](_img_readme/028.png)

Update : dev 0.1.15

![image_1](_img_readme/029.png)

#### 4.17 - Projet - Dev dev 0.1.17

Codes - routing

![image_1](_img_readme/030.png)

Rendu 

![image_1](_img_readme/031.png)

![image_1](_img_readme/032.png)

#### 4.18 - Projet - Dev dev 0.1.18

Requis à cause de la méthode de routing à la main.

![image_1](_img_readme/033.png)

Codes - routing

![image_1](_img_readme/034.png)

Rendu 

![image_1](_img_readme/035.png)

![image_1](_img_readme/036.png)

#### 4.19 - Projet - Dev dev 0.1.19

Codes

![image_1](_img_readme/037.png)

Rendu 

![image_1](_img_readme/038.png)

#### 4.20 - Projet - Dev dev 0.1.20

Requis à cause de la méthode de routing à la main.

![image_1](_img_readme/039.png)

Création d'un nouveau composant :

```
ng g c single-nice-place --module app
```

1. Move nice-place To single-nice-place
2. Création du lien entre la liste de nice-place et single-nice-place

Codes

![image_1](_img_readme/040.png)

Rendu 

![image_1](_img_readme/041.png)

![image_1](_img_readme/042.png)

#### 4.21 - Projet - Dev dev 0.1.21

Codes

![image_1](_img_readme/043.png)

Rendu 

![image_1](_img_readme/044.png)

---

## Aide Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
