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

firstName.onblur = function () {
  if (firstName.value === '') {
    firstName.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (!firstName.value.match(lettersOnly)) {
    firstName.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('Incorrect format of the name! Required letters only.');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else {
    user.Name = firstName.value;
    this.classList.add('valid');
  }
};

firstName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    removeValidation();
  }
};
//====================================================================================
//======================================Валидация Last Name

lastName.onblur = function () {
  if (lastName.value === '') {
    lastName.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (!lastName.value.match(lettersOnly)) {
    // не email
    lastName.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('Incorrect format of the Last Name! Required letters only.');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

lastName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//==============================================================
//======================================Валидация Login
login.onblur = function () {
  if (login.value === '') {
    login.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    login.parentNode.insertBefore(error, login.nextSibling);
  } else {
    this.classList.add('valid');
    user.login = login.value;
  }
};

login.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};
//===============================================================================
//======================================Валидация Email
email.onblur = function () {
  if (email.value === '') {
    email.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (!email.value.match(emailValidation)) {
    email.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('Incorrect format of the Email!');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else {
    user.Email = email.value;
    this.classList.add('valid');
  }
};

email.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//=============================================================================

//=====================================================Валидация Company Name
companyName.onblur = function () {
  if (companyName.value === '') {
    companyName.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field cannot be empty.');
    companyName.parentNode.insertBefore(error, companyName.nextSibling);
  } else {
    user.Company = companyName.value;
    this.classList.add('valid');
  }
};

companyName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//===================================================================================
// Password Uniqueness ============================================================

password.onblur = function () {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (password.value === '') {
    password.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (!password.value.match(regex)) {
    password.classList.add('invalid');
    this.classList.remove('valid');
    // password.classList.remove('valid');
    const error = generateError(
      'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)',
    );
    password.parentNode.insertBefore(error, password.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

password.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//=================================================================================
//===================================================PasswordMatch

confirmPassword.onblur = function () {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (confirmPassword.value === '') {
    confirmPassword.classList.add('invalid');
    this.classList.remove('valid');
    const error = generateError('This field is required');
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
  } else if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add('invalid');
    this.classList.remove('valid');
    // confirmPassword.classList.remove('valid');
    const error = generateError('Must be equal to password');
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
  } else if (password.value === confirmPassword.value) {
    this.classList.add('valid');
  }
};

confirmPassword.onfocus = function () {
  if (this.classList.contains('invalid')) {
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};
//=================================================================================
form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (
    firstName.value === '' ||
    lastName.value === '' ||
    login.value === '' ||
    email.value === '' ||
    password.value === '' ||
    confirmPassword.value === ''
  ) {
    return addClassWrapperSelect.classList.remove('show');
  } else if (
    firstName.classList.contains('invalid') ||
    lastName.classList.contains('invalid') ||
    login.classList.contains('invalid') ||
    email.classList.contains('invalid') ||
    password.classList.contains('invalid') ||
    confirmPassword.classList.contains('invalid')
  ) {
    return addClassWrapperSelect.classList.remove('show');
  } else {
    move.classList.add('moving');
    addClassWrapperSelect.classList.add('show');
  }
});
