let blogPost = [];
const theme = document.querySelector('#themeMode');
const blogThread = document.querySelector('#blogThread');
let isDark = true;
let userName, title, comment = "";

function renderBlogs() {
    //Creates variable in order to pull blog information from local storage
    blogPost = JSON.parse(localStorage.getItem('blogEntry'));

    for (let i = 0; i < blogPost.length; i++) {
        let childUser = document.createElement('p');
        let childTitle = document.createElement('p');
        let childComment = document.createElement('p');

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
        blogThread.appendChild(document.createElement('br'));
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