import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import localeIT from '@angular/common/locales/it'
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { BlogComponent } from './blog/blog.component';
import { MainComponent } from './main/main.component';

registerLocaleData(localeIT, 'it');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionComponent,
    BlogComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [{provide: LOCALE_ID, useValue: 'it'}, {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
