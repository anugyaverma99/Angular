import { Component, inject, Input } from '@angular/core';
import { TrainingDetails } from '../../services/training-details';

@Component({
  selector: 'app-training-data',
  imports: [],
  templateUrl: './training-data.html',
  styleUrl: './training-data.css',
})
export class TrainingData {
  @Input() data:any[]=[]

  trainingDetailsData=inject(TrainingDetails);
  ngOnInit(){
    this.data=this.trainingDetailsData.getData();
  }

}
