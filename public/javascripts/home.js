/**
 * Parallax
 */
// function gmaps() {
    function init_map(){
        var myOptions = {
            scrollwheel: false,
            zoom:16,
            center:new google.maps.LatLng(-23.5545354,-46.6641391),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        marker = new google.maps.Marker({
            map: map,position: new google.maps.LatLng(-23.5545354, -46.6641391)}
        );
        infowindow = new google.maps.InfoWindow({
            content:"<b>KiddoLabs</b><br/>Av. Paulista, 3681 <br/>03785-192 S&atilde;o Paulo" 
        });
        google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
        infowindow.open(map,marker);
    }

    google.maps.event.addDomListener(window, 'load', init_map);
    //console.log("AAAA");
//}

// /**
//  * Parallax
//  */
// $(function() {
//     $.stellar({
//     horizontalScrolling: false,
//     responsive: true,
//     scrollProperty: 'scroll'
//     });
// });     

    //<!-- Initialize Swiper -->

    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    


        <!-- Initialize Swiper -->

    var swiper = new Swiper('.team-car', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
