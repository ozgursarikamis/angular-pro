import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FileSizePipe } from './file-size.pipe';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  declarations: [
    FileSizePipe
  ]
})
export class AppRoutingModule { }
