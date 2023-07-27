import { Component, ViewChild } from '@angular/core';
import { ContactService } from '../list-product/Service/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent {

nm: any;
ph: any;
eml?: any ;
ara?: any ;
@ViewChild('contactForm')form : NgForm | any;

constructor(private contactService: ContactService){

}

onSubmit(){
  alert("Your contact form has been submitted.")
  console.log(this.form)
}
}
