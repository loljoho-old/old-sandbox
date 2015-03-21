# `sandbox/app/README.md` #

## Overview ##

A simple AngularJS application based on angular-material, featuring:

Style

 - [ ] Palette generators for custom colours.
 - [ ] Integration with Font-Awesome

Layout

 - [ ] Centre Sheet
 - [ ] Other different Material Design responsive layouts...

Components

 - [ ] Toolbar Tools/Items
 - [ ] Breadcrumbs

Modifications and Snippets

 - [ ] `md-sidenav` flex

## FILE STRUCTURE ##
```
├── app/
│   ├── bower_components/       --> `bower install` dependencies
│   │   ├── angular/
│   │   ├── angular-animate/
│   │   ├── angular-aria/
│   │   ├── angular-material/
│   │   ├── angular-route/
│   │   └── font-awesome/
│   ├── fonts/
│   ├── images/
│   ├── scripts/                    --> application script files
│   │   ├── core/                   --> Core Shared Module
│   │   │   ├── core.module.js      --> module app.core
│   │   │   ├── core.service.js     --> factory Core
│   │   │   ├── core.themes.js      --> config Themes
│   │   │   └── 
│   │   ├── view/                   --> View Shared Module
│   │   │   ├── view.module.js      --> module app.view
│   │   │   ├── view.ctrl.js        --> controller ViewCtrl as vm
│   │   │   └── 
│   │   ├── 
│   │   ├── app.module.js           --> Main App Module
│   │   └── 
│   ├── styles/
│   │   ├── components/             --> css preprocessor files 
│   │   └── 
│   ├── app.js
│   └── 
├── ...
└── ...
```