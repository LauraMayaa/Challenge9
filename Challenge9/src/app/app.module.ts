import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateKittenComponent } from './create-kitten/create-kitten.component';
import { ListKittenComponent } from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KittenInfosDirective } from './directives/kitten-infos.directive';
import { KittenTileComponent } from './kitten-tile/kitten-tile.component';
import { UserTileComponent } from './user-tile/user-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateKittenComponent,
    ListKittenComponent,
    UserKittenComponent,
    HeaderComponent,
    KittenInfosDirective,
    KittenTileComponent,
    UserTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
