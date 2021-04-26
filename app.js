
const isValidEmail = (email) => {
  const RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RegExp.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
  const RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return RegExp.test(String(password).toLowerCase());
};

const form = document.querySelector('form');
const firstName = document.querySelector('input[name="firstName"]');
const lastName = document.querySelector('input[name="lastName"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('hi');
})



