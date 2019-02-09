function registerController() {
    console.log('register');

    $.get('../register.html').then(text => {
        $('main').html(text);

        $('#register-button').on('click', function (event) {
            console.log('registraciqta')
            event.preventDefault();
            const firstName = $('#first-name').val();
            const lastName = $('#last-name').val();
            const email = $('#reg-email').val();
            const password = $('#reg-password').val();
    
            let hasErrors = false;
    
            if (firstName.trim().length <= 3) {
    
                hasErrors = true;
            }
            if (lastName.trim().length <= 3) {
    
                hasErrors = true;
            }
    
            if (password.trim().length <= 3) {
    
                hasErrors = true;
            }
    
            if (!isEmailValid(email)) {
    
                hasErrors = true;
            }
    
            if (!hasErrors) {
                userStorage.register(firstName, lastName, email, password);
                location.replace('#page=login');
            }
        });
    });

  
}


function isEmailValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}