
/* Navbar transparent to solid */

$(document).ready(function() {              /* to make sure that DOM has loaded completely... */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {    /* if the top scroll is 300 pxs away from the window.... */
            $('.navbar').addClass('solid'); /* adding the solid look to navbar using css class */
            $('.nav-link').addClass('whiteText'); /* adding the white text look to the navbar links using css class */
            $('.svg-inline--fa.fa-w-14').addClass('whiteHamIcon');
        }
        else {
            $('.navbar').removeClass('solid'); /* removing the solid look to navbar once it reaches to the top */
            $('.nav-link').removeClass('whiteText'); /* removing the white text look to the navbar links once it reaches the top */
            $('.svg-inline--fa.fa-w-14').removeClass('whiteHamIcon');
            
        }
    });
});

/* SMOOTH SCROLLING TO NAV LINKS */

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