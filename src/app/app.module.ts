import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  // incluir os compnentes, diretivas e types.
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
  ],
  // incluir os modulos
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // classes de servicos
  providers: [],
  bootstrap: [AppComponent]
})

// compoenentes, diretivas e types
export class AppModule { }
