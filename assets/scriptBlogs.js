let blogThread = [];
const theme = document.querySelector('#themeMode');
let isDark = true;

function renderBlogs() {
    //Creates variable in order to pull blog information from local storage
    blogThread = JSON.parse(localStorage.getItem('blogEntry'));
    console.log(blogThread[0].username);

    for (let i = 0; i < blogThread.length; i++) {
        document.createElement('p').textContent = "Username: ";
        document.createElement('span').textContent = document.getElementById('uName').innerHTML = blogThread[i].username;

        document.createElement('p').textContent = "Title: ";
        document.createElement('span').textContent = document.getElementById('bTitle').innerHTML = blogThread[i].title;

        document.createElement('p').textContent = "Comment: ";
        document.createElement('span').textContent = document.getElementById('content').innerHTML = blogThread[i].blogPost;

    }
}


// The init() function fires when the page is loaded
function init() {
    renderBlogs();
}

init();

theme.addEventListener('click', function (event) {

    if (isDark) {
        document.querySelector('html').setAttribute('style', 'color: white; background-color:black');
        isDark = false;
    }
    else {
        document.querySelector('html').setAttribute('style', 'color: black; background-color:white');
        isDark = true;
    }
}
);