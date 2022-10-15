import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //me permite realizar peticiones tipo http
import { Observable } from 'rxjs';
//Agregar el modelo correspondiente al servicio
import { Palabras } from '../models/Palabras';
import { Voice_recognition } from '../models/Voice_reconigtion';

@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor(private http:HttpClient) { }
  

  getVoice(nombre:string){

    return this.http.get(`http://localhost:3000/voice_recognition/${nombre}`);
  }
}
