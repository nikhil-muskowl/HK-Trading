import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;

@Component({
  selector: 'app-natural-stones',
  templateUrl: './natural-stones.component.html',
  styleUrls: ['./natural-stones.component.css']
})
export class NaturalStonesComponent implements OnInit {

  title = 'Natural Stones';
  constructor() { }

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
    
    var items = [
      {
          type: "text",
          title: "Text type",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
          "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
          "ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum " +
          "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
          "deserunt mollit anim id est laborum.",
          position: {
              left: 100,
              top: 50
          }
      },
      {
          type: "text",
          title: "Text type",
          description: "Text item with HTTP link",
          position: {
              left: 300,
              top: 50
          },
          link: {
              url: "https://www.jpchateau.com/demo/interactive-image",
              label: "Interactive Image Demo"
          }
      },
      {
          type: "text",
          title: "Text type",
          description: "Text item with picture",
          position: {
              left: 500,
              top: 50
          },
          picturePath: "https://www.jpchateau.com/bundles/jpcjpchateau/images/demo/interactive-image/clouded-leopard-head.jpg"
      },
      {
          type: "text",
          title: "Text type",
          description: "Text item with picture and HTTP link",
          position: {
              left: 700,
              top: 50
          },
          picturePath: "https://www.jpchateau.com/bundles/jpcjpchateau/images/demo/interactive-image/clouded-leopard-head.jpg",
          link: {
              url: "http://www.jpchateau.com/demo/interactive-image",
              label: "Interactive Image Demo"
          }
      },
      {
          type: "picture",
          path: "https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/c/clouded-leopard/clouded-leopard_02.ngsversion.1484060723076.adapt.676.1.JPG",
          position: {
              left: 100,
              top: 200
          }
      },
      {
          type: "picture",
          path: "https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/c/clouded-leopard/clouded-leopard_02.ngsversion.1484060723076.adapt.676.1.JPG",
          caption: "Picture type",
          position: {
              left: 300,
              top: 200
          }
      },
      {
          type: "picture",
          path: "https://www.nationalgeographic.com/content/dam/animals/pictures/mammals/c/clouded-leopard/clouded-leopard_02.ngsversion.1484060723076.adapt.676.1.JPG",
          caption: "Picture type with link",
          linkUrl: "https://www.nationalgeographic.com",
          position: {
              left: 500,
              top: 200
          }
      }
  ];

  // Plugin configuration
  var options = {
      debug: true
  };

  // Plugin activation
  $(document).ready(function () {
      $(".interactive-image").interactiveImage(items, options);
  });
  }

}
