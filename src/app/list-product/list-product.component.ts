import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers: [BooksService]
})


export class ListProductComponent {
  @Input() productlist: Product | any
  @Output() book=new EventEmitter<Product>()

  srch?: string| any
  srchdata : Product[]=[]


searchbook(){
  this.srchdata=
this.productlist.filter(
(v:any)=>
v.nm.indexOf(this.srch) !==-1,


)
}

deleteItem(e:any){
  this.book.emit(e);
}

chk(e:any){
console.log(e);
}


}
