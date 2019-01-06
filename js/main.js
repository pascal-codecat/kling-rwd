// Navbar burger-icon
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Navbar burger-icon


$(document).ready(function(){
   $('[data-toggle="offcanvas"]').click(function(){
       $("#navigation").toggleClass("hidden-xs");
   });
});



var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.6445009, lng: 9.5045683},
    zoom: 15
  });
}

// marker

function initMap() {
  var myLatLng = {lat: 47.6444973, lng: 9.506757};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });


  // smooth scrolling
  var $root = $('html, body');
    $('.navi a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
  });

}
