var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();


jQuery(document).ready(function($){
	//open-close submenu on mobile
	$('.cd-main-nav').on('click', function(event){
		if($(event.target).is('.cd-main-nav')) $(this).children('ul').toggleClass('is-visible');
	});
});


$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('cd-header').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('cd-header');
        }
    }
    
    lastScrollTop = st;
}

$(document).ready(function() {
  $(".fancybox")
  .fancybox({
    openEffect  : 'none',
  });
});



$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows' ).hide(),
    $shadow = $( '#shadow' ).hide(),
    slicebox = $( '#sb-slider' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});

$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows1' ).hide(),
    $shadow = $( '#shadow1' ).hide(),
    slicebox = $( '#sb-slider1' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});


$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows2' ).hide(),
    $shadow = $( '#shadow2' ).hide(),
    slicebox = $( '#sb-slider2' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});


$(function() {
  
                
var Page = (function() {

var $navArrows = $( '#nav-arrows3' ).hide(),
    $shadow = $( '#shadow3' ).hide(),
    slicebox = $( '#sb-slider3' ).slicebox( {
        onReady : function() {

            $navArrows.show();
            $shadow.show();

        },
        orientation : 'r',
        cuboidsRandom : true,
        disperseFactor : 30
    } ),
    
    init = function() {

        initEvents();
        
    },
    initEvents = function() {

        // add navigation events
        $navArrows.children( ':first' ).on( 'click', function() {

            slicebox.next();
            return false;

        } );

        $navArrows.children( ':last' ).on( 'click', function() {
            
            slicebox.previous();
            return false;

        } );

    };

    return { init : init };

})();

Page.init();

});