import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { LoginGuard } from './login.guard';
import { ContactUsComponent } from './public-pages/contact-us/contact-us.component';
import { HomeComponent } from './public-pages/home/home.component';
import { ComposeMessageComponent }  from './compose-message/compose-message.component';
import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

import { AuthGuard }                          from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
const appRoutes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  //{ path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // {
  //   path:'**',
  //   component:PageNotFoundComponent,
  //  // redirectTo: ''
  // },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: ()=> import ('./admin/admin.module').then(a=>a.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: ()=> import('./crisis-center/crisis-center.module').then(c=>c.CrisisCenterModule),
    data: { preload: true }
  },
  {
    path:'public-pages',
    loadChildren:()=> import('./public-pages/public-page.module').then(p=>p.PublicPageModule)
  },
  // { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
        preloadingStrategy: SelectivePreloadingStrategyService,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
