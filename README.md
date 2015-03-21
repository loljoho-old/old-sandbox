# sandbox

> A figurative container that would likely be rigid and rectangular if it were tangible, which contains mineral grains of a small size.
> 
> This repository serves as an environment in which untested or experimental code may reside in isolation from, and innocuous to, certain areas of sensitivity, e.g.:
> 
>    * Live servers, the applications they utilise, and the data they manipulate.
>    * Code repositories, vetted distributions, etc.
>  
> Generally speaking, this encompasses nearly any collection of code, content, and/or data that, if damaged, carries a great weight of hindrance towards reverting the software back to a prior, functioning stage.


## History

**New sections must only be created when one of the following occurs:**

 * Incremented `MINOR` or `MAJOR` version number:
      * `v0.4.3 -> v0.5.0`
      * `v1.9.3 -> v2.0.0`
 * Significant change in pre-release modifier:
      * `v1.0.0-beta -> v1.0.0-rc.1`
      * `v1.0.0-rc.2 -> v1.0.0-rc.3`
 * Major `git-branch` modifications on `origin` remote:
      * `git branch -d old-branch`
      * `git checkout -B new-branch`
      * `git merge develop wip-feature`
 
 only do so upon: `minor` or `major` number is incremented; a new pre-release modifier is used when the `major` or `minor` numbers are incremented

### `v0.1.x` (20-Mar-2015)

**Summary**


**Versioning**
 - New branch `develop` from `master`.

**Files**
```
├── app/
│   ├── bower_components/       --> `bower install` dependencies
│   │   ├── angular/
│   │   ├── angular-animate/
│   │   ├── angular-aria/
│   │   ├── angular-material/
│   │   ├── angular-route/
│   │   └── font-awesome/
│   └── 
├── node_modules/               --> `npm install` dependencies
│   ├── 
│   └── bower/
├── .bowerrc                    --> relocate `bower_components/`
├── .gitignore                  --> standard gitignore settings
├── README.md                   --> updated readme markdown file
├── bower.json                  --> bower manifest
├── package.json                --> npm manifest
└── 
```

**Dependencies**
```
$ npm install bower --save-dev
```