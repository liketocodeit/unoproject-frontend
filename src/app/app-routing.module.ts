import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game-component/game-component.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './homemodule/home.component';


const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home' ,pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
