import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule,
         MatIconModule,
         MatButtonModule,
         MatBadgeModule,
         MatInputModule,
         MatTableModule,
         MatMenuModule
        } from '@angular/material';
import { ShoppingCartComponent } from './components/shoppingcart/shoppingcart.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ShoppingCartComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule
  ]
})
export class CoreModule { }
