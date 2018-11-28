import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { Destroy02Component } from './destroy02/destroy02.component';
import { Destroy01Component } from './destroy01/destroy01.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ChildrenComponent,
    NineComponent,
    TenComponent,
    Destroy01Component,
    Destroy02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
