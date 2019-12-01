import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class CoreModule { }