import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Book } from '../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers:[BooksService]
})
export class BooksComponent implements OnInit {
constructor(private bookService : BooksService){
  
}

  books : Book[]| any;

  ngOnInit(): void {
    this.books= this.bookService.getbooks();
  }
}
