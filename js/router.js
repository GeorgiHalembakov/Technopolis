
 function router(){
    const page = location.hash.split("=")[1];
    const catPage = location.hash.split("=")[3];
    switch (page){
        case 'home' : homeController(); break;
        case 'login' : loginController(); break;
        case 'category' : categoryController(); break;
        case 'register' : registerController(); break;
        case 'profile' : profileController(); break;
        case 'product' : productController(); break;

        default: homeController();
    }
    if(catPage == 'subCat'){
        subcategoryController(); 
    }
};  

$(window).on('hashchange', router);
router();