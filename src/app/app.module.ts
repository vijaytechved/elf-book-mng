import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { LibraryComponent } from './library/library.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BehaviourComponent } from './behaviour/behaviour.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LibraryComponent,
    PageNotFoundComponent,
    BehaviourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
