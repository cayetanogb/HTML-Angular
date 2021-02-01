import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargarda = false;

  constructor(private http: HttpClient) {
    // console.log('Servicio de infoPagina cargada');

    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargarda = true;
        this.info = resp;
        console.log(resp);
      });
  }
}
