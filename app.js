const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('new-password');

const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

form.addEventListener('submit', validateInputs);

function validateInputs(e) {
  e.preventDefault();

  firstNameValue = firstName.value.trim();
  lastNameValue = lastName.value.trim();
  emailValue = email.value.trim();
  passwordValue = password.value.trim();

  if (firstNameValue === '') {
    indicateError(firstNameValue, 'First Name cannot be empty');
  }

  if (lastNameValue === '') {
    indicateError(lastNameValue, 'Last Name cannot be empty');
  }

  if (emailValue === '') {
    indicateError(emailValue, 'Email cannot be empty');
  } else if (!email_reg.test(emailValue)) {
    indicateError(emailValue, 'Email cannot be empty');
  }

  if (passwordlValue === '') {
    indicateError(passwordValue, 'Password cannot be empty');
  } else if (!pass_reg.test(passwordValue)) {
    indicateError(passwordValue, 'Password cannot be empty');
  }
}

function indicateError(input, alertMessages) {
  let formControl = input.parentElement;
  formControl.classList.add('.field__error');
  let alert = formControl.querySelector('.field__error');
  alert.innertText = alertMessages;
}
