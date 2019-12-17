
/* SMOOTH SCROLLING TO NAV LINKS */
// used for the bottom arrow to take user to top of page.

$(document).ready(function () {
    /* perform this any time a link is clicked on */
    $("a").on('click', function (event) {
        if (this.hash !== "") { // if the hash value is not empty
           
            event.preventDefault();
            var hash = this.hash;

            //targeting the whole document
            $('html, body').animate( {
                scrollTop: $(hash).offset().top 
            }, 800, function () {
                window.location.hash = hash;
            });     
        } //end of if statement
    });
});


/* CLOSE MOBILE NAV ON CLICK */

$(document).ready(function() {
    $(document).click(function (event) { /* If user hits anywhere besides the navbar on the document */

        var clickover = $(event.target); /* this gets the element that we clicked on with the event element */
        var _opened = $('.navbar-collapse').hasClass('show');

        if (_opened === true && !clickover.hasClass('.navbar-toggler')) {
            $('.navbar-toggler').click();
        }
    });
});



/* START OF TOP-SCROLL */

$(document).ready(function (){
    $(window).scroll(function (){
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});






/* REFRESH PAGE AT TOP OF DOCUMENT LOAD INSTEAD OF AT #HASH */
/* works for every browser but google chrome because cache needs to be cleared */
$(document).ready(function(){
    $("html,body").animate({scrollTop: 0}, 0)
});