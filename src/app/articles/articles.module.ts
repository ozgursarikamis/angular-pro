import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from "../articles/article-list/article-list.component";
import { ArticleDetailComponent } from "./article-detail/article-detail.component";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
