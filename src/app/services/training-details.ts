import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainingDetails {
  trainingData:any[]=[]
  saveData(data:any){
    
    this.trainingData.push(data);
    

  }
  getData(){
    // console.log("data send from service");
    // console.log(this.trainingData);
    return this.trainingData;
  }

}
