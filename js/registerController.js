function registerController(){
    console.log('register');
    
    $.get('../register.html').then(text =>{
        $('main').html(text);
    
    });
}
