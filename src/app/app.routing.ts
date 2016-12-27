import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { todoRoutes } from './todo/todo.routes';

const appRoutes: Routes = [
    ...todoRoutes
];

// exports a routing constant. It is initialized by taking the routes that we have specified 
//and passing them to the RouterModule.forRoot method
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);