document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            var user = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(user.name);
            var output ='';

            output += '<ul>'+
                        '<li><strong>ID: </strong>'+user.id+'</li>'+
                        '<li><strong>Name: </strong>'+user.name+'</li>'+
                        '<li><strong>Email: </strong>'+user.email+'</li>'+
                       '</ul>';
            document.getElementById('user').innerHTML = output;
        }
        else if(this.status === 404){
            console.log('404 (Not found)');
        }
    };
    xhr.send();
}

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            var users = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(users.name);
            var output ='';

            //for in loop
            for(var i in users){
                // for in hasOwnProperty check
                if (users.hasOwnProperty(i)) {
                    output += '<ul>'+
                                '<li><strong>ID: </strong>'+users[i].id+'</li>'+
                                '<li><strong>Name: </strong>'+users[i].name+'</li>'+
                                '<li><strong>Email: </strong>'+users[i].email+'</li>'+
                              '</ul>';

                }
            }

            document.getElementById('users').innerHTML = output;
        }
        else if(this.status === 404){
            console.log('404 (Not found)');
        }
    };
    xhr.send();
}