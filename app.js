const form = document.getElementById('form');
const fname = document.getElementById('firstName');
const lname = document.getElementById('lastName');
const email = document.getElementById('email');
const pwd = document.getElementById('new-password');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {

  //trim
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const pwdValue = pwd.value.trim();
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  //First name validation
  if (fnameValue === "") {
    errorValidation(fname, 'First Name cannot be empty');
  } else {
    successValidation(fname);
  }

  //Last Name validation
  if (lnameValue === "") {
    errorValidation(lname, 'Last Name cannot be empty');
  } else {
    successValidation(lname);
  }

  //Email validation
  if (emailValue === "") {
    errorValidation(email, 'Email cannot be empty');
  } else if (!emailValue.match(emailPattern)) {
    errorValidation(email, "Looks like this is not an email");
  } else {
    successValidation(email);
  }

  //Password validation
  if (pwdValue === "") {
    errorValidation(pwd, 'Password cannot be empty');
  } else {
    successValidation(pwd);
  }

}

function errorValidation(input, message) {
  const span = input.nextElementSibling;

  span.innerText = message;
  input.className = '.icon';
  span.className = '.error';

};

function successValidation(input) {
  input.className = '';
  input.nextElementSibling.className = '';
  input.nextElementSibling.innerHTML = '';
}




