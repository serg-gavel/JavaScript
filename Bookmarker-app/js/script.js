//Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

//Save bookmark
function saveBookmark(e) {
    //Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;


    var bookmark = {
        name: siteName,
        url: siteURL
    };

    console.log(bookmark);



        e.preventDefault();
    
}