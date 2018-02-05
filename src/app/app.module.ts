import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import {DirectiveModule} from './directive/directive.module';
import { HintComponent } from './hint/hint.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HintComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
