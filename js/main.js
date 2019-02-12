$(function () {

    // $('.login').on('click', function(){
    //     $.get('../login.html').then(text =>{
    //         $('main').html(text);
        
    //     });
    // });

    // $('#categoryTv').on('click', function(){
    //     $.get('../category-page.html').then(text =>{
    //         $('main').html(text);
    //     });
        
    // });


    $('.nav-hover').on('mouseover', function(){
        var id = $(this).attr('id');
        categoryNav.forEach(() => {
            $('.cat-img').attr('src', `images/products/${categoryNav[id].img}`);
        });
    });


});