$(document).ready(function(){
    $(".filter-button").hover(function(){
        var value = $(this).attr('data-filter');
        if(value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});

// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});


(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.slide-in-demo',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 0,
                        'unit': '%'
                    }
                }
            }
        ]);
    });
})(jQuery);




