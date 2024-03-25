const entrySubmission = document.querySelector('#submitBlog');
const username = document.querySelector('#uName');
const blogTitle = document.querySelector('#bTitle');
const content = document.querySelector('#content');


entrySubmission.addEventListener('submit', function (event) {
    event.preventDefault();

    if (username != "" && blogTitle != "" && content != "") {
        const blogEntry = {
            username: username.value.trim(),
            title: blogTitle.value.trim(),
            blogPost: content.value
        };

        console.log(blogEntry);
        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    }
});
