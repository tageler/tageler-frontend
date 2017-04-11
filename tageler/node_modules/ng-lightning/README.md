# ng-lightning

[![Build Status](https://travis-ci.org/ng-lightning/ng-lightning.svg?branch=master)](https://travis-ci.org/ng-lightning/ng-lightning)
[![Sauce Test Status](https://saucelabs.com/buildstatus/ng-lightning)](https://saucelabs.com/u/ng-lightning)
[![npm version](https://badge.fury.io/js/ng-lightning.svg)](https://www.npmjs.com/package/ng-lightning)
[![npm](https://img.shields.io/npm/dm/ng-lightning.svg?maxAge=2592000)](https://www.npmjs.com/package/ng-lightning)
[![Join the chat at https://gitter.im/ng-lightning/ng-lightning](https://badges.gitter.im/ng-lightning/ng-lightning.svg)](https://gitter.im/ng-lightning/ng-lightning?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/ng-lightning.svg)](https://saucelabs.com/u/ng-lightning)

This library contains native [Angular](https://angular.io/) components and directives written from scratch in TypeScript using the [Lightning Design System](https://www.lightningdesignsystem.com/) CSS framework.

We are looking for community help to find and fix bugs, improve demo site and create new components.

## Installation

Install through `npm`:

```bash
npm install --save ng-lightning
```

If you use **SystemJS** to load your files, you should adjust your configuration to point our UMD bundle through [unpkg](https://unpkg.com/)

```javascript
map: {
  ...
  'ng-lightning/ng-lightning': 'https://unpkg.com/ng-lightning@x.x.x/bundles/ng-lightning.umd.js'
}
```

#### Dependencies
This library depends on Salesforce's LDS markup and CSS (tested with 2.2.1). We don't ship any CSS file, but you have to take care of including LDS CSS rules in your page. There are various ways to achieve this, for example compiling through their source files ([`@salesforce-ux/design-system`](https://github.com/salesforce-ux/design-system)) or by adding this into your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css">
```

#### SVG Icons
Because of various cross-domain issues, if you want to use SLDS icons, you must provide a copy of the various sprite files (ie `@salesforce-ux/design-system/assets/icons/action-sprite/svg/symbols.svg`), served locally through your server. Check our [webpack configuration](demo/webpack.config.js), to see how we achieve this for our demo page.

#### IE11 support
Unfortunately, IE11 does not support two important features.

* [SVG External Content](https://css-tricks.com/svg-use-with-external-reference-take-2/), used to load SVG icons from a spritemap. In order to support this, you will need to use a small script called [svg4everybody](https://github.com/jonathantneal/svg4everybody).  
Available on npm cdn [here](https://unpkg.com/svg4everybody).

* `Element.classList` on SVG elements, used by Angular's `renderer.setElementClass`. See [here](https://github.com/angular/angular/issues/6327) for more information. Use [classList.js](https://github.com/eligrey/classList.js) shim, available on npm cdn [here](https://unpkg.com/classlist.js).

Typically, these shims should be placed within the `<head>` element.  


## Usage & Demo
http://ng-lightning.github.io/ng-lightning/


## Contributing

We are always looking for high quality contributions! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) doc for guidelines.


## Sponsors

Development is supported by [ZuluTrade](http://zulutrade.com/).


## Browsers

We support the same browsers and versions supported by both Angular and Salesforce's Lightning Design System.  
Cross browser/environment testing is performed through [Saucelabs](https://saucelabs.com/).  
