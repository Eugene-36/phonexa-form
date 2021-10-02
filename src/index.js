import './styles.css';

import { array } from './js/db.js';

const form = document.querySelector('.formWithValidation');
const validateBtn = form.querySelector('.validateBtn');
const move = form.querySelector('.wrapper');
const selectNext = form.querySelector('.select-next');
const firstName = form.querySelector('.first-name');
const lastName = form.querySelector('.last-name');
const login = form.querySelector('.login');
const email = form.querySelector('.email');
const companyName = form.querySelector('.company-name');
const password = form.querySelector('.password');
const confirmPassword = form.querySelector('.passwordConfirmation');
const addClassWrapperSelect = form.querySelector('.wrapper-select');
const lastBlock = form.querySelector('.check-block');

const { departments } = array;

const user = {
  Name: '',
  login: '',
  Email: '',
  Company: '',
  Department: '',
  'Job Title': '',
};

const generateError = function (text) {
  const error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
};

const removeValidation = function (params) {
  const errors = form.querySelectorAll('.error');
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};

const chekPasswordMatch = function (params) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add('invalid');
    const error = generateError('Must be equal to password');
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
  } else if (password.value === confirmPassword.value) {
    confirmPassword.classList.remove('invalid');
  }
};

const chekPasswordUniqueness = function (params) {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (!password.value.match(regex)) {
    password.classList.add('invalid');
    const error = generateError(
      'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)',
    );
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (password.value.match(regex)) {
    password.classList.remove('invalid');
  }
};

const fieldsValidation = function () {
  const lettersOnly = /^[A-Za-z]+$/;
  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (firstName.value === '') {
    firstName.classList.add('invalid');
    const error = generateError('This field is required');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (!firstName.value.match(lettersOnly)) {
    firstName.classList.add('invalid');
    const error = generateError('Invalid field');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (firstName.value.match(lettersOnly)) {
    firstName.classList.remove('invalid');

    user.Name = firstName.value;
  }

  if (lastName.value === '') {
    lastName.classList.add('invalid');
    const error = generateError('This field is required');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (!lastName.value.match(lettersOnly)) {
    lastName.classList.add('invalid');
    const error = generateError('Invalid field');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (lastName.value.match(lettersOnly)) {
    lastName.classList.remove('invalid');
  }

  if (login.value === '') {
    login.classList.add('invalid');
    const error = generateError('This field is required');
    login.parentNode.insertBefore(error, login.nextSibling);
  } else if (!login.value.match(lettersOnly)) {
    login.classList.add('invalid');
    const error = generateError('Invalid field');
    login.parentNode.insertBefore(error, login.nextSibling);
  } else if (login.value.match(lettersOnly)) {
    login.classList.remove('invalid');

    user.login = login.value;
  }

  if (email.value === '') {
    email.classList.add('invalid');
    const error = generateError('This field is required');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (!email.value.match(emailValidation)) {
    email.classList.add('invalid');
    const error = generateError('Invalid field');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (email.value.match(emailValidation)) {
    email.classList.remove('invalid');

    user.Email = email.value;
  }

  user.Company = companyName.value;
};
form.addEventListener('submit', function (e) {
  e.preventDefault();
  removeValidation();

  chekPasswordMatch();
  fieldsValidation();
  chekPasswordUniqueness();

  if (
    firstName.value &&
    lastName.value &&
    login.value &&
    email.value &&
    password.value === confirmPassword.value
  ) {
    move.classList.add('moving');
    addClassWrapperSelect.classList.add('show');
  }
});

$(document).ready(function () {
  $('#first').change(function () {
    let selectedClass = $(this).find('option:selected').attr('class');

    let options = departments[selectedClass];
    console.log(options);
    let newoptions = '';

    for (let i = 0; i < options.length; i++) {
      console.log(options.length);
      newoptions += '<option>' + options[i] + '</option>';
    }

    $('#second').html(newoptions).removeAttr('disabled');
  });

  selectNext.addEventListener('click', () => {
    let data = document.getElementById('first').value;
    let dataOptions = document.getElementById('second').value;
    user.Department = data;
    user['Job Title'] = dataOptions;
    console.log(user);

    if (data && dataOptions) {
      lastBlock.classList.add('show-check');
      addClassWrapperSelect.classList.add('move-left');
    }

    let newString = '';
    let p = document.createElement('p');
    for (const [key, value] of Object.entries(user)) {
      newString += '<span>' + `${key}: ${value}` + '</span>';
    }
    $('#container').html(newString);
  });
});

document.querySelector('.send-localStorage')?.addEventListener('click', () => {
  let clear = document.querySelector('.field-position-check');
  localStorage.setItem('currentUser', JSON.stringify(user));

  if (localStorage.getItem('currentUser')) {
    clear.innerHTML = '';

    $('#container').html('<p>' + 'Thank You!' + '</p>');
  }
});
document.getElementById('edit').addEventListener('click', () => {
  move.classList.remove('moving');
  lastBlock.classList.remove('show-check');
});
validateBtn.addEventListener('click', () => {
  addClassWrapperSelect.classList.remove('move-left');
});
