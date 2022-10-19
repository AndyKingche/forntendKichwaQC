import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Traductor } from '../../models/Traductor';
import { VoiceService } from '../../services/voice.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-traductor-form',
  templateUrl: './traductor-form.component.html',
  styleUrls: ['./traductor-form.component.css']
})
export class TraductorFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  traductor : Traductor={
    id_traductor:0,
    palabraespanol:'',
    palabra_id:0
  };
  edit: boolean = false;
  constructor(private traductorservices:VoiceService, private router: Router,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {

    const params = this.activeroute.snapshot.params;
    console.log(params);
    if(params.id){
      this.traductorservices.getTraductorId(params.id).subscribe(
        (res)=>{
          if(res!= null){
            console.log(res);
            this.traductor = res[0]; 
            this.edit = true;

          }else{
            this.router.navigate(['/translate']);
          }
          
        },
        err => console.log("hay error "+ err)
      )
    }
  }
  
  createTraductor(){
    this.traductorservices.creatreTraductor(this.traductor).subscribe(

      res => {
        console.log("res : "+ res);
        
        this.traductor.palabraespanol=' ';
        this.traductor.palabra_id = 0 ;
     
      },
      err => console.log("err : "+ err)
    );
  }

  updateTraductor(){
    this.traductorservices.updateTraductor(this.traductor.id_traductor,this.traductor).subscribe(

      res => {
        console.log("res : "+ res);
        
        this.traductor.palabraespanol=' ';
        this.traductor.palabra_id = 0 ;
     
      },
      err => console.log("err : "+ err)
    );
  }

}
