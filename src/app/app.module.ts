import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { TesteComponentUmComponent } from './components/teste-component-um/teste-component-um.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    TesteComponentUmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
