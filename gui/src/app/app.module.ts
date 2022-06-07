import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
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
    BrowserAnimationsModule,
    BrowserModule,
    MatNativeDateModule,
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
