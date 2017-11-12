document.getElementById('button').addEventListener('click', loadText);

function loadText() {
// Create XHR Object
    var xhr = new XMLHttpRequest();
    // OPEN - type, url/file, async(true or false)
    xhr.open('GET', 'sample.txt', true);

    // OPTIONAL - used fro loaders
    xhr.onprogress = function () {
        console.log('READYSTATE: ', xhr.readyState);
    };

    xhr.onload = function () {
        // 'this.status' the same like 'xhr.status'
        if(this.status === 200){
            // console.log(this.responseText);
        document.getElementById('text').innerHTML = this.responseText;

        }
    };
    // Delete text
     document.getElementById('button-delete').addEventListener('click', deleteText);
     function deleteText() {
         document.getElementById('text').innerHTML = ' ';
         // console.log('delete');
    }

    xhr.onerror = function () {
      console.log('Request Error...');
    };


    // xhr.onreadystatechange = function () {
    //     if(this.readyState === 4 && this.status === 200){
    //         console.log(this.responseText);
    //         // console.log('READYSTATE: ', xhr.readyState);
    //     }
    // };

    // HTTP Statuses :
    // 200: 'OK'
    // 403: 'Forbidden'
    // 200: 'Not Found'

    //readyState values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // Sends request
    xhr.send();
}
