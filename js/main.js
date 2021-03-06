var contactlink = document.querySelector('.modal-write-us');
var popup = document.querySelector('.contact-form');
var form = popup.querySelector('.form');
var close = popup.querySelector('.contact-close');
var inputName = popup.querySelector('.name');
var textarea = popup.querySelector('.letter-text');
var email = popup.querySelector('.email');

contactlink.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('contact-show');
});
close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('contact-show');
  popup.classList.remove('contact-error');
  popup.offsetWidth = popup.offsetWidth;
});
form.addEventListener('submit', function (evt) {
  if (!inputName.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.add('contact-error');
  }
  if (!inputName.value ) {
    inputName.classList.add('error');
  }
  if (!email.value ) {
    email.classList.add('error');
  }
  if (!textarea.value ) {
    textarea.classList.add('error');
  }
});
inputName.addEventListener('input', function() {
  if (!inputName.value ) {
    inputName.classList.add('error');
  } else {
    inputName.classList.remove('error');
  }
});
email.addEventListener('input', function() {
  if (!email.value ) {
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }
});
textarea.addEventListener('input', function() {
  if (!textarea.value ) {
    textarea.classList.add('error');
  } else {
    textarea.classList.remove('error');
  }
});
window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && popup.classList.contains('contact-show')) {
    evt.preventDefault();
    popup.classList.remove('contact-show');
    popup.classList.remove('contact-error');
  }
});
