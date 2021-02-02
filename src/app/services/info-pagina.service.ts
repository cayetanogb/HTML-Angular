import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargarda = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {
    
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargarda = true;
        this.info = resp;
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-html-daa7a-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
        console.log(resp);
      });
  }

}
