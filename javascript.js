let passwordInput = document.getElementById('user_password');
let confirmPasswordInput = document.getElementById('confirm_password');
const createButton = document.getElementById('create-btn');

createButton.addEventListener('click', ()=> {
    confirmPassword();
})

function confirmPassword() {
    if (passwordInput !== confirmPasswordInput) {
        alert('Password does not match');
    } else alert('Passwords match!');
};