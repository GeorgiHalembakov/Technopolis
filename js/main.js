$(function () {

    $('.login').on('click', function(){
        $.get('../login.html').then(text =>{
            $('main').html(text);
        
        });
    });

    $('#categoryTv').on('click', function(){
        $.get('../category-page.html').then(text =>{
            $('main').html(text);
        });
        
    });

    // homepage slider
    $('.homepage-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true
    });


});