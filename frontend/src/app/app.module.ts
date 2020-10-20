import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    CadastroModule,
    PedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
