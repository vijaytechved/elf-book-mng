import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { LoginGuard } from './login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './public-pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:PageNotFoundComponent,
    redirectTo: ''
  },
  {
    path: 'user-registration', loadChildren: () => import('src/app/user-registration/user-registration.module').then(m => m.userRegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
