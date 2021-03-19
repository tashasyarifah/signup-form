const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('new-password');

form.addEventListener('submit', e => {
  e.preventDefault();
});

function validateInputs() {
  firstNameValue = firstName.value.trim();
  lastNameValue = lastName.value.trim();
  emailValue = email.value.trim();
  passwordValue = password.value.trim();
}
