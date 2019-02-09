
var userStorage = (function () {
    class User {
        constructor(firstName,lastName,email,password) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.likedItems = [];
        }
    }
    let userList = [];
   
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));

    } else {
        userList = [
            new User('Denitsa', 'Koprivova','deni@abv.bg','20to4kipls'),
        ];
    }

    return {
        login: function (email,password) {
            return userList.some(user => 
                user.email === email && user.password === password

                );
        },
        register: function (firstName, lastName,email,password) {
            userList.push(new User(firstName, lastName,email,password));
            localStorage.setItem('userList', JSON.stringify(userList));
        },

        // getUser: function(email,password){
        //     console.log(email)
        //     console.log(password)
        //     console.log('плс')

        //     return userList.find(function(user) {
        //         if (user.email === email && user.password === password) {
        //             return user;
        //         } else {
        //             return 'gosho';
        //         }
        //     })
        // }

    }
})();