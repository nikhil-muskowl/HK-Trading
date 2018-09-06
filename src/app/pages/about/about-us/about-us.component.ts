import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public objectives:Array<any>;
  
  constructor() { 

  }

  ngOnInit() {
    this.objectives  = [
      { text: 'To be known as High Value added mineral and allied products solutions provider.' },
      { text: 'Identify Trading Opportunities in Application Segments with Significant presence.' },
      { text: 'Recognise the importance of mineral conservation and get the best value by consciously moving away from low end segments to high value' }
    ]
  }

}
