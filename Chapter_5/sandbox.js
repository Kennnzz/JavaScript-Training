// object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30},
//     { title: '10 things to make with marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'crystal', // key value pairs
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        { title: '10 things to make with marmite', likes: 50}
    ],
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
            console.log(blog.title, blog.likes)
        });
    }
};

user.logBlogs();