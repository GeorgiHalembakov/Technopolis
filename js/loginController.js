function loginController(){
    console.log('login');
    $.get('../login.html').then(text =>{
        $('main').html(text);
    
    });
}

