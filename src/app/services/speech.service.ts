import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {VoiceService} from '../services/voice.service';
import {Respuesta} from '../models/Respuesta';
declare const webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  error = true;
  palabra  :  Respuesta;
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  text = '';
  tempWords: any;

  constructor(private router: Router,private kichwaservice:VoiceService) { }

  init(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'es-ES';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
    });
  }

  start(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', () => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
      } else {
        this.wordConcat();
        this.recognition.start();
        console.log(this.text.trim())
        this.kichwaservice.getVoice(this.text.trim()).subscribe(res=>{
          this.palabra=res[0];
          this.text='La palabra es : ' + this.palabra.palabraespanol
          console.log(this.palabra.palabraespanol)
          
        });
        if (this.text.trim() !== 'Hola') {
          this.stop();
          
          
          this.error = true;
        } else {
          this.stop();
          this.router.navigateByUrl('details');
          window.open('https://www.youtube.com/channel/UCBOEbPRBeq0pJJnUlyNrz2g');
          this.error = true;
        }
      }
    });
  }
  stop(): void {
    this.text = '';
    this.recognition.stop();
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
  }

  wordConcat(): void {
    this.text = this.text + this.tempWords + ' ';
    this.tempWords = ' ';
  }
}
