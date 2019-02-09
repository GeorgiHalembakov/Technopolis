
 function router(){
    const page = location.hash.split("=")[1];
    switch (page){
        case 'home' : homeController(); break;
        case 'login' : loginController(); break;
        case 'categoryTv' : categoryController(); break;
        case 'register' : registerController(); break;
        case 'profile' : profileController(); break;

        default: homeController();
    }
};  

$(window).on('hashchange', router);
router();