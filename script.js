function readMore(postId) {
    const post = document.getElementById(postId);
    if (post.classList.contains('hidden')) {
        post.classList.remove('hidden');
    } else {
        post.classList.add('hidden');
    }
}

document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').classList.remove('hidden');
        document.getElementById('formResponse').textContent = 'Thank you for your feedback, ' + name + '!';

        // Clear the form
        document.getElementById('feedbackForm').reset();
    }
});
