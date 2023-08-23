import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'aprender Angular',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Angular',
      autoria: 'Devs',
      modelo: 'modelo2'
    },
    {
      conteudo: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumlorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      autoria: 'Dev',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
