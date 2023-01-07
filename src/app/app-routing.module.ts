import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { LoginGuard } from './login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactUsComponent } from './public-pages/contact-us/contact-us.component';
import { HomeComponent } from './public-pages/home/home.component';

const appRoutes: Routes = [
   {
    path: 'user-registration', loadChildren: () => import('./user-registration/user-registration.module').then(m => m.userRegistrationModule)
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  // {
  //   path:'',
  //   component:HomeComponent,
  //   pathMatch:'full'
  // },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  {
    path:'**',
    component:PageNotFoundComponent,
   // redirectTo: ''
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      //  preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
