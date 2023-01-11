# ElfBookMng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## create repository by CLI
$ npx @ngneat/elf-cli repo
$ npx @ngneat/elf-cli repo --dry-run

## Cannot find "deploy" target for the specified project.
## You can add a package that implements these capabilities.

For example:
  Amazon S3: ng add @jefiozie/ngx-aws-deploy
  Firebase: ng add @angular/fire
  Netlify: ng add @netlify-builder/deploy
  NPM: ng add ngx-deploy-npm
  GitHub Pages: ng add angular-cli-ghpages
## for CMD
.....
git remote add origin https://github.com/vijaytechved/elf-book-mng.git
............
git clone -b dev https://github.com/vijaytechved/elf-book-mng.git
git clone -b vijay-angular https://github.com/vijaytechved/elf-book-mng.git

## ---------branch name-----------


dev-mayur
dev-anjali
dev-ramakrishna
dev-vijay
dev-dinesh


dev
uat
pre-prod
production

git branch dev-mayur

## ...............merge --..............
git checkout dev
git merge vijay-angular
..................

## ............add-------------
git add .
git add filename
git add --all
------------------------------
git log
-----------------
git status
--------------------------------------

## For git bash
.................
pwd: check currenct dir......
................
## ----compare file
git diff ---123456  --232323---
................
git diff --staged
.................


==========================
## Branches

------------------
1...
dev
uat
Prod
=========================

-----

## git checkout -b branchname direcly switch the branch
===================================

---------------------------
## git tag 

----...git tag -a v1.0 --commit id == -m "fsfdsf"
1.git tag
2. git tag v1.0
3.git tag -a v1.0 -- == -m "fsfdsf"
4.git push origin v1.0

===========================
## git revert changes

git restore filename
rm -rf filename
git checkout --  filename
git reset HEAD^

git add -a -m "dfds"
git rebase -i HEAD-2----- check how how many commets want to show


ng : File C:\Users\TVDMUMVC581\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this         
system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170. FullyQualifiedErrorId : UnauthorizedAccess

## Ans.    
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
## both Routing and Module
ng g m  public-page --routing --flat
ng generate module public-page-routing --flat --module=app

## Did you see any errors after running npm install?

Did you run npm audit fix? Running the fix will cause a mismatch with your versions, so it should not be run.

## Try this:

Delete node_module folder and the package-lock.json file.
Run npm cache verify to verify and clean up your npm.
Run npm install again. (Do NOT run npm audit fix)
Run npm start

## Suggests trying:

npm install --force
npm install --legacy-peer-deps