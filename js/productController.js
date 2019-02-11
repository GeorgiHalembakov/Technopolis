function productController() {
    console.log('product');
    const productHash = location.hash.split("=")[2];
   
 
    $.get('../product-page.html').then(text =>{
        $('main').html(text);
        
        products.forEach(function (obj) {
            if (obj.Id == productHash) {
                $.get('js/productTemplate.htm').then(res => {
                    var template = Handlebars.compile(res);
                    var html = template({ obj });
                    $('.product-page').html(html);
                  });
            }
        })
    });
    






}
