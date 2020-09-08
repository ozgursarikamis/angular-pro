import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { ResolveHomeComponent } from "./resolve-home/resolve-home.component";
import { ResolveOneComponent } from "./resolve-one/resolve-one.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ResolveHomeComponent,
    ResolveOneComponent
  ],
  providers: [
    HttpClientModule
  ]
})
export class ResolversModule { }
