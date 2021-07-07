//navbar
$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 350) { // check if user scrolled more than 50 from top of the browser window
            $(".main-nav").addClass('navbar-fixed-top'); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".main-nav").removeClass('navbar-fixed-top'); // if not, change it back to transparent
        }
    });
});





//Map
$(function () {
    if ($('#map').length > 0) {
        const latLng = new google.maps.LatLng(23.177794886279056, 89.217808842659);
        const MAP = new google.maps.Map(document.getElementById('map'), {
            zoom: 16,
            center: latLng
        });
        new google.maps.Marker({
            position: latLng,
            map: MAP
        });
    }
});

//Open Nav
function openNav() {
    $('.main-nav-two').css('left','0')
}
const $menu = $('.main-nav-two');

$(document).mouseup(e => {
    if (!$menu.is(e.target) // if the target of the click isn't the container...
        && $menu.has(e.target).length === 0) // ... nor a descendant of the container
    {
        $menu.css('left', '-100%');
    }
});

$(document).ready(function(){
    $('.navs .nav-items .nav-links').click(function(){
        $('.nav-items .nav-links').removeClass("active");
        $(this).addClass("active");
    });
});

//Admin Option
function openAdminOption() {
    $('.admin-options').slideToggle(200)
}


    AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
