import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about/about-us/about-us.component';
import { OurTeamComponent } from './pages/about/our-team/our-team.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EnvironmentalServicesComponent } from './pages/services/environmental-services/environmental-services.component';
import { MiningServicesComponent } from './pages/services/mining-services/mining-services.component';
import { LegalServicesComponent } from './pages/services/legal-services/legal-services.component';
import { IndustrialMineralComponent } from './pages/product/industrial-mineral/industrial-mineral.component';
import { NaturalStonesComponent } from './pages/product/natural-stones/natural-stones.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'environmental-services', component: EnvironmentalServicesComponent},
  { path: 'mining-services', component: MiningServicesComponent},
  { path: 'legal-services', component: LegalServicesComponent},
  { path: 'Industrial-Mineral', component: IndustrialMineralComponent},
  { path: 'Natural-Stones', component: NaturalStonesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
