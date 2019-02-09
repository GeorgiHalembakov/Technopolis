function loginController() {
    console.log('login');
   if(JSON.parse(localStorage.getItem('currentUser')) === null){
    $.get('../login.html').then(text => {
        $('main').html(text);
       
        $('#login-button').on('click', function (event) {
            event.preventDefault();
            const email = $('#email').val();
            const password = $('#password').val();
            var currentUser = {};


            // console.log(userStorage.login(email))

            if (userStorage.login(email, password)) {
                location.replace('#page=profile');
                var userList =  JSON.parse(localStorage.getItem('userList'));
                
                userList.forEach(user => {
                    if (user.email === email && user.password === password) {
                        currentUser =  user;
                    }
                });
               localStorage.setItem('currentUser',JSON.stringify(currentUser));


            } else {
                $('.error').text('Грешно потребителско име или парола');
            }
        });
    });
   } else {
    location.replace('#page=profile');
   }
  
   



}

