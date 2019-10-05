// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//     });

//     // Or with jQuery

$(document).ready(function(){
    // https://materializecss.com/carousel.html - documentation
    $('.carousel').carousel();
    // https://materializecss.com/sidenav.html - doumentation 
    // slide out side nav
    $('.sidenav').sidenav();


    // function to create the carousel - it takes an array of links and pictures for the carousel
    function createCarousel(linkArray, picArray) {
        var caro = $("<div>").addClass("carousel");
        var caroItem = $("<a>").addClass("carousel-item");

        // for each item add the classes
        linkArray.forEach(element, i => {
            if (picArray[i]) {
                caroItem.attr({
                    href: element,
                    src: picArray[i]
                });
            }
            caro.append(caroItem);
        });
        // return the carousel jquery object
        return caro;
    }

      $( document ).ready(function(){
        $(".dropdown-trigger").dropdown();
      })


});