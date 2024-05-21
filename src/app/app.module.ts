import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    // Outros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Outros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
