import { Component, Input } from '@angular/core';
import { Customer } from './User';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css',
})
export class CustomerList {
  customer:Customer={
    id:0,
    name: '',
    address: '',
    daeOfBirth: '',
    gender: '',
   

  };
  

  @Input() customerData:any;
  
}
