import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DrinkComponent } from './components/drink/drink.component';
import { AuthInterceptor } from './libs/interceptors/auth.interceptor';
import { ValidatorInterceptor } from './libs/interceptors/validator.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: ValidatorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
