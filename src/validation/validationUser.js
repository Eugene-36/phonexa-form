const form = document.querySelector('.formWithValidation');
const firstName = form.querySelector('.first-name');
const lastName = form.querySelector('.last-name');
const login = form.querySelector('.login');
const email = form.querySelector('.email');
const companyName = form.querySelector('.company-name');
const password = form.querySelector('.password');
const confirmPassword = form.querySelector('.passwordConfirmation');
const move = form.querySelector('.wrapper');
const addClassWrapperSelect = form.querySelector('.wrapper-select');

firstName.addEventListener('blur', userName);
lastName.addEventListener('blur', userLastName);
login.addEventListener('blur', userLogin);
email.addEventListener('blur', userEmail);
password.addEventListener('blur', chekPasswordUniqueness);
confirmPassword.addEventListener('blur', chekPasswordMatch);

export const user = {
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

const lettersOnly = /^[A-Za-z]+$/;
const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function userName() {
  //====================================Валидация First Name
  if (firstName.value === '') {
    firstName.classList.add('invalid');
    firstName.classList.remove('valid');
    const error = generateError('This field is required');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
    $('.error').next().html('');
  } else if (!firstName.value.match(lettersOnly)) {
    firstName.classList.add('invalid');
    firstName.classList.remove('valid');
  } else {
    firstName.classList.add('valid');
    firstName.classList.remove('invalid');
    user.Name = firstName.value;
    removeValidation();
  }
}
function userLastName() {
  //======================================Валидация Last Name
  if (lastName.value === '') {
    lastName.classList.add('invalid');
    lastName.classList.remove('valid');
    const error = generateError('This field is required');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
    $('.error').next().html('');
  } else if (!lastName.value.match(lettersOnly)) {
    lastName.classList.add('invalid');
    lastName.classList.remove('valid');
  } else if (lastName.value.match(lettersOnly)) {
    lastName.classList.add('valid');
    lastName.classList.remove('invalid');
    removeValidation();
  }
}
function userLogin() {
  //======================================Валидация Login
  if (login.value === '') {
    login.classList.add('invalid');
    login.classList.remove('valid');
    const error = generateError('This field is required');
    login.parentNode.insertBefore(error, login.nextSibling);
    $('.error').next().html('');
  } else if (!login.value.match(lettersOnly)) {
    login.classList.add('invalid');
    login.classList.remove('valid');
  } else if (login.value.match(lettersOnly)) {
    login.classList.add('valid');
    login.classList.remove('invalid');
    user.login = login.value;
    removeValidation();
  }
}
function userEmail() {
  //======================================Валидация Email
  if (email.value === '') {
    email.classList.add('invalid');
    email.classList.remove('valid');
    const error = generateError('This field is required');
    email.parentNode.insertBefore(error, email.nextSibling);
    $('.error').next().html('');
  } else if (!email.value.match(emailValidation)) {
    email.classList.add('invalid');
    email.classList.remove('valid');
  } else if (email.value.match(emailValidation)) {
    email.classList.add('valid');
    email.classList.remove('invalid');
    user.Email = email.value;
    removeValidation();
  }
}

const chekPasswordMatch = function (params) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add('invalid');
    confirmPassword.classList.remove('valid');
    const error = generateError('Must be equal to password');
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
    $('.error').next().html('');
  } else if (confirmPassword.value === '') {
    confirmPassword.classList.add('invalid');
    confirmPassword.classList.remove('valid');
    const error = generateError('This field is required');
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
  } else if (password.value === confirmPassword.value) {
    confirmPassword.classList.add('valid');
    confirmPassword.classList.remove('invalid');
    removeValidation();
  }
};

const chekPasswordUniqueness = function (params) {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (!password.value.match(regex)) {
    password.classList.add('invalid');
    password.classList.remove('valid');
    const error = generateError(
      'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)',
    );
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (password.value === '') {
    password.classList.add('invalid');
    password.classList.remove('valid');
    const error = generateError('This field is required');
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (password.value.match(regex)) {
    password.classList.add('valid');
    password.classList.remove('invalid');
    removeValidation();
  }
};

const fieldsValidation = function () {
  userName();
  userLastName();
  userLogin();
  userEmail();
  removeValidation();
  chekPasswordMatch();
  chekPasswordUniqueness();
  user.Company = companyName.value;
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  fieldsValidation();

  if (
    firstName.value &&
    lastName.value &&
    login.value &&
    email.value &&
    password.value &&
    confirmPassword.value &&
    password.value === confirmPassword.value
  ) {
    move.classList.add('moving');
    addClassWrapperSelect.classList.add('show');
  }
});
