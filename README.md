# Tageler

This project is the frontend part of the Tageler app, which is created for [Pfadicorps Patria Bern](https://www.pfadipatria.ch/).
Its purpose is to provide the possibility to manage so-called 'tagelers', thus events for members of the Pfadicoprs Patria Bern.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Preconditions
- Install Angular CLI
- Install and run tageler-api, https://github.com/tageler/tageler-api.git

## Quickstart
```bash
git clone https://github.com/tageler/tageler-frontend.git
cd tageler-frontend
npm install
npm start
```
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Testing
### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


## Important files and directories
| File/Folder | Purpose |
|--------|-------------|
| src/app/ | Contains application files. |
| e2e/ | End-to-end (e2e) tests of the application, written in Jasmine and run by the protractor e2e test runner. |
| node_modules/ | The npm packages installed with the `npm install` command. |
| index.html | The application host page. It loads a few essential scripts in a prescribed order. Then it boots the application, placing the root AppComponent in the custom <my-app> body tag. |
| package.json | Identifies npmpackage dependencies for the project. |
| karma.conf.js | Configuration for the karma test runner. |


## License
Copyright © 2017 Pfadicorps Patria Bern

## Authors
#### Developers:
  * Ramona Beck
  * Balthasar Hofer
  * Kevin Meister
  * Sven Schmid
  * Artthik Sellathurai
  * Flurin Trübner
   
#### Contributors:
  * Lucas Bickel
  * Mathias Petermann
