import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;


@Component({
  selector: 'app-industrial-mineral',
  templateUrl: './industrial-mineral.component.html',
  styleUrls: ['./industrial-mineral.component.css']
})
export class IndustrialMineralComponent implements OnInit {

  title = 'Industrial Minerals';
  constructor() {
    
   }

  ngOnInit() {

    $(document).on("click", ".naccs .menu div", function() {
      var numberIndex = $(this).index();
    
      if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");
    
        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
    
        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
    });    
    
  }

}
