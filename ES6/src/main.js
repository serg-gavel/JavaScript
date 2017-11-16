class User{
    constructor(username, email, password){
        thiis.username = username;
        thiis.email = email;
        thiis.password = password;
    }

    register(){
        console.log(this.username+ ' is now registered');
    }
}