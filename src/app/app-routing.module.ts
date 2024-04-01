// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CrudDemoComponent } from './crud/crud.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'form', component: FormComponent }, 
  { path: 'edit/:id', component: FormComponent },
  { path: 'crud', component: CrudDemoComponent }, 
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
