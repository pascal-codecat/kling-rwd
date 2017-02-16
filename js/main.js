// Navbar burger-icon
function openNav() {
    document.getElementById("mySidenav").style.width = "15em";
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
    center: {lat: 47.6586018, lng: 9.4317064},
    zoom: 15
  });
}

// marker

function initMap() {
  var myLatLng = {lat: 47.651483, lng: 9.494621};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
