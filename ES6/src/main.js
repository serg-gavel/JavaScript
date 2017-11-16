class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    register(){
        console.log(this.username+ ' is now registered');
    }
}

let bob = new User('bob', 'bob@gmail.com', '21412ssa1');
bob.register();