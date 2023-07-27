import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdditemComponent } from './additem/additem.component';
import { ListProductComponent } from './list-product/list-product.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MoreBooksComponent } from './more-books/more-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';




@NgModule({
  declarations: [
    AppComponent,
    AdditemComponent,
    ListProductComponent,
     BooksComponent,
     AboutComponent,
     ContactComponent,
     HomeComponent,
     MoreBooksComponent,
     BookDetailsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
