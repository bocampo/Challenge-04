const entrySubmission = document.querySelector('#submitBlog');
const username = document.querySelector('#uName');
const blogTitle = document.querySelector('#bTitle');
const content = document.querySelector('#content');
const blogThread = document.querySelector('#blogThread');
const theme = document.querySelector('#themeMode');
let isDark = true;

let blogEntry = [];

entrySubmission.addEventListener('click', function (event) {
    event.preventDefault();

    //Checks if any field in the form are empty
    if (username.value == '' || blogTitle.value == '' || content.value == '') {
        window.alert('No field should remain empty. Please complete the entire form and then click Submit.');
    }
    //Submits form to local storage
    else {
        blogEntry.push({
            username: username.value.trim(),
            title: blogTitle.value.trim(),
            blogPost: content.value
        });

        localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
        window.open("./blogPage.html", "_self");
    }
});


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