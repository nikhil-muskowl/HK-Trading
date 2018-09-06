import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { OurTeamComponent } from './pages/about/our-team/our-team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnvironmentalServicesComponent } from './pages/services/environmental-services/environmental-services.component';
import { MiningServicesComponent } from './pages/services/mining-services/mining-services.component';
import { LegalServicesComponent } from './pages/services/legal-services/legal-services.component';
import { IndustrialMineralComponent } from './pages/product/industrial-mineral/industrial-mineral.component';
import { NaturalStonesComponent } from './pages/product/natural-stones/natural-stones.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurTeamComponent,
    ContactComponent,
    EnvironmentalServicesComponent,
    MiningServicesComponent,
    LegalServicesComponent,
    IndustrialMineralComponent,
    NaturalStonesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
