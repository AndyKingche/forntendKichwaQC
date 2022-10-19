import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpeechComponent } from './components/speech/speech.component';
import { DetailsComponent } from './components/details/details.component';
import { TraductorComponent } from './components/traductor/traductor.component';
import { TraductorFormComponent } from './components/traductor-form/traductor-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpeechComponent,
    DetailsComponent,
    TraductorComponent,
    TraductorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
