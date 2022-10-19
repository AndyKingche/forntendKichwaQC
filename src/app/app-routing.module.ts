import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { SpeechComponent } from './components/speech/speech.component';
import {TraductorComponent} from './components/traductor/traductor.component';
import {TraductorFormComponent} from './components/traductor-form/traductor-form.component';

const routes: Routes = [
  { path: 'speech', component: SpeechComponent },
  { path: 'details', component: DetailsComponent },
  // { path: '/', pathMatch: 'full', redirectTo: 'speech' },
  { path: 'translate', component: TraductorComponent},
  { path: 'translate-form', component: TraductorFormComponent},
  { path: 'translate-form-edit/:id', component: TraductorFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
