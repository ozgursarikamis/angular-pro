import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArticlesComponent,
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
