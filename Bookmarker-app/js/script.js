// Body on load
window.onload = fetchBookmarks();

// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

// Save bookmark
function saveBookmark(e) {
    e.preventDefault();

    // Get form values
    var siteName = document.getElementById('siteName').value;
    var siteURL = document.getElementById('siteURL').value;


    var bookmark = {
        name: siteName,
        url: siteURL
    };
    console.log(bookmark);


    // Local storage Test
    //   localStorage.setItem('test', 'Hello World!');
    //   console.log(localStorage.getItem('test'));
    //   localStorage.removeItem('test');
    //   console.log(localStorage.getItem('test'));

    // Test if bookmarks is null
    if(localStorage.getItem('bookmarks') === null){
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }else{
        // Get bookmarks from localStorage
        bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    
}

// Fetch bookmarks
function fetchBookmarks() {
    // Get bookmarks from localStorage
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // get output id
    var bookmarksResults = document.getElementById('bookmarksResults');

    // Build output
    bookmarksResults.innerHTML = '';
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += name;
    }
}