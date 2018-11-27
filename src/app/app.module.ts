import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ChildrenComponent } from './children/children.component';
import { NineComponent } from './nine/nine.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeComponent,
    ChildComponent,
    ChildrenComponent,
    NineComponent
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
