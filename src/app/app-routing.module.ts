import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { LoginGuard } from './login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component:LibraryComponent,
    pathMatch:'full'
  },
  {
    path:'library',
    component:LibraryComponent
  },
  
  {
    path:'book-list',
    component:BookListComponent,
    canActivate:[LoginGuard],
    data: {role:["login"]}
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
