import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/admin/admin.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngressEgressComponent } from './components/ingress-egress/ingress-egress.component';
import { HistoryComponent } from './components/history/history.component';
import { UserresgistrationComponent } from './components/userresgistration/userresgistration.component';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { GraphicstithesandofferingsComponent } from './components/graphicstithesandofferings/graphicstithesandofferings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CashRegisterComponent,
    HeaderComponent,
    FooterComponent,
    IngressEgressComponent,
    HistoryComponent,
    UserresgistrationComponent,
    GraphicsComponent,
    GraphicstithesandofferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
