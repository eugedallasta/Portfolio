# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Pasos tomados desde el inicio

modules
      about
         about-page
              about-page-component.ts
              about-page-component.html
              about-page-component.scss
         about-components
         about.module.ts
      contact
         contact-page
         contact-components
         contact.module.ts
      experience
         experience-page
         experience-components
         experience.module.ts
      home
         home-page
              home-page-component.ts
              home-page-component.html
              home-page-component.scss
         components
              home-button
              home-title
         home.module.ts

      work
         work-page
         work-components
         work.module.ts


1/ Creamos manualmente la carpeta "modules"

2/ ng g m .... por cada módulo:
                ng g m modules/home
                ng g m modules/about
                ng g m modules/experience
                ng g m modules/work
                ng g m modules/contact

3/ En cada module.ts de la carpeta "modules" debemos exportar el componente.

4/ En app.module.ts añadir todos los módulos creados en import.

5/ Primera subida a GITHUB:  git push
