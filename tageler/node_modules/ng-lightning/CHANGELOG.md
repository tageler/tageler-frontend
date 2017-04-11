<a name="1.3.0"></a>
# [1.3.0](https://github.com/ng-lightning/ng-lightning/compare/v1.2.1...v1.3.0) (2017-03-28)


### Bug Fixes

* **picklist:** empty `filter` should filter based on value ([11832d2](https://github.com/ng-lightning/ng-lightning/commit/11832d2)), closes [#309](https://github.com/ng-lightning/ng-lightning/issues/309)


### Features

* **datatables:** support custom header classes per column ([04c24f4](https://github.com/ng-lightning/ng-lightning/commit/04c24f4)), closes [#299](https://github.com/ng-lightning/ng-lightning/issues/299) [#308](https://github.com/ng-lightning/ng-lightning/issues/308)
* **images:** add figure component ([b6f5ab5](https://github.com/ng-lightning/ng-lightning/commit/b6f5ab5)), closes [#284](https://github.com/ng-lightning/ng-lightning/issues/284)
* **popovers:** support header and footer ([3b9c3bd](https://github.com/ng-lightning/ng-lightning/commit/3b9c3bd)), closes [#313](https://github.com/ng-lightning/ng-lightning/issues/313)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/ng-lightning/ng-lightning/compare/v1.2.0...v1.2.1) (2017-03-03)


### Bug Fixes

* **icons:** remove `xmlns:xlink` attribute from SVG ([5706cd5](https://github.com/ng-lightning/ng-lightning/commit/5706cd5))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/ng-lightning/ng-lightning/compare/v1.1.0...v1.2.0) (2016-12-18)


### Bug Fixes

* **picklist:** empty initial and handle falsy values of placeholder ([2ca807f](https://github.com/ng-lightning/ng-lightning/commit/2ca807f))


### Features

* **icons:** add waffle icon ([047f13d](https://github.com/ng-lightning/ng-lightning/commit/047f13d)), closes [#281](https://github.com/ng-lightning/ng-lightning/issues/281)
* **lookups:** support custom header ([edfb316](https://github.com/ng-lightning/ng-lightning/commit/edfb316)), closes [#136](https://github.com/ng-lightning/ng-lightning/issues/136) [#286](https://github.com/ng-lightning/ng-lightning/issues/286)
* **tabs:** configurable tab header capitalisation ([3513dbc](https://github.com/ng-lightning/ng-lightning/commit/3513dbc)), closes [#285](https://github.com/ng-lightning/ng-lightning/issues/285)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ng-lightning/ng-lightning/compare/v1.0.2...v1.1.0) (2016-11-29)


### Bug Fixes

* **popovers:** properly cleanup content passed as `TemplateRef` ([52687c9](https://github.com/ng-lightning/ng-lightning/commit/52687c9)), closes [#274](https://github.com/ng-lightning/ng-lightning/issues/274)


### Features

* **popovers:** expose `position` method ([00b1a74](https://github.com/ng-lightning/ng-lightning/commit/00b1a74)), closes [#273](https://github.com/ng-lightning/ng-lightning/issues/273)



<a name="1.0.2"></a>
## [1.0.2](https://github.com/ng-lightning/ng-lightning/compare/v1.0.1...v1.0.2) (2016-11-17)


### Bug Fixes

* **config:** don’t try to unsubscribe if no subscription ([931496f](https://github.com/ng-lightning/ng-lightning/commit/931496f)), closes [#270](https://github.com/ng-lightning/ng-lightning/issues/270) [#271](https://github.com/ng-lightning/ng-lightning/issues/271)
* **datatables:** correctly use `trackByKey` input ([ab754e7](https://github.com/ng-lightning/ng-lightning/commit/ab754e7)), closes [#268](https://github.com/ng-lightning/ng-lightning/issues/268) [#269](https://github.com/ng-lightning/ng-lightning/issues/269)



<a name="1.0.1"></a>
## [1.0.1](https://github.com/ng-lightning/ng-lightning/compare/v1.0.0...v1.0.1) (2016-11-11)


### Bug Fixes

* **app:** remove `[@types](https://github.com/types)/core-js` ([3c316a9](https://github.com/ng-lightning/ng-lightning/commit/3c316a9)), closes [#265](https://github.com/ng-lightning/ng-lightning/issues/265) [#267](https://github.com/ng-lightning/ng-lightning/issues/267)



<a name="1.0.0"></a>
# [1.0.0](https://github.com/ng-lightning/ng-lightning/compare/v0.27.0...v1.0.0) (2016-11-07)


### Bug Fixes

* **datepicker:** correctly handle `firstDayOfWeek` as string attribute ([eab39df](https://github.com/ng-lightning/ng-lightning/commit/eab39df))
* **datepicker:** handle when first day of week after first day of month ([3850150](https://github.com/ng-lightning/ng-lightning/commit/3850150))


### Features

* **datepicker:** support custom first day of week ([990783b](https://github.com/ng-lightning/ng-lightning/commit/990783b)), closes [#252](https://github.com/ng-lightning/ng-lightning/issues/252) [#255](https://github.com/ng-lightning/ng-lightning/issues/255)
* **demo:** support AoT compilation ([b0f2f71](https://github.com/ng-lightning/ng-lightning/commit/b0f2f71)), closes [#262](https://github.com/ng-lightning/ng-lightning/issues/262)



<a name="0.27.0"></a>
# [0.27.0](https://github.com/ng-lightning/ng-lightning/compare/v0.26.0...v0.27.0) (2016-10-27)


### Bug Fixes

* **popovers:** `nglInteractive` is handled as boolean ([01e4981](https://github.com/ng-lightning/ng-lightning/commit/01e4981))
* **popovers:** `nglPopoverBehavior` makes host focusable by default ([40e1d5b](https://github.com/ng-lightning/ng-lightning/commit/40e1d5b))


### Features

* **popovers:** support interaction with content ([cbef50d](https://github.com/ng-lightning/ng-lightning/commit/cbef50d)), closes [#254](https://github.com/ng-lightning/ng-lightning/issues/254)
* **rating:** support on/off color to be configurable ([f314e06](https://github.com/ng-lightning/ng-lightning/commit/f314e06)), closes [#253](https://github.com/ng-lightning/ng-lightning/issues/253)



<a name="0.26.0"></a>
# [0.26.0](https://github.com/ng-lightning/ng-lightning/compare/v0.25.0...v0.26.0) (2016-10-26)


### Bug Fixes

* **breadcrumbs:** support `routerLink` on each breadcrumb ([e978ed6](https://github.com/ng-lightning/ng-lightning/commit/e978ed6)), closes [#248](https://github.com/ng-lightning/ng-lightning/issues/248)
* **popovers:** position after popover view is initialized ([1259247](https://github.com/ng-lightning/ng-lightning/commit/1259247)), closes [#251](https://github.com/ng-lightning/ng-lightning/issues/251)


### Features

* **rating:** expose `fill` value in custom template icons ([931359c](https://github.com/ng-lightning/ng-lightning/commit/931359c)), closes [#247](https://github.com/ng-lightning/ng-lightning/issues/247)
* **rating:** support fractional values ([6aba289](https://github.com/ng-lightning/ng-lightning/commit/6aba289)), closes [#229](https://github.com/ng-lightning/ng-lightning/issues/229)


### BREAKING CHANGES

* breadcrumbs: breadcrumb is now a structural directive

  Before:

  ```html
  <ngl-breadcrumb href="...">...</ngl-breadcrumb>
  ```

  After:

  ```html
  <a *nglBreadcrumb href="...">...</a>
  ```



<a name="0.25.0"></a>
# [0.25.0](https://github.com/ng-lightning/ng-lightning/compare/v0.24.0...v0.25.0) (2016-10-15)


### Features

* **forms:** add checkbox toggle component ([99d0ddd](https://github.com/ng-lightning/ng-lightning/commit/99d0ddd)), closes [#246](https://github.com/ng-lightning/ng-lightning/issues/246)
* **popovers:** add output event when shows or hides ([4d08456](https://github.com/ng-lightning/ng-lightning/commit/4d08456)), closes [#244](https://github.com/ng-lightning/ng-lightning/issues/244)



<a name="0.24.0"></a>
# [0.24.0](https://github.com/ng-lightning/ng-lightning/compare/v0.23.0...v0.24.0) (2016-10-12)


### Bug Fixes

* **forms:** checkbox/radios have more accessible DOM structure ([22a2464](https://github.com/ng-lightning/ng-lightning/commit/22a2464)), closes [#214](https://github.com/ng-lightning/ng-lightning/issues/214)
* **lookups:** correctly declare `debounce` as input instead of attribute ([170bcd1](https://github.com/ng-lightning/ng-lightning/commit/170bcd1))
* **lookups:** don't render `<label>` element if empty ([c50572e](https://github.com/ng-lightning/ng-lightning/commit/c50572e)), closes [#233](https://github.com/ng-lightning/ng-lightning/issues/233)
* **notifications:** clear timeout when destroyed ([c91a20c](https://github.com/ng-lightning/ng-lightning/commit/c91a20c)), closes [#237](https://github.com/ng-lightning/ng-lightning/issues/237)


### Features

* **build:** distribute ESM with metadata and UMD bundle ([a52702f](https://github.com/ng-lightning/ng-lightning/commit/a52702f)), closes [#239](https://github.com/ng-lightning/ng-lightning/issues/239)
* **app:** upgrade SLDS to to 2.1.2 ([8125ec7](https://github.com/ng-lightning/ng-lightning/commit/8125ec7))
* **modals:** support custom header template ([345bce7](https://github.com/ng-lightning/ng-lightning/commit/345bce7)), closes [#234](https://github.com/ng-lightning/ng-lightning/issues/234)
* **popovers:** support "manual" open and close with custom delay ([adc0fcc](https://github.com/ng-lightning/ng-lightning/commit/adc0fcc)), closes [#235](https://github.com/ng-lightning/ng-lightning/issues/235)
* **popovers:** support delayed closing ([cb0b2c6](https://github.com/ng-lightning/ng-lightning/commit/cb0b2c6)), closes [#231](https://github.com/ng-lightning/ng-lightning/issues/231)


### BREAKING CHANGES

* build: code is now available as ES modules or UMD bundle and no longer as commonjs
* forms: structural changes
  * all input/textarea/select inside `<ngl-form-element>` or `<ngl-form-group-element>` should have `nglFormControl` attribute
  * single checkboxes should be wrapped by `<ngl-form-checkbox>`

  Before:

  ```html
  <ngl-form-element><input type="checkbox" /></ngl-form-element>
  <ngl-form-element><select></select></ngl-form-element>
  ```

  After:

  ```html
  <ngl-form-checkbox><input nglFormControl type="checkbox" /></ngl-form-element>
  <ngl-form-element><select nglFormControl></select></ngl-form-element>
  ```
* lookups: `nglLookupLabel` should be hosted on `<template>`

  Before:

  ```html
  <ngl-lookup>
     <span nglLookupLabel>...</span>
  </ngl-lookup>
  ```

  After:

  ```html
  <ngl-lookup>
     <template nglLookupLabel>...</template>
  </ngl-lookup>

  ```
  or
  ```html
  <ngl-lookup label="..."></ngl-lookup>

  ```



<a name="0.23.0"></a>
# [0.23.0](https://github.com/ng-lightning/ng-lightning/compare/v0.22.0...v0.23.0) (2016-10-03)


### Bug Fixes

* **app:** add `forRoot` to `NglModule` ([6426534](https://github.com/ng-lightning/ng-lightning/commit/6426534)), closes [#228](https://github.com/ng-lightning/ng-lightning/issues/228)
* **config:** remove `provideNglConfig` for injectable `NglConfig` ([47acd3d](https://github.com/ng-lightning/ng-lightning/commit/47acd3d)), closes [#218](https://github.com/ng-lightning/ng-lightning/issues/218)
* **forms:** remove `nglForm` prefix from input attributes ([5e9f16a](https://github.com/ng-lightning/ng-lightning/commit/5e9f16a)), closes [#217](https://github.com/ng-lightning/ng-lightning/issues/217)
* **menus:** don't close when inner element is clicked and removed from DOM ([5361f80](https://github.com/ng-lightning/ng-lightning/commit/5361f80)), closes [#223](https://github.com/ng-lightning/ng-lightning/issues/223) [#224](https://github.com/ng-lightning/ng-lightning/issues/224)


### Features

* **config:** support runtime change of configuration ([3a14b44](https://github.com/ng-lightning/ng-lightning/commit/3a14b44)), closes [#219](https://github.com/ng-lightning/ng-lightning/issues/219)
* **popovers:** support delayed opening ([8878beb](https://github.com/ng-lightning/ng-lightning/commit/8878beb)), closes [#222](https://github.com/ng-lightning/ng-lightning/issues/222)
* **rating:** support custom color for on/off state ([0e771e1](https://github.com/ng-lightning/ng-lightning/commit/0e771e1)), closes [#226](https://github.com/ng-lightning/ng-lightning/issues/226)


### BREAKING CHANGES

* app: `NglModule` must now be imported using the `forRoot()` static method.
* config: In case you didn't override default configuration values, just remove `provideNglConfig()`. If you did then, check the `Configuration` section for more details.
* forms: renamed `nglForm*` attributes to just `*`

  Before:

  ```html
  <... [nglFormLabel]="..."></...>
  <... [nglFormError]="..."></...>
  <... [nglFormRequired]="..."></...>
  ```

  After:

  ```html
  <... [label]="..."></...>
  <... [error]="..."></...>
  <... [required]="..."></...>
  ```



<a name="0.22.0"></a>
# [0.22.0](https://github.com/ng-lightning/ng-lightning/compare/v0.21.0...v0.22.0) (2016-09-15)


### Features

* **app:** upgrade Angular to 2.0.0 ([cab4c08](https://github.com/ng-lightning/ng-lightning/commit/cab4c08)), closes [#213](https://github.com/ng-lightning/ng-lightning/issues/213)
* **datatables:** add loading overlay ([15fd577](https://github.com/ng-lightning/ng-lightning/commit/15fd577)), closes [#201](https://github.com/ng-lightning/ng-lightning/issues/201)
* **datatables:** add row event handler ([446fe68](https://github.com/ng-lightning/ng-lightning/commit/446fe68)), closes [#204](https://github.com/ng-lightning/ng-lightning/issues/204) [#208](https://github.com/ng-lightning/ng-lightning/issues/208)
* **datatables:** custom message when no data available ([052a0a6](https://github.com/ng-lightning/ng-lightning/commit/052a0a6)), closes [#205](https://github.com/ng-lightning/ng-lightning/issues/205)
* **datatables:** support custom header template ([c0ecd8c](https://github.com/ng-lightning/ng-lightning/commit/c0ecd8c)), closes [#206](https://github.com/ng-lightning/ng-lightning/issues/206) [#211](https://github.com/ng-lightning/ng-lightning/issues/211)
* **rating:** support `max` as input ([456ce76](https://github.com/ng-lightning/ng-lightning/commit/456ce76)), closes [#203](https://github.com/ng-lightning/ng-lightning/issues/203)
* **rating:** support custom icon ([95a013f](https://github.com/ng-lightning/ng-lightning/commit/95a013f)), closes [#200](https://github.com/ng-lightning/ng-lightning/issues/200) [#202](https://github.com/ng-lightning/ng-lightning/issues/202)


### Performance Improvements

* **NglInternalOutlet:** reduce number of checks needed ([2b3b1ab](https://github.com/ng-lightning/ng-lightning/commit/2b3b1ab)), closes [#209](https://github.com/ng-lightning/ng-lightning/issues/209)



<a name="0.21.0"></a>
# [0.21.0](https://github.com/ng-lightning/ng-lightning/compare/v0.20.0...v0.21.0) (2016-09-09)


### Bug Fixes

* **icons:** remove `default` as default color ([288e65b](https://github.com/ng-lightning/ng-lightning/commit/288e65b)), closes [#191](https://github.com/ng-lightning/ng-lightning/issues/191)
* **modals:** use default change detection strategy ([3e6fd4b](https://github.com/ng-lightning/ng-lightning/commit/3e6fd4b)), closes [#197](https://github.com/ng-lightning/ng-lightning/issues/197)
* **picklist:** convent filter to lowercase before compare ([17899ab](https://github.com/ng-lightning/ng-lightning/commit/17899ab))


### Features

* **lookups:** support custom message when no results found ([cd1b758](https://github.com/ng-lightning/ng-lightning/commit/cd1b758)), closes [#198](https://github.com/ng-lightning/ng-lightning/issues/198) [#199](https://github.com/ng-lightning/ng-lightning/issues/199)
* **paginations:** support custom text for non-number buttons ([3c38201](https://github.com/ng-lightning/ng-lightning/commit/3c38201)), closes [#193](https://github.com/ng-lightning/ng-lightning/issues/193) [#195](https://github.com/ng-lightning/ng-lightning/issues/195)


### BREAKING CHANGES

* icons: utility icons have no default type `default`

  Before:

  ```html
  <ngl-icon ...></ngl-icon>
  ```

  After:

  ```html
  <ngl-icon ... type="default"></ngl-icon>
  ```



<a name="0.20.0"></a>
# [0.20.0](https://github.com/ng-lightning/ng-lightning/compare/v0.19.0...v0.20.0) (2016-09-02)


### Features

* **app:** upgrade Angular 2 to rc.6 ([ea144aa](https://github.com/ng-lightning/ng-lightning/commit/ea144aa)), closes [#187](https://github.com/ng-lightning/ng-lightning/issues/187)



<a name="0.19.0"></a>
# [0.19.0](https://github.com/ng-lightning/ng-lightning/compare/v0.18.0...v0.19.0) (2016-08-25)


### Bug Fixes

* **app:** declare `@angular/*` as peer dependencies ([722cf23](https://github.com/ng-lightning/ng-lightning/commit/722cf23))


### Features

* **datepickers:** support custom month and day names ([1f7bbb3](https://github.com/ng-lightning/ng-lightning/commit/1f7bbb3)), closes [#184](https://github.com/ng-lightning/ng-lightning/issues/184)


### BREAKING CHANGES

* datepickers: Intl polypill for Safari is no longer needed



<a name="0.18.0"></a>
# [0.18.0](https://github.com/ng-lightning/ng-lightning/compare/v0.17.0...v0.18.0) (2016-08-24)


### Bug Fixes

* **pagination:** bound start page by total elements ([ee08318](https://github.com/ng-lightning/ng-lightning/commit/ee08318)), closes [#178](https://github.com/ng-lightning/ng-lightning/issues/178)


### Features

* **app:** upgrade Angular 2 to rc.5 and [@NgModule](https://github.com/NgModule) ([7b3a902](https://github.com/ng-lightning/ng-lightning/commit/7b3a902)), closes [#182](https://github.com/ng-lightning/ng-lightning/issues/182)


### BREAKING CHANGES

* app: use `@NgModule` to setup your application. Check the `Usage` section for more details.



<a name="0.17.0"></a>
# [0.17.0](https://github.com/ng-lightning/ng-lightning/compare/v0.16.0...v0.17.0) (2016-08-08)


### Bug Fixes

* **build:** support and test IE11 ([b925469](https://github.com/ng-lightning/ng-lightning/commit/b925469)), closes [#121](https://github.com/ng-lightning/ng-lightning/issues/121) [#163](https://github.com/ng-lightning/ng-lightning/issues/163)
* **icons:** use `utility` as default category for `svg[nglIcon]` ([c4b7cfe](https://github.com/ng-lightning/ng-lightning/commit/c4b7cfe))
* **modals:** simplify structure and correctly handle open state ([f87eeec](https://github.com/ng-lightning/ng-lightning/commit/f87eeec)), closes [#168](https://github.com/ng-lightning/ng-lightning/issues/168)
* **pick:** emit on `nglOptionDestroyed` when a selected option is "destroyed" ([65546e9](https://github.com/ng-lightning/ng-lightning/commit/65546e9)), closes [#156](https://github.com/ng-lightning/ng-lightning/issues/156)
* **popovers:** reposition generated popover after it's view initialized ([ae5a825](https://github.com/ng-lightning/ng-lightning/commit/ae5a825)), closes [#151](https://github.com/ng-lightning/ng-lightning/issues/151)


### Features

* **icons:** expose `svg[nglIcon]` component for increased flexibility ([e942ff1](https://github.com/ng-lightning/ng-lightning/commit/e942ff1)), closes [#161](https://github.com/ng-lightning/ng-lightning/issues/161)
* **lookups:** add search icon option ([63867ba](https://github.com/ng-lightning/ng-lightning/commit/63867ba)), closes [#162](https://github.com/ng-lightning/ng-lightning/issues/162)
* **lookups:** support polymorphic variation ([8249715](https://github.com/ng-lightning/ng-lightning/commit/8249715)), closes [#139](https://github.com/ng-lightning/ng-lightning/issues/139) [#165](https://github.com/ng-lightning/ng-lightning/issues/165)
* **menus:** add picklist component ([2482ebe](https://github.com/ng-lightning/ng-lightning/commit/2482ebe)), closes [#158](https://github.com/ng-lightning/ng-lightning/issues/158)
* **menus:** support picklist filter ([9cf07a7](https://github.com/ng-lightning/ng-lightning/commit/9cf07a7)), closes [#175](https://github.com/ng-lightning/ng-lightning/issues/175)
* **modals:** support directional footer ([6bf0d2d](https://github.com/ng-lightning/ng-lightning/commit/6bf0d2d)), closes [#172](https://github.com/ng-lightning/ng-lightning/issues/172)
* **modals:** support empty header ([723b563](https://github.com/ng-lightning/ng-lightning/commit/723b563)), closes [#169](https://github.com/ng-lightning/ng-lightning/issues/169)
* **modals:** support removed footer ([f88cbbd](https://github.com/ng-lightning/ng-lightning/commit/f88cbbd)), closes [#173](https://github.com/ng-lightning/ng-lightning/issues/173) [#174](https://github.com/ng-lightning/ng-lightning/issues/174)


### BREAKING CHANGES

* modals: modal footer is inside <template ngl-modal-footer>

  Before:

  ```html
  <ngl-modal>
    ...
    <button>Cancel</button>
    <button>Submit</button>
  </ngl-modal>
  ```

  After:

  ```html
  <ngl-modal>
    ...
    <template ngl-modal-footer>
      <button>Cancel</button>
      <button>Submit</button>
    </template>
  </ngl-modal>
  ```



<a name="0.16.0"></a>
# [0.16.0](https://github.com/ng-lightning/ng-lightning/compare/v0.15.0...v0.16.0) (2016-07-13)


### Bug Fixes

* **app:** export INglDatatableSort ([d4e26dc](https://github.com/ng-lightning/ng-lightning/commit/d4e26dc)), closes [#147](https://github.com/ng-lightning/ng-lightning/issues/147)
* **app:** use `NGL_PRECOMPILE` for precompiled directives ([6a3ba50](https://github.com/ng-lightning/ng-lightning/commit/6a3ba50)), closes [#148](https://github.com/ng-lightning/ng-lightning/issues/148)
* **datatables:** only render cell templates when needed ([6041743](https://github.com/ng-lightning/ng-lightning/commit/6041743)), closes [#149](https://github.com/ng-lightning/ng-lightning/issues/149)


### BREAKING CHANGES

* app: Add `NGL_PRECOMPILE` on your root component of your application.

  ```js
  import {NGL_DIRECTIVES, NGL_PRECOMPILE} from 'ng-lightning/ng-lightning';

  @Component({
    ...
    precompile: [NGL_PRECOMPILE],
    ...
  })
  export class App {
    ...
  }
  ```



<a name="0.15.0"></a>
# [0.15.0](https://github.com/ng-lightning/ng-lightning/compare/v0.14.0...v0.15.0) (2016-07-12)


### Bug Fixes

* **datatables:** don't force `slds-truncate` on each cell ([3c3bcaa](https://github.com/ng-lightning/ng-lightning/commit/3c3bcaa))


### Features

* **datatables:** support user defined cell classes per column ([071f614](https://github.com/ng-lightning/ng-lightning/commit/071f614)), closes [#144](https://github.com/ng-lightning/ng-lightning/issues/144)



<a name="0.14.0"></a>
# [0.14.0](https://github.com/ng-lightning/ng-lightning/compare/v0.13.1...v0.14.0) (2016-07-11)


### Features

* **app:** add datatable component ([d5e56bc](https://github.com/ng-lightning/ng-lightning/commit/d5e56bc)), closes [#140](https://github.com/ng-lightning/ng-lightning/issues/140)
* **app:** upgrade Angular 2 to rc.4 ([208a755](https://github.com/ng-lightning/ng-lightning/commit/208a755)), closes [#138](https://github.com/ng-lightning/ng-lightning/issues/138)
* **datables:** add sorting ([8bab4af](https://github.com/ng-lightning/ng-lightning/commit/8bab4af)), closes [#142](https://github.com/ng-lightning/ng-lightning/issues/142)
* **paginations:** `exportAs` starting and ending row index ([8ba2107](https://github.com/ng-lightning/ng-lightning/commit/8ba2107)), closes [#141](https://github.com/ng-lightning/ng-lightning/issues/141)
* **popovers:** support string as content ([76c956f](https://github.com/ng-lightning/ng-lightning/commit/76c956f)), closes [#143](https://github.com/ng-lightning/ng-lightning/issues/143)



<a name="0.13.1"></a>
## [0.13.1](https://github.com/ng-lightning/ng-lightning/compare/v0.13.0...v0.13.1) (2016-06-23)


### Bug Fixes

* **popovers:** always run change detection on creation ([a5b54f9](https://github.com/ng-lightning/ng-lightning/commit/a5b54f9)), closes [#134](https://github.com/ng-lightning/ng-lightning/issues/134)
* **popovers:** specify absolute position with bigger specificity ([6c8c825](https://github.com/ng-lightning/ng-lightning/commit/6c8c825))



<a name="0.13.0"></a>
# [0.13.0](https://github.com/ng-lightning/ng-lightning/compare/v0.12.1...v0.13.0) (2016-06-23)


### Bug Fixes

* **popover:** ensure that a position call happens after layouts have finished ([74e5ba7](https://github.com/ng-lightning/ng-lightning/commit/74e5ba7))


### Features

* **popover:** add `nglPopoverBehavior` to handle common open/hide events ([ff3883b](https://github.com/ng-lightning/ng-lightning/commit/ff3883b)), closes [#133](https://github.com/ng-lightning/ng-lightning/issues/133)



<a name="0.12.1"></a>
## [0.12.1](https://github.com/ng-lightning/ng-lightning/compare/v0.12.0...v0.12.1) (2016-06-17)



<a name="0.12.0"></a>
# [0.12.0](https://github.com/ng-lightning/ng-lightning/compare/v0.11.1...v0.12.0) (2016-06-17)


### Bug Fixes

* **NglBreadcrumbs:** make breadcrumbs markup compatible with v2.0 ([8377b5e](https://github.com/ng-lightning/ng-lightning/commit/8377b5e))
* **NglIcon:** make custom icons compatible with v2.0 ([d5bac96](https://github.com/ng-lightning/ng-lightning/commit/d5bac96))
* **NglLookup:** make lookup markup compatible with v2.0 ([bc653dd](https://github.com/ng-lightning/ng-lightning/commit/bc653dd))
* **NglPill:** make compatible with v2.0 ([d5f0434](https://github.com/ng-lightning/ng-lightning/commit/d5f0434)), closes [#122](https://github.com/ng-lightning/ng-lightning/issues/122)


### Features

* **app:** support alternate radio & checkbox group component ([278f97e](https://github.com/ng-lightning/ng-lightning/commit/278f97e)), closes [#123](https://github.com/ng-lightning/ng-lightning/issues/123)
* **app:** upgrade SLDS to v2.0 ([91502ea](https://github.com/ng-lightning/ng-lightning/commit/91502ea))
* **forms:** support `<template>` element as label ([f9d85b5](https://github.com/ng-lightning/ng-lightning/commit/f9d85b5)), closes [#127](https://github.com/ng-lightning/ng-lightning/issues/127)
* **lookup:** support custom item template for results ([3732a5a](https://github.com/ng-lightning/ng-lightning/commit/3732a5a)), closes [#66](https://github.com/ng-lightning/ng-lightning/issues/66) [#130](https://github.com/ng-lightning/ng-lightning/issues/130)


### BREAKING CHANGES

* app: `ngl-form-group-element` should be added as attribute on a `<label>`

  Before:

  ```html
  <ngl-form-group-element>...</ngl-form-group-element>
  ```

  After:
  ```html
  <label ngl-form-group-element>...</label>
  ```
* NglPill: `ngl-pill` is now an element instead of attribute and `<a>` moved inside content

  Before:

  ```html
  <a href="..." nglPill>
    <ngl-icon nglPillImage></ngl-icon>With icon
  </a>
  ```

  After:
  ```html
  <ngl-pill>
    <ngl-icon nglPillImage></ngl-icon>
    <a href="...">With icon</a>
  </ngl-pill>
  ```



<a name="0.11.1"></a>
## [0.11.1](https://github.com/ng-lightning/ng-lightning/compare/v0.11.0...v0.11.1) (2016-06-08)


### Bug Fixes

* **NglFormElement:** don't let form directives leak on whole app ([4be0c3c](https://github.com/ng-lightning/ng-lightning/commit/4be0c3c)), closes [#120](https://github.com/ng-lightning/ng-lightning/issues/120)



<a name="0.11.0"></a>
# [0.11.0](https://github.com/ng-lightning/ng-lightning/compare/v0.10.1...v0.11.0) (2016-06-07)


### Bug Fixes

* **util:** namespace automatically generated IDs ([3ca0956](https://github.com/ng-lightning/ng-lightning/commit/3ca0956))


### Features

* **app:** add checkbox form component ([b7a4673](https://github.com/ng-lightning/ng-lightning/commit/b7a4673)), closes [#115](https://github.com/ng-lightning/ng-lightning/issues/115)
* **app:** add input form component ([f159037](https://github.com/ng-lightning/ng-lightning/commit/f159037)), closes [#112](https://github.com/ng-lightning/ng-lightning/issues/112)
* **app:** add radio & checkbox group component ([5b306ec](https://github.com/ng-lightning/ng-lightning/commit/5b306ec)), closes [#117](https://github.com/ng-lightning/ng-lightning/issues/117)
* **app:** add select form component ([5489cb6](https://github.com/ng-lightning/ng-lightning/commit/5489cb6)), closes [#114](https://github.com/ng-lightning/ng-lightning/issues/114)
* **app:** add textarea form component ([9d14331](https://github.com/ng-lightning/ng-lightning/commit/9d14331)), closes [#113](https://github.com/ng-lightning/ng-lightning/issues/113)



<a name="0.10.1"></a>
## [0.10.1](https://github.com/ng-lightning/ng-lightning/compare/v0.10.0...v0.10.1) (2016-06-01)


### Bug Fixes

* **build:** define `ts-helpers` as dependency ([7a5bde3](https://github.com/ng-lightning/ng-lightning/commit/7a5bde3))
* **NglPopover:** explicitly destroy popover when host is destroyed ([fb4f325](https://github.com/ng-lightning/ng-lightning/commit/fb4f325)), closes [#111](https://github.com/ng-lightning/ng-lightning/issues/111)



<a name="0.10.0"></a>
# [0.10.0](https://github.com/ng-lightning/ng-lightning/compare/v0.9.0...v0.10.0) (2016-05-30)


### Bug Fixes

* **NglDatepicker:** input/output Date object instead of string ([aec4e07](https://github.com/ng-lightning/ng-lightning/commit/aec4e07))
* **NglPopover:** fix memory leak when hiding ([b869c03](https://github.com/ng-lightning/ng-lightning/commit/b869c03)), closes [#107](https://github.com/ng-lightning/ng-lightning/issues/107)


### Features

* **app:** add datepicker component ([c77afde](https://github.com/ng-lightning/ng-lightning/commit/c77afde)), closes [#86](https://github.com/ng-lightning/ng-lightning/issues/86)
* **NglDatepicker:** add option to show "Today" button ([c26bdf4](https://github.com/ng-lightning/ng-lightning/commit/c26bdf4)), closes [#108](https://github.com/ng-lightning/ng-lightning/issues/108)
* **NglPopover:** support reusable `<template>` elements ([6b49cc0](https://github.com/ng-lightning/ng-lightning/commit/6b49cc0)), closes [#106](https://github.com/ng-lightning/ng-lightning/issues/106)


### Performance Improvements

* **NglBreadcrumbs:** use `onPush` as change detection strategy ([3d9053f](https://github.com/ng-lightning/ng-lightning/commit/3d9053f))
* **NglPill:** use `onPush` as change detection strategy ([e0fb26c](https://github.com/ng-lightning/ng-lightning/commit/e0fb26c)), closes [#104](https://github.com/ng-lightning/ng-lightning/issues/104)


### BREAKING CHANGES

* NglPopover:   
  * `nglPopoverTrigger` renamed to `nglPopover`
  * `nglPlacement` renamed to `nglPopoverPlacement`
  * Theme and tooltip declarations are now input of `nglPopover`

  Before:

  ```html
  <ngl-popover #tip theme="success">my text</ngl-popover>
  <span [nglPopoverTrigger]="tip" [nglPlacement]="placement" ...>here</span>
  ```

  After:
  ```html
  <template #tip>my text</template>
  <span [nglPopover]="tip" [nglPopoverPlacement]="placement" nglPopoverTheme="success" ...>here</span>
  ```



<a name="0.9.0"></a>
# [0.9.0](https://github.com/ng-lightning/ng-lightning/compare/v0.8.0...v0.9.0) (2016-05-20)


### Bug Fixes

* **NglPagination:** add `trackBy` on page elements ([0491b1e](https://github.com/ng-lightning/ng-lightning/commit/0491b1e)), closes [#98](https://github.com/ng-lightning/ng-lightning/issues/98)
* **NglPagination:** don't keep internal state of current page ([87eb763](https://github.com/ng-lightning/ng-lightning/commit/87eb763)), closes [#93](https://github.com/ng-lightning/ng-lightning/issues/93)


### Features

* **build:** improve SystemJS bundle size ([91f9d54](https://github.com/ng-lightning/ng-lightning/commit/91f9d54)), closes [#89](https://github.com/ng-lightning/ng-lightning/issues/89)
* **NglPagination:** support always visible boundary numbers ([ede3bf1](https://github.com/ng-lightning/ng-lightning/commit/ede3bf1)), closes [#92](https://github.com/ng-lightning/ng-lightning/issues/92)
* **NglPagination:** support First/Last buttons ([6d04c1b](https://github.com/ng-lightning/ng-lightning/commit/6d04c1b)), closes [#95](https://github.com/ng-lightning/ng-lightning/issues/95)
* **NglTabs:** support more verbose syntax for "richer" heading ([c195d52](https://github.com/ng-lightning/ng-lightning/commit/c195d52)), closes [#103](https://github.com/ng-lightning/ng-lightning/issues/103)


### BREAKING CHANGES

* NglTabs: `nglTabId` is now a separate input

  Before:

  ```html
  <template ngl-tab="myid" ...></template>
  ```

  After:
  ```html
  <template ngl-tab nglTabId="myid" ...></template>
  ```



<a name="0.8.0"></a>
# [0.8.0](https://github.com/ng-lightning/ng-lightning/compare/v0.7.0...v0.8.0) (2016-05-12)


### Bug Fixes

* **build:** import from `rxjs/Rx` to avoid SystemJS issues ([2cd7f96](https://github.com/ng-lightning/ng-lightning/commit/2cd7f96)), closes [#80](https://github.com/ng-lightning/ng-lightning/issues/80)


### Features

* **NglLookup:** support single selection ([b5f1013](https://github.com/ng-lightning/ng-lightning/commit/b5f1013)), closes [#79](https://github.com/ng-lightning/ng-lightning/issues/79)
* **NglTab:** add `exportAs` ([f63646b](https://github.com/ng-lightning/ng-lightning/commit/f63646b)), closes [#84](https://github.com/ng-lightning/ng-lightning/issues/84)
* **NglTab:** support template as heading ([93fa880](https://github.com/ng-lightning/ng-lightning/commit/93fa880)), closes [#85](https://github.com/ng-lightning/ng-lightning/issues/85)


### BREAKING CHANGES

* NglLookup: `pick` is now two way binded

  Before:

  ```html
  <ngl-lookup (pick)="selected = $event" ...></ngl-lookup>
  ```

  After:
  ```html
  <ngl-lookup [(pick)]="selected" ...></ngl-lookup>
  ```



<a name="0.7.0"></a>
# [0.7.0](https://github.com/ng-lightning/ng-lightning/compare/v0.6.0...v0.7.0) (2016-04-19)


### Bug Fixes

* **app:** deprecate `ngl-icon-button` in favour of `ngl-icon` ([339f867](https://github.com/ng-lightning/ng-lightning/commit/339f867)), closes [#70](https://github.com/ng-lightning/ng-lightning/issues/70)
* **nglPillImage:** handle `ngl-icon` and `ngl-avatar` ([4be9e09](https://github.com/ng-lightning/ng-lightning/commit/4be9e09)), closes [#74](https://github.com/ng-lightning/ng-lightning/issues/74)

### Code Refactoring

* **NglIcon:** move sprite definition into component from `NglConfig` ([62c3eec](https://github.com/ng-lightning/ng-lightning/commit/62c3eec))

### Features

* **app:** add notification component ([2b94946](https://github.com/ng-lightning/ng-lightning/commit/2b94946)), closes [#65](https://github.com/ng-lightning/ng-lightning/issues/65)
* **NglIcon:** support all available sprites ([04e6f64](https://github.com/ng-lightning/ng-lightning/commit/04e6f64)), closes [#73](https://github.com/ng-lightning/ng-lightning/issues/73)
* **NglNotification:** add timeout support ([78e0e6b](https://github.com/ng-lightning/ng-lightning/commit/78e0e6b)), closes [#75](https://github.com/ng-lightning/ng-lightning/issues/75)


### BREAKING CHANGES

* NglIcon: Don't include `utility-sprite` into `svgPath` of `NglConfig`
* app: Rename `<ngl-icon-button>` to `<ngl-icon>`

  Before:

  ```html
  <ngl-icon-button icon="add" ...></ngl-icon-button>
  ```

  After:
  ```html
  <ngl-icon icon="add" ...></ngl-icon>
  ```



<a name="0.6.0"></a>
# [0.6.0](https://github.com/ng-lightning/ng-lightning/compare/v0.5.0...v0.6.0) (2016-04-11)


### Bug Fixes

* **NglDropdown:** apply picklist styles if used in conjunction with `nglPick` ([36302b2](https://github.com/ng-lightning/ng-lightning/commit/36302b2)), closes [#64](https://github.com/ng-lightning/ng-lightning/issues/64)
* **NglIcon:** provide a way to omit default text type ([9428d56](https://github.com/ng-lightning/ng-lightning/commit/9428d56)), closes [#58](https://github.com/ng-lightning/ng-lightning/issues/58) [#61](https://github.com/ng-lightning/ng-lightning/issues/61)
* **NglPill:** existence of `nglPillRemove` determines removability ([1095a26](https://github.com/ng-lightning/ng-lightning/commit/1095a26)), closes [#63](https://github.com/ng-lightning/ng-lightning/issues/63)

### Features

* **app:** add pill component ([f922e09](https://github.com/ng-lightning/ng-lightning/commit/f922e09)), closes [#50](https://github.com/ng-lightning/ng-lightning/issues/50) [#59](https://github.com/ng-lightning/ng-lightning/issues/59)



<a name="0.5.0"></a>
# [0.5.0](https://github.com/ng-lightning/ng-lightning/compare/v0.4.0...v0.5.0) (2016-04-07)


### Bug Fixes

* **NglPick:** change `activeClass` to `nglPickActiveClass` and support on `nglPick` ([9837f6f](https://github.com/ng-lightning/ng-lightning/commit/9837f6f))
* **NglRating:** prevent icons from wrapping ([664e595](https://github.com/ng-lightning/ng-lightning/commit/664e595))

### Features

* **app:** add lookup component ([c4ea74e](https://github.com/ng-lightning/ng-lightning/commit/c4ea74e)), closes [#48](https://github.com/ng-lightning/ng-lightning/issues/48)
* **demo:** add a picklist example inside menus ([14ebd03](https://github.com/ng-lightning/ng-lightning/commit/14ebd03)), closes [#51](https://github.com/ng-lightning/ng-lightning/issues/51) [#57](https://github.com/ng-lightning/ng-lightning/issues/57)
* **NglLookup:** support aria attributes and keyboard selection ([28a0ad6](https://github.com/ng-lightning/ng-lightning/commit/28a0ad6)), closes [#53](https://github.com/ng-lightning/ng-lightning/issues/53)
* **NglPickOption:** add `exportAs` ([8314999](https://github.com/ng-lightning/ng-lightning/commit/8314999)), closes [#56](https://github.com/ng-lightning/ng-lightning/issues/56)
* **NglPickOption:** add aria role and keyboard interaction ([add94a1](https://github.com/ng-lightning/ng-lightning/commit/add94a1)), closes [#55](https://github.com/ng-lightning/ng-lightning/issues/55)
* **NglRating:** support custom size ([c4b7abd](https://github.com/ng-lightning/ng-lightning/commit/c4b7abd)), closes [#47](https://github.com/ng-lightning/ng-lightning/issues/47)


### BREAKING CHANGES

* NglPick:   Before:

  ```html
  <div [(nglPick)]="selected">
    ...
    <button type="button" nglPickOption="..." activeClass="custom-class"></button>
  ```

  After:
  ```html
  <div [(nglPick)]="selected" nglPickActiveClass="slds-button--brand">
    ...
    <button type="button" nglPickOption="..." nglPickActiveClass="custom-class"></button>
  </div>
  ```



<a name="0.4.0"></a>
# [0.4.0](https://github.com/ng-lightning/ng-lightning/compare/v0.3.0...v0.4.0) (2016-03-30)


### Bug Fixes

* **NglBreadcrumbs:** support `aria-labelledby` for assistive text ([0167009](https://github.com/ng-lightning/ng-lightning/commit/0167009))
* **nglDropdown:** set class `slds-dropdown-trigger--click` ([421a8f4](https://github.com/ng-lightning/ng-lightning/commit/421a8f4)), closes [#37](https://github.com/ng-lightning/ng-lightning/issues/37)
* **nglPick:** use `nglPick` instead of `selected` ([7549bb2](https://github.com/ng-lightning/ng-lightning/commit/7549bb2))
* **NglTabs:** prevent default window scrolling on arrow keys press ([7cda810](https://github.com/ng-lightning/ng-lightning/commit/7cda810)), closes [#43](https://github.com/ng-lightning/ng-lightning/issues/43)

### Features

* **app:** add breadcrumbs component ([ad11599](https://github.com/ng-lightning/ng-lightning/commit/ad11599)), closes [#24](https://github.com/ng-lightning/ng-lightning/issues/24) [#34](https://github.com/ng-lightning/ng-lightning/issues/34)
* **app:** add button group component ([69ee128](https://github.com/ng-lightning/ng-lightning/commit/69ee128))
* **app:** add section component ([ffaf227](https://github.com/ng-lightning/ng-lightning/commit/ffaf227))
* **NglPick:** support multiple selection ([fecb4ee](https://github.com/ng-lightning/ng-lightning/commit/fecb4ee)), closes [#42](https://github.com/ng-lightning/ng-lightning/issues/42) [#45](https://github.com/ng-lightning/ng-lightning/issues/45)
* **nglPopover:** add `theme` as input ([aafb713](https://github.com/ng-lightning/ng-lightning/commit/aafb713)), closes [#39](https://github.com/ng-lightning/ng-lightning/issues/39)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/ng-lightning/ng-lightning/compare/v0.2.0...v0.3.0) (2016-03-22)


### Bug Fixes

* **demo:** properly highlight html language ([ebd8bdb](https://github.com/ng-lightning/ng-lightning/commit/ebd8bdb))
* **nglButtonIcon:** default class is not removed ([77466b3](https://github.com/ng-lightning/ng-lightning/commit/77466b3)), closes [#22](https://github.com/ng-lightning/ng-lightning/issues/22) [#23](https://github.com/ng-lightning/ng-lightning/issues/23)
* **nglModal:** support `aria-labelledby` to the modal’s heading ([607a92e](https://github.com/ng-lightning/ng-lightning/commit/607a92e)), closes [#35](https://github.com/ng-lightning/ng-lightning/issues/35)
* **nglPopover:** position call happens after all layouts have finished ([8834564](https://github.com/ng-lightning/ng-lightning/commit/8834564)), closes [#33](https://github.com/ng-lightning/ng-lightning/issues/33)
* **nglSpinner:** make container class configurable instead of required ([1175645](https://github.com/ng-lightning/ng-lightning/commit/1175645)), closes [#32](https://github.com/ng-lightning/ng-lightning/issues/32)

### Features

* **app:** add dropdowns component ([7c6b155](https://github.com/ng-lightning/ng-lightning/commit/7c6b155)), closes [#12](https://github.com/ng-lightning/ng-lightning/issues/12)
* **app:** add popovers component ([9a9b8e5](https://github.com/ng-lightning/ng-lightning/commit/9a9b8e5)), closes [#27](https://github.com/ng-lightning/ng-lightning/issues/27)
* **build:** add systemjs bundle to distribution ([a2d2b99](https://github.com/ng-lightning/ng-lightning/commit/a2d2b99))
* **build:** integrate with Saucelabs for testing ([f2272d4](https://github.com/ng-lightning/ng-lightning/commit/f2272d4))
* **demo:** add live edit button ([f7f8855](https://github.com/ng-lightning/ng-lightning/commit/f7f8855)), closes [#10](https://github.com/ng-lightning/ng-lightning/issues/10)
* **nglIcon:** ability to specify extra classes for SVG ([f8baa0b](https://github.com/ng-lightning/ng-lightning/commit/f8baa0b)), closes [#28](https://github.com/ng-lightning/ng-lightning/issues/28) [#31](https://github.com/ng-lightning/ng-lightning/issues/31)
* **util:** support generation of unique IDs ([afe628d](https://github.com/ng-lightning/ng-lightning/commit/afe628d))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/ng-lightning/ng-lightning/compare/v0.1.0...v0.2.0) (2016-03-10)


### Bug Fixes

* **buttons:** don't use default class when value is empty or not set ([66a8237](https://github.com/ng-lightning/ng-lightning/commit/66a8237)), closes [#3](https://github.com/ng-lightning/ng-lightning/issues/3)
* **NGL_CONFIG:** relative path for SVG to use application's `<base>` ([e465d69](https://github.com/ng-lightning/ng-lightning/commit/e465d69))

### Features

* **app:** add avatar component ([6b24956](https://github.com/ng-lightning/ng-lightning/commit/6b24956)), closes [#6](https://github.com/ng-lightning/ng-lightning/issues/6)
* **app:** add pagination component ([66d82cf](https://github.com/ng-lightning/ng-lightning/commit/66d82cf))
* **app:** add rating component ([f2623cc](https://github.com/ng-lightning/ng-lightning/commit/f2623cc)), closes [#8](https://github.com/ng-lightning/ng-lightning/issues/8)
* **build:** make logging level while testing configurable ([b23fb91](https://github.com/ng-lightning/ng-lightning/commit/b23fb91)), closes [#5](https://github.com/ng-lightning/ng-lightning/issues/5) [#7](https://github.com/ng-lightning/ng-lightning/issues/7)
* **config:** use `provideNglConfig` to hide bootstrapping complexity ([5b1b1ec](https://github.com/ng-lightning/ng-lightning/commit/5b1b1ec))


### BREAKING CHANGES

* config: Use `provideNglConfig` instead of `NGL_CONFIG`.

  Before:

  ```js
  import {NGL_CONFIG} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provide(NGL_CONFIG, {useValue: {}}),
    ...
  ]);
  ```

  After:

  ```js
  import {provideNglConfig} from 'ng-lightning/ng-lightning';

  bootstrap(App, [
    provideNglConfig({...}),
    ...
  ]);
  ```



<a name="0.1.0"></a>
# [0.1.0](https://github.com/ng-lightning/ng-lightning/compare/f2bbc41...v0.1.0) (2016-03-04)


### Features

* **app:** add badge component ([e67741c](https://github.com/ng-lightning/ng-lightning/commit/e67741c))
* **app:** add button components ([4045bd3](https://github.com/ng-lightning/ng-lightning/commit/4045bd3))
* **app:** add icon component ([527b24f](https://github.com/ng-lightning/ng-lightning/commit/527b24f))
* **app:** add modal component ([c34019e](https://github.com/ng-lightning/ng-lightning/commit/c34019e))
* **app:** add tabs/tab components ([f2bbc41](https://github.com/ng-lightning/ng-lightning/commit/f2bbc41))
* **app:** add spinner component ([8cfd811](https://github.com/ng-lightning/ng-lightning/commit/8cfd811))
