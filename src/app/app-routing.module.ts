import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarNaipeComponent } from './components/mostrar-naipe/mostrar-naipe.component';

const routes: Routes = [
  { path: 'home', component: MostrarNaipeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
