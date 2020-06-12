import { Component, OnInit } from '@angular/core';
import { LugaresService } from '../../providers/lugares.service';
import { Result } from '../../models/lugares.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  lugares: Result[] = []
  constructor(private lugaresServices: LugaresService) { }

  ngOnInit(): void {
    this.cargarLugares();
  }

  cargarLugares() {
    this.lugaresServices.getLugares()
    .subscribe(lugares => {
      this.lugares = lugares.results;
    })
  }

}
