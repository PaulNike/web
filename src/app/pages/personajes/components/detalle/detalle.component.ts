import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../providers/personajes.service';
import { Result } from '../../models/character.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  id: string;
  peronsaje: Result
  loading = true;
  locacion:string;

  constructor(private activatedRoue: ActivatedRoute,
              private personajeService: PersonajesService,private router: Router) {
    this.activatedRoue.params.subscribe(params => {
      this.id = params['id'].toString();
      this.cargarPersonaje(this.id);
     
    });

   }
   
  ngOnInit(): void {
  }

  cargarPersonaje(id: string) {
    this.loading = true;
    this.personajeService.getPersonaje(id)
    .subscribe(result => {
      this.peronsaje = result;
      this.locacion=this.peronsaje.location.url.replace("https://rickandmortyapi.com/api/location/", "");
      this.loading = false;
    });
  }
 
  verDetalleLugar(){
   
    this.router.navigateByUrl(`/lugares/detalle/${this.locacion}`);
  }
  

}
