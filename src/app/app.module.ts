import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooderComponent } from './fooder/fooder.component';
import { ContentComponent } from './content/content.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';
import { Content5Component } from './content5/content5.component';
import { Content6Component } from './content6/content6.component';
import { Content7Component } from './content7/content7.component';

var appRoutes = [
  { path:'content', component: ContentComponent },
  { path:'content2', component: Content2Component },
  { path:'content3', component: Content3Component },
  { path:'content4', component: Content4Component },
  { path:'content5', component: Content5Component },
  { path:'content6', component: Content6Component },
  { path:'content7', component: Content7Component },
]

@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
    NavComponent,
    FooderComponent,
    ContentComponent,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    Content7Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
