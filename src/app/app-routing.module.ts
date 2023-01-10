import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropDownComponent } from './drop-down/drop-down.component';

const routes: Routes = [
  {
    path:'',component:DropDownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
