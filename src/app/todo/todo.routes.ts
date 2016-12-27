import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TodoComponent } from './todo.component';

export const todoRoutes: Routes = [
    //We are creating an array of routes. 
    //This array of routes forms the navigation for this section of the application.
    {path:'todo', component: TodoComponent},//each route has a path and a component.
    {
        path: '',
        redirectTo: 'todo', //empty path will take requests to todo route
        pathMatch: 'full'
        //The two valid values for 'pathMath' are 'full' and 'prefix'. 
        //Full means the full path must match, 
        //prefix matches only from the beginning of the route.
    }

];