const entrySubmission = document.querySelector('#submitBlog');
const username = document.querySelector('#uName');
const blogTitle = document.querySelector('#bTitle');
const content = document.querySelector('#content');
const blogThread = document.querySelector('#blogThread');

entrySubmission.addEventListener('submit', function (event) {
    event.preventDefault();

    //Checks if any field in the form are empty
    if (username.value == '' || blogTitle.value == '' || content.value == '') {
        window.alert('No field should remain empty. Please complete the entire form and then click Submit.');
    }
    //Submits form to local storage
    else {
        const blogEntry = {
            username: username.value.trim(),
            title: blogTitle.value.trim(),
            blogPost: content.value
        };

        console.log(blogEntry);
        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
        window.open("./blogPage.html", "_self");
    }
});


function renderBlogs() {
    //Creates variable in order to pull blog information from local storage
    const blogPost = JSON.parse(localStorage.getItem('blogEntry'));

    document.getElementById('uName').innerHTML = blogPost.username;
    document.getElementById('bTitle').innerHTML = blogPost.blogTitle;
    document.getElementById('content').innerHTML = blogPost.content;
}

// The init() function fires when the page is loaded
function init() {
    renderBlogs();
}

init();