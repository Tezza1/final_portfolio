$(document).ready(function(){

    $('#item1').click(function(){
        $('#item1').addClass("active");
        $('#item2').removeClass("active");
        $('#item3').removeClass("active");
    });

    $('#item2').click(function(){
        $('#item2').addClass("active");
        $('#item1').removeClass("active");
        $('#item3').removeClass("active");
    });

    $('#item3').click(function(){
        $('#item3').addClass("active");
        $('#item1').removeClass("active");
        $('#item2').removeClass("active");
    });

    // initialize the accordion
    $('.ui.accordion').accordion();

    // initializing the modal
    $("#langexbot_modal").click(function(){
        $(".langexbot_modal").modal('show');
    });
    $(".langexbot_modal").modal({
        closable: true
    });

    $("#npad_modal").click(function(){
        $(".npad_modal").modal('show');
    });
    $(".npad_modal").modal({
        closable: true
    });

    $("#marvel_modal").click(function(){
        $(".marvel_modal").modal('show');
    });
    $(".marvel_modal").modal({
        closable: true
    });

    // scrollspy
    $("#item1").click(function() {
        $('html, body').animate({
            scrollTop: $("#top-content-container").offset().top
        }, 2000);
    }); 

    $("#item2").click(function() {
        $('html, body').animate({
            scrollTop: $("#middle-content-container").offset().top
        }, 2000);
    });

    $("#item3").click(function() {
        $('html, body').animate({
            scrollTop: $("#bottom-content-container").offset().top
        }, 2000);
    }); 

    $("#page-header").hide().fadeIn(3000);

});

