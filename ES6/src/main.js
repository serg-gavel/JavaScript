//CLASS
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static countUsers(){
        console.log('There are 50 users');
    }

    register(){
        console.log(this.username+ ' is now registered');
    }
}

// let bob = new User('bob', 'bob@gmail.com', '21412ssa1');
// bob.register();
//
// User.countUsers();

class Member extends User{
    constructor(username, email, password, memberPackage ){
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+' package');
    }
}

let mike = new Member('mike','mike@hotmail.com','1221214','"Standard"');
mike.getPackage();
mike.register();

// TEMPLATE
let name = 'John';
let lastName = "Doe";
function makeUppercase(word) {
    return word.toUpperCase();
}

let template = `
<h1>${makeUppercase('Hello')}, ${name.toUpperCase()} ${lastName}</h1>
<p>This is a simple template in JavaScript</p>
`;

document.getElementById('template').innerHTML = template;