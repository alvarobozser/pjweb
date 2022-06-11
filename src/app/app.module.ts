import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from 'src/material.module';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialExampleModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
