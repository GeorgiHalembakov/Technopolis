function profileController(){
    console.log('profile');

    if(JSON.parse(localStorage.getItem('currentUser')) !== null){
        $.get('../profile-page.html').then(text =>{

            $('main').html(text);
    
            var currentUser =  JSON.parse(localStorage.getItem('currentUser'));
            $('.userFirstName span').text(currentUser.firstName);
            $('.userLastName span').text(currentUser.lastName);
            $('.userEmail span').text(currentUser.email);
    
    
            $('#logout').on('click', function(event){
                event.preventDefault();
                localStorage.setItem('currentUser', null);
                location.replace('#page=login');
            })
        });
            
    } else{
        location.replace('#page=login');
    }
      
}
