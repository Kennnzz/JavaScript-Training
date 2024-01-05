// object literals

let user = {
    name: 'crystal', // key value pairs
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 thungs to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    },
    logBlogs: function(){
        
    }
};

user.login();
user.logout();

const name = 'mario';
name.toUpperCase();
