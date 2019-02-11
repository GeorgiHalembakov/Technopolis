function subcategoryController() {
    console.log('subcategory');
    const categoryHash = location.hash.split("=")[2];
    const subCatHash = location.hash.split("=")[4];
    let subCat = []
 
    $.get('../subCategorypage.html').then(text =>{
        $('main').html(text);
        allProducts.forEach(function (obj) {
            if (obj.cat == categoryHash) {
                
                if(obj.subCats.cat1.catName == subCatHash){
                    subCat = obj.subCats.cat1.products
                }else{
                    subCat = obj.subCats.cat2.products

                }

            }
        })
    });
    $.get('js/subCatTemplate.htm').then(res => {
        var template = Handlebars.compile(res);
        var html = template({ subCat });
        $('.subCatProducts').html(html);
      });





}
