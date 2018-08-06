(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict





// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);


//Autoplay video on phones
function AutoPlay(i){
  var myVideo = document.getElementById('myVideo'+i);

    VisSense.VisMon.Builder(VisSense(myVideo, {
        fullyvisible: 0.75
    }))
    .on('fullyvisible', function() {
        myVideo.play();
    })
    .on('hidden', function() {
        myVideo.pause();
    })
    .build()
    .start();
}

//Home logo animation
$(document).ready(function(){
    setTimeout(function(){
      //Logo animation
      var animation = bodymovin.loadAnimation({
        container: document.getElementById('logo'),
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'img/when.json'
      })
    }, 0000);

    setTimeout(function(){
        $("#sub1").removeClass("opacity0");
    }, 1500);

    setTimeout(function(){
        $("#sub2").removeClass("opacity0");
    }, 3000);

    setTimeout(function(){
        $("#logo").removeClass("line");
    }, 3500);
});



//Popover Footer
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function () {
      // hide any open popovers when the anywhere else in the body is clicked
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          $(this).popover('hide');
      }
  });
});

$("[data-toggle=popover]").mousedown(function(){
// toggle popover when link is clicked
$(this).popover('toggle');
});
