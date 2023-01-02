import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BehaviourComponent } from './behaviour/behaviour.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { PipePipe } from './pipe/pipe.pipe';
import { ClassDirective } from './directive/class.directive'
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryComponent,
    PageNotFoundComponent,
    BehaviourComponent,
    UsersComponent,
    PipePipe,
    ClassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
