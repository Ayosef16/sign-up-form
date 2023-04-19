const userPassword = document.querySelector('#user-password');
const confirmPassword = document.querySelector('#confirm-password');
const error = document.querySelector('.error');
const form = document.getElementById('form');


form.addEventListener("submit", (e) => {
    if(userPassword.value !== confirmPassword.value) {
        error.textContent = "*Password doesn't match, try again";
        userPassword.classList.add('red-border');
        confirmPassword.classList.add('red-border');
        e.preventDefault();
    }
    else{
        userPassword.classList.remove('red-border');
        confirmPassword.classList.remove('red-border');
    }
})