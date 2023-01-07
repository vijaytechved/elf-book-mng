import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModuleModule,
    HeroesModule,
    userRegistrationModule,
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
export class AppModule { }
