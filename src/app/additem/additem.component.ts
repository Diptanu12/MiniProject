import { Component, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {


  productdata?: Product[]=[]


constructor(){}

tx?:any;
nm?:any;
ty?: any;
qty?:any;
pr?:any;



  storeproduct(){
    this.productdata?.push({
     tx: this.tx,
     nm: this.nm,
     ty: this.ty,
      qty :this.qty,
      pr: this.pr,

      
    })

    
}

deleteProduct(e:any){
  this.productdata?.splice(this.productdata?.indexOf(e),1)
}


}
