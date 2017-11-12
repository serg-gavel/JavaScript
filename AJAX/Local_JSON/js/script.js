document.getElementById('button1').addEventListener('click', loadUser);

function loadUser() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            var user = JSON.parse(this.responseText);
            // console.log(this.responseText);
            console.log(user.name);
        }
        else if(this.status === 404){
            console.log('404 (Not found)');
        }
    };
    xhr.send();
}