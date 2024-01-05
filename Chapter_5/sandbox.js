// object literals

let user = {
    name: 'crystal', // key value pairs
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out')
    }, // for shorter version, remove function and colon
    logBlogs(){ // we cannot use an arow function to do this
        // console.logBlogs(this.blogs);
        console.log('this user has written the following blogs:')
        this.blogs.forEach(blog => {
            console.log(blog)
        });
    }
};

user.logBlogs();
console.log(this);
