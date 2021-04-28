
const isValidEmail = (email) => {
  const RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RegExp.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return RegExp.test(String(password).toLowerCase());
};

const form = document.querySelector('form');
const fnInput = document.getElementsByName('firstName');
const lnInput = document.getElementsByName('lastName');



form.addEventListener('submit', (e) => {
  e.preventDefault();
  
});



