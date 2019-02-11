  
 function router(){
    const page = location.hash.split("=")[1];
    switch (page){
        case 'home' : homeController(); break;
        case 'login' : loginController(); break;
        case 'category1' : 
        case 'category2' : 
        case 'category3' : 
        case 'category4' : 
        case 'category5' : 
        case 'category6' : 
        case 'category7' : 
        case 'category8' : 
        case 'category9' : categoryController(); break;
      
        case 'register' : registerController(); break;
        case 'profile' : profileController(); break;

        default: homeController();
    }
};  

$(window).on('hashchange', router);
router();