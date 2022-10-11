import { DeputadoService } from './../model/deputado.service';
import { Component, OnInit } from '@angular/core';
import { Deputado } from '../model/deputado';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ementa } from '../model/ementa';

@Component({
  selector: 'app-exibe-deputados',
  templateUrl: './exibe-deputados.component.html',
  styleUrls: ['./exibe-deputados.component.css']
})
export class ExibeDeputadosComponent implements OnInit {
  deputados: Deputado[];
  ementas: Ementa[];
  mediaForm: FormGroup;

  constructor(private ds: DeputadoService, private fb : FormBuilder) {
    this.deputados = [];
    this.ementas = []
    this.mediaForm = this.fb.group({
      id: [Validators.required()]
    })
  }

  ngOnInit(): void {
    this.ds.Obtertodos().subscribe(res =>{
      this.deputados=(res.dados);
    });
    /*
    this.ds.obterpartido("36786").subscribe(res =>{
      console.log(res.dados)
    });
    */
  
  }

  obterProposicoes(): void {
    let id = this.mediaForm.value;
    this.ds.obterProposicoes(id.id).subscribe(res =>{
      this.ementas = res.dados;
    });
  }

  obterLegislatura(): void {
    //this.ds.obterLesgislatura().subscribe(res =>)
  }

}
