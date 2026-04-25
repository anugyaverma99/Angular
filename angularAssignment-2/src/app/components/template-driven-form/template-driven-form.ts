import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TrainingDetails } from '../../services/training-details';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  training={ title: '', topic: '', maxTrainees: '', startDate: '', endDate: '', trainerName:'',venue:''} 
  trainingData:any[]=[]
   trainingDetailsData=inject(TrainingDetails)
  onSubmit(trainingDetails:NgForm):any
    {
      console.log(trainingDetails.value);
      this.trainingData.push(this.training);
      console.log(this.trainingData)
      this.trainingDetailsData.saveData(this.training);

  }

  //sending data to parent

  @Output() data=new EventEmitter();
  sendData(){
    this.data.emit(this.trainingData);
  }
 
 
  
}
