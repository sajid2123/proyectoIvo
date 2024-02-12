import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PaginaLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PaginaLoginComponent
  ]
})
export class LoginModule { }
