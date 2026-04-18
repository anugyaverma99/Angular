import { Component ,EventEmitter,Input, Output} from '@angular/core';


@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  // @Input() name='default';
  //  @Input() gender='male';
  // @Input() age=0;

   @Input() userDetails:any;


  // constructor(){
  //   // values are not injected till now so default values will be shown 
  //   console.log("in constructor of user details");
  //   console.log('name',this.name,this.gender,this.age) 
  // }
  // ngOnInit(){
  //   // here values are injected so updated values are shown not default ones
  //   console.log("in ngOnInit of user details");
  //   console.log('name',this.name,this.gender,this.age)
  // }

  
 isListView=false;
isCardView=false;
cardView(){
  this.isCardView=true;
  this.isListView=false;
}
listView(){
   this.isCardView=false;
  this.isListView=true;
}
@Output() onupdate=new EventEmitter<any>();
informParents(user:any){
this.onupdate.emit(user);
}

@Output() ondelete=new EventEmitter<any>();
deleteUser(user:any){
  this.ondelete.emit(user)
}
  
}
