import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
    {
        path:'',        //route path def
        component: HomeComponent, 
        title: 'Home Page'
    },
    {
        path:'details/:id', //route path def
        component: DetailsComponent, 
        title: 'Details Page'
    }
];

export default routeConfig;
