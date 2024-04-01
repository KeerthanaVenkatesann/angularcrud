import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component'; // Make sure to import FormComponent
import { FormsModule } from '@angular/forms';
import { CrudDemoComponent } from './crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent, 
    CrudDemoComponent, TableComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
