import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdditemComponent } from './additem/additem.component';
import { HomeComponent } from './home/home.component';
import { MoreBooksComponent } from './more-books/more-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Books', component: BooksComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'additem', component: AdditemComponent },
  {path: 'more-books', component: MoreBooksComponent},
  {path: 'book-details/:id', component: BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
