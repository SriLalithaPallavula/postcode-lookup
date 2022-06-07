import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './views/search/search.component';
import { SuburbsListComponent } from './views/suburbs-list/suburbs-list.component';
import { SuburbItemComponent } from './views/suburb-item/suburb-item.component';
import { MaterialExampleModule } from './../material.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SuburbsListComponent,
    SuburbItemComponent,
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
