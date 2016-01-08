"use strict";angular.module("blacksApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),function(a){a(document).ready(function(){a("#signInBtn").on("click",function(){console.log("sign in button clicked"),a(".dropdown-menu").css("display","none")})})}(jQuery),angular.module("blacksApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("blacksApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("blacksApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/full.html",'<head> <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700" rel="stylesheet" type="text/css"> <!-- Owl Carousel Assets --> <link href="../styles/owl.carousel.css" rel="stylesheet"> <link href="../styles/owl.theme.css" rel="stylesheet"> <body> <div id="title"> <div class="container"> <div class="row"> <div class="span12 text-center"> <h1>Full Browser Width</h1> </div> </div> </div> </div> <div id="demo"> <div id="owl-demo" class="owl-carousel"> <div class="item"> <h1>1</h1> </div> <div class="item"> <h1>2</h1> </div> <div class="item"> <h1>3</h1> </div> <div class="item"> <h1>4</h1> </div> <div class="item"> <h1>5</h1> </div> <div class="item"> <h1>6</h1> </div> <div class="item"> <h1>7</h1> </div> <div class="item"> <h1>8</h1> </div> <div class="item"> <h1>9</h1> </div> <div class="item"> <h1>10</h1> </div> <div class="item"> <h1>11</h1> </div> <div class="item"> <h1>12</h1> </div> </div> </div> <!-- <script src="bower_components/jquery/dist/jquery.js"></script> --> <script src="../scripts/venders/owl.carousel.js"></script> <!-- Demo --> <style>#owl-demo .item {\n      background: #ccc;\n      padding: 30px 0px;\n      margin: 15px;\n      color: #FFF;\n      -webkit-border-radius: 3px;\n      -moz-border-radius: 3px;\n      border-radius: 3px;\n      text-align: center;\n    }</style> <script>$(document).ready(function() {\n      $("#owl-demo").owlCarousel({\n        navigation: true,\n        singleItem: true\n      });\n    });</script> </body></head>'),a.put("views/main.html",'<link rel="stylesheet" href="styles/vender/owl.carousel.css"> <link rel="stylesheet" href="styles/vender/owl.theme.css"> <div class="main text-center"> <div class="jumbotron"> <div class="owl-carousel" id="owl-demo"> <div class="box"><div class="center-text">1</div></div> <div class="box"><div class="center-text">2</div></div> <div class="box"><div class="center-text">3</div></div> </div> <h1>Landing Page!</h1> <div class="lead"> <p> first thing you should see when going to https://www.blacksintechnology.net </p> </div> </div> <hr class="divider featurette-divider"> <div class="container-fluid"> <div class="row"> <div class="col-md-2"></div> <div class="box featurette-image col-md-3"></div> <div class="text-right col-md-4 col-md-push-1"> <div class="featurette-heading"> Article title or Spotlight Event <span class="text-muted">With Text Muted</span> </div> <p> <mdall>By: Author\'s Name</mdall> </p> <p class="lead"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p> <p class="lead"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.<br> <a href="#">Read more...</a> </p> </div> </div> </div> <hr class="divider featurette-divider"> <!-- Event Section --> <div class="container-fluid"> <div class="row"> <div class="col-md-4"> <div class="box-round"></div> <h2>Article Header</h2> <p class="lead"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate. <a href="">Read more...</a> </p> </div> <div class="col-md-4"> <div class="box-round"></div> <h2>Article Header</h2> <p class="lead"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate. <a href="">Read more...</a> </p> </div> <div class="col-md-4"> <div class="box-round"></div> <h2>Article Header</h2> <p class="lead"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate. <a href="">Read more...</a> </p> </div> </div> </div><!--end Event section--> <hr class="divider featurette-divider"> <div class="container-fluid"> <div class="row"> <div class="box featurette-image col-md-3 col-md-push-7"></div> <div class="text-left col-md-4 col-md-pull-1"> <div class="featurette-heading"> Article title or Spotlight Event <span class="text-muted">With Text Muted</span> </div> <p> <mdall>By: Author\'s Name</mdall> </p> <p class="lead"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p> <p class="lead"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate.<br> <a href="#">Read more...</a> </p> </div> </div> </div> </div> <script src="../scripts/venders/owl.carousel.js"></script> <!-- Carousel Section --> <script type="text/javascript" src="../scripts/carousel.js">')}]);