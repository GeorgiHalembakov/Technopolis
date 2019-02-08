function categoryController(){
    console.log('category');
    $.get('../category-page.html').then(text =>{
        $('main').html(text);
    });
            
}

