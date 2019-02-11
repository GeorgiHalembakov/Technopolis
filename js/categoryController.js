function categoryController() {
    console.log('category');
    const categoryHash = location.hash.split("=")[2];
    $.get('../category-page.html').then(text =>{
        $('main').html(text);
        allProducts.forEach(function (obj) {
            if (obj.cat == categoryHash) {
                $('h2').text(obj.catName)

                $('.cat1 .sub-category-name').text(obj.subCats.cat1.name)
                $('.cat1').attr('href',obj.subCats.cat1.subCatHref)
                $('.cat1 img').attr('src',obj.subCats.cat1.imgLink)

                $('.cat2 .sub-category-name').text(obj.subCats.cat2.name)
                $('.cat2 ').attr('href',obj.subCats.cat2.subCatHref)
                $('.cat2 img').attr('src',obj.subCats.cat2.imgLink)
            }
        })
    });





}

