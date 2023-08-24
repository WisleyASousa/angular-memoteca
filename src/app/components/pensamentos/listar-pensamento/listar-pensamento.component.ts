import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  // faz parte do ciclo de vida do componente e é executado quando o componente é criado
  ngOnInit(): void {
    this.service.Listar().subscribe((lista) => {
      this.listaPensamentos = lista;
    });
  }

}
