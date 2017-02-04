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
