
 function router(){
    const page = location.hash.split("=")[1];
    switch (page){
        case 'home' : homeController(); break;
        case 'login' : loginController(); break;

        default: homeController();
    }
};  

$(window).on('hashchange', router);
router();