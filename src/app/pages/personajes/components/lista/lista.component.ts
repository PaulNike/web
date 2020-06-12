import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../providers/personajes.service';
import { Result } from '../../models/character.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  personajes: Result[] = [];
  countCharacter: number;
  pagina = 1;
  totalPaginas: number;
  arregloPaginas: string[] = [];
  loading = true;
  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  nextPage() {
    this.pagina++;
    this.cargarPersonajes();
  }

  prevPage() {
    this.pagina--;
    this.cargarPersonajes();
  }

  goPage(pagina: string) {
    console.log(+pagina);
    this.pagina = +pagina;
    this.cargarPersonajes();
  }

  generarArregloPaginas() {
    this.arregloPaginas = []
    for(let i = 0; i <= 3; i++) {
      this.arregloPaginas.push((this.pagina + i).toString());
    }
  }

  cargarPersonajes() {
    this.loading = true;
    this.personajeService.getPersonajes(this.pagina.toString())
    .subscribe(character =>
      {
        this.totalPaginas = character.info.pages;
        this.generarArregloPaginas();
        this.countCharacter = character.info.count;
        this.personajes = character.results;
        this.loading = false;
      });
  }

}
