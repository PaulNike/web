import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../../providers/lugares.service';
import { Result } from 'src/app/pages/lugares/models/lugares.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  id: string;
  lugar:Result;
  loading=true;
 
   constructor(private activedRoute:ActivatedRoute,private lugarServicio:LugaresService) { 
      this.activedRoute.params.subscribe(
        params=>{
          this.id=params['id'].toString();
       }
      );
      this.cargarLugar(this.id);
      this.loading=false;
   }
  ngOnInit(): void {
    
  }
 
   cargarLugar(id:string){
       this.lugarServicio.getLugar(id).subscribe(
         result=>{
           this.lugar=result;
         }
       )
   }
}
