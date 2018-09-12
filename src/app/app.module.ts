import { UserMapper } from './auth/user.mapper';
import { ProductMapper } from './products/product.mapper';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { CcModalModule } from './cc-modal/cc-modal.module';
// import { CcLoadingModule } from './cc-loading/cc-loading.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    // CcModalModule,
    // CcLoadingModule
  ],
  providers: [
    ProductMapper,
    UserMapper
],
  bootstrap: [AppComponent]
})
export class AppModule { }
