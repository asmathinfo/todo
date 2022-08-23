import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputModelComponent } from './input-model/input-model.component';
import { BootstrapClassesComponent } from './bootstrap-classes/bootstrap-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    InputModelComponent,
    BootstrapClassesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
