import { RespostaAPI } from './resposta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {

  constructor(private http: HttpClient) { }


  Obtertodos():Observable <any>{
    let URL= "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";
    return this.http.get(URL);


  }
  //aula 02

  obterpartido(id: string): Observable<any>{
    let URL = `https://dadosabertos.camara.leg.br/api/v2/partidos/${id}`;
    return this.http.get<RespostaAPI>(URL);


  }

  //exercicio
  obterProposicoes(id: string): Observable <RespostaAPI>{
    let URL = `https://dadosabertos.camara.leg.br/api/v2/proposicoes?idDeputadoAutor=${id}&ordem=ASC
    `;
    return this.http.get<RespostaAPI>(URL);
  }

  obterLesgislatura(): Observable <RespostaAPI>{
    let URL = "https://dadosabertos.camara.leg.br/api/v2/legislaturas?ordem=DESC&ordenarPor=id";
    return this.http.get <RespostaAPI>(URL)
  }
}
