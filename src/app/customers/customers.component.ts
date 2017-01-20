import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import {Customer} from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {

  customer:Customer = new Customer();

  save(customerForm:NgForm){
    console.log(customerForm);
    console.log('saved: '+ JSON.stringify(customerForm.value));
  }


}
