//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save bookmark
function saveBookmark(e) {
    e.preventDefault();

    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;


    var bookmark = {
        name: siteName,
        url: siteURL
    };
    console.log(bookmark);


    //Local storage Test
    //  localStorage.setItem('test', 'Hello World!');
    //  console.log(localStorage.getItem('test'));
    //  localStorage.removeItem('test');
    //  console.log(localStorage.getItem('test'));


    
}