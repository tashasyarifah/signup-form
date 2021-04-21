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
    checkError(firstNameValue, 'First Name cannot be empty');
  }

  if (lastNameValue === '') {
    checkError(lastNameValue, 'Last Name cannot be empty');
  }

  if (emailValue === '') {
    checkError(emailValue, 'Email cannot be empty');
  } else if(!email_reg.test(emailValue)) {
    checkError(emailValue, 'Email is not validate');
  }

  if (passwordlValue === '') {
    checkError(passwordValue, 'Password cannot be empty');
  } else if (!pass_reg.test(passwordValue)) {
    checkError(passwordValue, 'Password min 8 characters');
  } 
}

function checkError(input, errorText) {
  let field = input.parentElement;
  field.classList.add('field__error');
  let text = field.querySelector('.field__text');
  text.innerText = errorText;
}
