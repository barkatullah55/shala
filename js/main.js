// alert("hi") কোড লিখে টেস্ট করা হয়েছে ওয়েবপেইজে JS কাজ করছে কি না।
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5a59c66dd7591465c706b654/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

//Preloader
$(window).on('load',function(){
  setTimeout(function(){
    $(".preloader").fadeOut('slow');
  },600);
});

$(document).ready(function () {

  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar-nav", offset: 67});

  // Add smooth scrolling on all links inside the navbar
  $(".navbar-nav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

      //Hide Navigation On Mobile
      $(".navbar-collapse").collapse("hide");

    } // End if

  });

  //Product Carousel
  $("#product-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  //Testimonial Carousel
  $("#testimonial-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
//Owl Carousel End
