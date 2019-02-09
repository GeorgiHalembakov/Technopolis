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
            
            if (isNaN(firstName) && (firstName.trim().length > 2)) {
                
                $('#regNameContainer .error').text('')
            } else {
                $('#regNameContainer .error').text('Невалидно име');
                hasErrors = true;
            }
            if ( isNaN(lastName) && (lastName.trim().length > 2)) {
    
                $('#lastNameContainer .error').text('');
            } else {
                $('#lastNameContainer .error').text('Невалиднa фамилия');
                hasErrors = true;
            }
    
            if (password.trim().length <= 5) {
                $('#passwordContainer .error').text('Паролата трябва да е поне 5 символа')
                hasErrors = true;
            } else {
                $('#passwordContainer .error').text('')
            }
    
            if (!isEmailValid(email)) {
                $('#regEmailContainer .error').text('Невалидна електронна поща')
                hasErrors = true;
            } else{
                $('#regEmailContainer .error').text('')
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