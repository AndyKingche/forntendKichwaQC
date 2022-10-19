import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //me permite realizar peticiones tipo http
import { Observable } from 'rxjs';
//Agregar el modelo correspondiente al servicio
import { Palabras } from '../models/Palabras';
import { Voice_recognition } from '../models/Voice_reconigtion';
import {Traductor} from '../models/Traductor';


@Injectable({
  providedIn: 'root'
})
export class VoiceService {

  constructor(private http:HttpClient) { }
  

  getVoice(nombre:string){

    return this.http.get(`http://localhost:3000/voice_recognition/${nombre}`);
  }

  getTraductor(){
    return this.http.get(`http://localhost:3000/translate`);
  }

  getTraductorId(id:number){
    return this.http.get(`http://localhost:3000/translate/${id}`);
  }

  creatreTraductor(traductor:Traductor):Observable<Traductor>
  { 
    return this.http.post(`http://localhost:3000/translate`,traductor);
  }

  updateTraductor(id:number,traductor:Traductor)
  { 
    return this.http.put(`http://localhost:3000/translate/${id}`,traductor);
  }

  deleteTraductor(id:number)
  { 
    return this.http.delete(`http://localhost:3000/translate/${id}`);
  }



}
