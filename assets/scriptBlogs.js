let blogPost = [];
const theme = document.querySelector('#themeMode');
const blogThread = document.querySelector('#blogThread');
let isDark = true;
let userName, title, comment = "";
const childUser = document.createElement('p');
const childTitle = document.createElement('p');
const childComment = document.createElement('p');
/*
const h1El = document.createElement('h1');
h1El.textContent = 'Welcome to my page';
body.appendChild(h1El);
*/
function renderBlogs() {
    //Creates variable in order to pull blog information from local storage
    blogPost = JSON.parse(localStorage.getItem('blogEntry'));

    for (let i = 0; i < blogPost.length; i++) {
        userName = blogPost[i].username;
        title = blogPost[i].title;
        comment = blogPost[i].blogPost;

        console.log(userName);

        childUser.textContent = `Username: ${userName}`;
        childTitle.textContent = `Title: ${title}`;
        childComment.textContent = `Comment: ${comment}`;

        blogThread.appendChild(childUser);
        blogThread.appendChild(childTitle);
        blogThread.appendChild(childComment);
    }

}


// The init() function fires when the page is loaded
function init() {
    renderBlogs();
}

init();

//Code controls whether page is in light or dark mode
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