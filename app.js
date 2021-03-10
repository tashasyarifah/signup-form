const floatName = (() => {
  //add active class
  const handleFocus = e => {
    const target = e.target;
    target.parentNode.classList.add('active');
    target.setAttribute('placeholder');
  };

  //off active class
  const handleBlur = e => {
    const target = e.target;
    if (!target.value) {
      target.parentNode.classList.remove('active');
    }

    target.removeAtribute('placeholder');
  };

  //register events
  const bindEvents = element => {
    const floatPlace = element.querySelector('input');
    floatPlace.addEventListener('focus', handleFocus);
    floatPlace.addEventListener('blur', handleBlur);
  };

  //DOM element
  const init = () => {
    const floatBoxes = document.querySelectorAll('.input');

    floatBoxes.forEach(element => {
      if (element.querySelector('input').value) {
        element.classList.add('active');
      }

      bindEvents(element);
    });
  };

  return {
    init: init,
  };
})();

floatName.init();
