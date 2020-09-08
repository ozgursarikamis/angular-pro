import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from '../articles/article-detail/article-detail.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

const routes: Routes = [{
    path: 'articles', component: ArticleListComponent,
    children: [
      { path: ':id', component: ArticleDetailComponent }
    ]
  },
  {
    path: "articles",
    component: SidebarComponent,
    outlet: "sidebar"
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class ArticleRoutingModule { }
