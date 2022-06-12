function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();

}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);