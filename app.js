const form = document.getElementById('form');
const fnInput = document.getElementById('firstName');
const lnInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const pwdInput = document.getElementById('new-password');

const emailError = document.querySelector('#email + span.error');

emailInput.addEventListener('input', function (e) {
  if(emailInput.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
})



form.addEventListener('submit', (e) => {
  if(!emailInput.validity.valid) {
    showError();
  }
  e.preventDefault();
});

function showError() {
  if(emailInput.validity.valueMissing) {
    emailError.textContent = 'Email cannot be empty';
  } else if(emailInput.validity.typeMismatch) {
    emailError.textContent = 'This is not an email';
  }

  emailError.className = 'error active';
}



