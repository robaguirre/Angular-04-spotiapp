import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

// Este solo deberia ser el fichero de rutas. El modulo va definido en app.module
export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent },
];

