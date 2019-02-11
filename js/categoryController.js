function categoryController() {
    console.log('category');
    const page = location.hash.split("category")[1];
    console.log(page);
    var categoryPage = [];
    categoryPage = categoryNav.slice(0, 2);
    console.log(categoryPage);
    
    $.get('../category-page.htm').then(res => {
        
        var template = Handlebars.compile(res);
        var html = template({ categoryPage });
        $('.main').html(html);
    });
    var categoryName;
    switch (page) {
        case 1: categoryPage = categoryNav.slice(0, 2); break;
        case 2: categoryPage = categoryNav.slice(2, 4); break;
        case 3: categoryPage = categoryNav.slice(4, 6); break;
        case 4: categoryPage = categoryNav.slice(6, 8); break;
        case 5: categoryPage = categoryNav.slice(8, 10); break;
        case '6': categoryPage = categoryNav.slice(10, 12); break;
        case '7': categoryPage = categoryNav.slice(12, 14); break;
        case '8': categoryPage = categoryNav.slice(14, 16); break;
        case '9': categoryPage = categoryNav.slice(16, 18); break;
    }

    

    // $.get('../category-page.html').then(text =>{
    //     $('main').html(text);
    // });

}

