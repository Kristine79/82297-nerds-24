  var contactlink = document.querySelector('.modal-write-us');
  var popup = document.querySelector('.contact-form');
  var close = popup.querySelector('.contact-close');
  var name = popup.querySelector('.name');
  var form = popup.querySelector('form');
  var email = popup.querySelector('.email');
  var isStorageSupport = true;
  var storage = '';
  try {
    storage = localStorage.getItem('name');
  } catch (err) {
    isStorageSupport = false;
  }
  contactlink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('contact-show');
  });
  close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('contact-show');
    popup.classList.remove('contact-error');
    popup.offsetWidth = popup.offsetWidth;
    if (storage) {
      name.value = storage;
      email.focus();
    } else {
      name.focus();
    }
  });
  form.addEventListener('submit', function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      popup.classList.add('contact-error');
    } else if (isStorageSupport);
      localStorage.setItem("login", login.value);
  });
  window.addEventListener('keydown', function (evt) {
     if (evt.keyCode === 27 && popup.classList.contains('contact-show')) {
      evt.preventDefault();
        popup.classList.remove('contact-show');
        popup.classList.remove('contact-error');
      }

  });
