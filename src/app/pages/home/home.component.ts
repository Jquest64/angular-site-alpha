import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { MissionComponent } from '../../components/mission/mission.component';
import { PartnersComponent } from '../../components/partners/partners.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ServicesComponent } from '../../components/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, 
            FooterComponent, 
            BannerComponent, 
            MissionComponent, 
            PartnersComponent, 
            PortfolioComponent, 
            ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
