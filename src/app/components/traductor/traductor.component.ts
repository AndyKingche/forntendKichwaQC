import { Component, OnInit } from '@angular/core';
import { Traductor } from '../../models/Traductor';
import { VoiceService } from '../../services/voice.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  traductor : any = [];

  constructor(private traductorservices:VoiceService) { }

  ngOnInit(): void {
    this.getTraductor();
  }

  getTraductor()
  {
    this.traductorservices.getTraductor().subscribe(res=>{
      this.traductor = res
    }, err => console.error(err))
  }

  deleteTraductor(id:number)
  {
    this.traductorservices.deleteTraductor(id).subscribe(
      res=>{
        this.getTraductor();
      },
      err=>console.error(err)
    );

  }

}
