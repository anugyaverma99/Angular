import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laptop-details',
  imports: [],
  templateUrl: './laptop-details.html',
  styleUrl: './laptop-details.css',
})
export class LaptopDetails {
  @Input() laptopDetails: any
  highlighted=false
  highlight(){
    this.highlighted=!this.highlighted
  }
}
