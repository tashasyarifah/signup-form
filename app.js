const form = document.querySelector('form');
const nameInput = document.querySelector('input[name]');

const validateInputs = () => {
  if (!nameInput.value) {
    nameInput.classList.add('invalid');
    nameInput.nextElementSibling.classList.remove('hidden');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});
