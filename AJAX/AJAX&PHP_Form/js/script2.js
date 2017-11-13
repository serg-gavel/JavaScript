document.getElementById('button').addEventListener('click', loadUsers);

function loadUsers() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.php', true);

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