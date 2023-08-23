import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'aprender Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(): void {
    alert('Pensamento criado com sucesso!');
  }
  cancelarPensamento(): void {
    alert('Pensamento cancelado com sucesso!');
  }

}
