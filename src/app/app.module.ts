import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AppComponent, BrowserModule, FormsModule],
  providers: [],
})
export class AppModule {}
