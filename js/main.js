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
    $('.category').on('click', function (){
        categoryName = [];
        categoryName.push($(this).text());
        console.log(categoryName);
        $.get('../categoryLayout.htm').then(res => {
            console.log(res);
            var template = Handlebars.compile(res);
            var html = template({ categoryName: categoryName });
            $('.main').html(html);
        });

    });




});