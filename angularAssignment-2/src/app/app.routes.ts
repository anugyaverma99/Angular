import { Routes } from '@angular/router';
import { Userlistjson } from './userlistjson/userlistjson';
import { Home } from './components/home/home';
import { FruitList } from './components/fruit-list/fruit-list';
import { CustomerList } from './components/customer-list/customer-list';
import { LaptopDetails } from './components/laptop-details/laptop-details';
import { TripDetails } from './components/trip-details/trip-details';
import { TemplateDrivenForm } from './components/template-driven-form/template-driven-form';
import { TrainingData } from './components/training-data/training-data';

export const routes: Routes = [
    // {path:'userlistjson',component:Userlistjson}
    {path:'home',component:Home},
    {path:'fruitList',component:FruitList},
    {path:'tripDetails',component:TripDetails},
    {path:'trainingDetailsForm',component:TemplateDrivenForm},
    {path :'trainingData',component:TrainingData}

];
