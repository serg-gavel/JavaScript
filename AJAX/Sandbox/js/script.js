document.getElementById('button').addEventListener('click', loadText);

function loadText() {
// Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async(true or false)
    xhr.open('GET', 'sample.txt', true);

    xhr.onload = function () {
        // 'this.status' the same like 'xhr.status'
        if(this.status === 200){
            console.log(this.responseText);
        }
    }
}
// HTTP Statuses :
// 200: 'OK'
// 403: 'Forbidden'
// 200: 'Not Found'