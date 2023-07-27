import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
  providers: [BooksService]
})
export class BookDetailsComponent implements OnInit {

  book?:any;
  bookId?:any;
  RouteParamsObs?: any;


  constructor(private activatedRoute: ActivatedRoute, private Book: BooksService,private router: Router){

}
ngOnInit(): void {
  // this.bookId = this.activatedRoute.snapshot.paramMap.get('id');
  // // // this.book = this.activatedRoute.snapshot.params['id'];
  // this.book= this.Books.books.find(x=> x.id==this.bookId);

  this.RouteParamsObs = this.activatedRoute.paramMap.subscribe((param) => {
    this.bookId = param.get('id');
    this.book = this.Book.books.find((x) => x.id == this.bookId);
  });

}
}
