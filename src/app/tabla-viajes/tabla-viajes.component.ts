import { Component, OnInit } from '@angular/core';
import { Pasajero } from 'src/app/Clase/Pasajero';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentConsultarService } from 'src/app/Servicio/component-consultar-service';

@Component({
  selector: 'app-tabla-viajes',
  templateUrl: './tabla-viajes.component.html',
  styleUrls: ['./tabla-viajes.component.css']
})
export class TablaViajesComponent implements OnInit {

  constructor(private componentConsultarService : ComponentConsultarService,
    private router: Router,
    private rutaA: ActivatedRoute
  ) { }

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'destino', 'fechaViaje', 'editar' ];

  dataSource: Pasajero [] = [];

  viajeNuevo: any;

  ngOnInit(): void {
    this.getPasajero();
  }

  getPasajero() {
    this.componentConsultarService.getPasajero().subscribe((pasajeros) => {
      this.dataSource = pasajeros;
      this.agregarFila();

    });
  }
  agregarFila() {
    this.viajeNuevo = this.rutaA.snapshot.params;
    this.dataSource.push(this.viajeNuevo);
  }
  editar(element){
    this.router.navigate(['/formulario-viajes-component', element])
  }
}
