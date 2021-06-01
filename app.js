let form = document.getElementById('form');
let fname = document.getElementById('firstName');
let lname = document.getElementById('lastName');
let email = document.getElementById('email');
let pwd = document.getElementById('new-password');

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
  let formTeam = input.parentElement;
  formTeam.classList.add("form__error");
  let text = formTeam.querySelector(".form__text");
  text.innerText = message;
};

function successValidation(input) {
  let formTeam = input.parentElement;

  formTeam.classList.remove("form__error");
}

