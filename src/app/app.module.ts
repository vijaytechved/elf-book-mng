import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { PipePipe } from './pipe/pipe.pipe';
import { ClassDirective } from './directive/class.directive'
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { MyInterceptorInterceptor } from './interceptor/my-interceptor.interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoginModuleModule } from './modules/login-module/login-module.module';
import { HomeComponent } from './public-pages/home/home.component';
import { ContactUsComponent } from './public-pages/contact-us/contact-us.component';
import { userRegistrationModule } from './user-registration/user-registration.module';
import { HeroesModule } from './heroes/heroes.module';
import { PublicPageModule } from './public-pages/public-page.module';
import { AuthModule }              from './auth/auth.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryComponent,
    PageNotFoundComponent,
    BehaviourComponent,
    UsersComponent,
    PipePipe,
    ClassDirective,
    HomeComponent,
    ContactUsComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesModule,
    AuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
   {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptorInterceptor,
      multi: true
  }
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule {
   // Diagnostic only: inspect router configuration
   constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
