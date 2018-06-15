import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooderComponent } from './fooder/fooder.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    NavComponent,
    FooderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
