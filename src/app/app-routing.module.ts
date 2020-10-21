import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaipeComponent } from './components/naipe/naipe.component';
import { MostrarNaipeComponent } from './components/mostrar-naipe/mostrar-naipe.component';
import { DorsoComponent } from './components/dorso/dorso.component';

const routes: Routes = [
  { path: 'home', component: MostrarNaipeComponent },
  { path: 'dorso', component: DorsoComponent },
  { path: 'naipe', component: NaipeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
