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
const vld = form.querySelector('.validateBtn');

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

// function userName() {
//   //====================================Валидация First Name
//   if (firstName.value === '') {
//     firstName.classList.add('invalid');
//     firstName.classList.remove('valid');
//     const error = generateError('This field is required');
//     firstName.parentNode.insertBefore(error, firstName.nextSibling);
//     $('.error').next().html('');
//   } else if (!firstName.value.match(lettersOnly)) {
//     firstName.classList.add('invalid');
//     firstName.classList.remove('valid');
//   } else {
//     firstName.classList.add('valid');
//     firstName.classList.remove('invalid');
//     user.Name = firstName.value;
//     removeValidation();
//   }
// }

firstName.onblur = function () {
  if (firstName.value === '') {
    firstName.classList.add('invalid');
    const error = generateError('This field is required');
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (!firstName.value.match(lettersOnly)) {
    // не email
    firstName.classList.add('invalid');
    const error = generateError(
      'Incorrect format of the name! Required letters only.',
    );
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

firstName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};
//====================================================================================
//======================================Валидация Last Name
// function userLastName() {
//   if (lastName.value === '') {
//     lastName.classList.add('invalid');
//     lastName.classList.remove('valid');
//     const error = generateError('This field is required');
//     lastName.parentNode.insertBefore(error, lastName.nextSibling);
//     $('.error').next().html('');
//   } else if (!lastName.value.match(lettersOnly)) {
//     lastName.classList.add('invalid');
//     lastName.classList.remove('valid');
//   } else if (lastName.value.match(lettersOnly)) {
//     lastName.classList.add('valid');
//     lastName.classList.remove('invalid');
//     removeValidation();
//   }
// }

lastName.onblur = function () {
  if (lastName.value === '') {
    lastName.classList.add('invalid');
    const error = generateError('This field is required');
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (!lastName.value.match(lettersOnly)) {
    // не email
    lastName.classList.add('invalid');
    const error = generateError(
      'Incorrect format of the Last Name! Required letters only.',
    );
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

lastName.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//==============================================================
//======================================Валидация Login
// function userLogin() {
//   if (login.value === '') {
//     login.classList.add('invalid');
//     login.classList.remove('valid');
//     const error = generateError('This field is required');
//     login.parentNode.insertBefore(error, login.nextSibling);
//     $('.error').next().html('');
//   } else if (!login.value.match(lettersOnly)) {
//     login.classList.add('invalid');
//     login.classList.remove('valid');
//   } else if (login.value.match(lettersOnly)) {
//     login.classList.add('valid');
//     login.classList.remove('invalid');
//     user.login = login.value;
//     removeValidation();
//   }
// }
login.onblur = function () {
  if (login.value === '') {
    login.classList.add('invalid');
    const error = generateError('This field is required');
    login.parentNode.insertBefore(error, login.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

login.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};
//===============================================================================
//======================================Валидация Email
// function userEmail() {
//   if (email.value === '') {
//     const error = generateError('This field is required');
//     email.parentNode.insertBefore(error, email.nextSibling);
//     email.classList.add('invalid');
//     email.classList.remove('valid');
//     $('.error').next().html('');
//   } else if (!email.value.match(emailValidation)) {
//     email.classList.add('invalid');
//     email.classList.remove('valid');
//   } else if (email.value.match(emailValidation)) {
//     email.classList.add('valid');
//     email.classList.remove('invalid');
//     user.Email = email.value;
//     removeValidation();
//   }
// }

email.onblur = function () {
  if (email.value === '') {
    email.classList.add('invalid');
    const error = generateError('This field is required');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (!email.value.match(emailValidation)) {
    email.classList.add('invalid');
    const error = generateError('Incorrect format of the Email!');
    email.parentNode.insertBefore(error, email.nextSibling);
  } else {
    this.classList.add('valid');
  }
};

email.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//=============================================================================
// Password Uniqueness ============================================================

// function chekPasswordUniqueness(params) {
//   const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
//   if (!password.value.match(regex)) {
//     password.classList.add('invalid');
//     password.classList.remove('valid');
//     const error = generateError(
//       'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)',
//     );
//     password.parentNode.insertBefore(error, password.nextSibling);
//     vld.setAttribute('disabled', true);
//     $('.error').next().html('');
//   } else if (password.value === '') {
//     password.classList.add('invalid');
//     password.classList.remove('valid');
//     const error = generateError('This field is required');
//     password.parentNode.insertBefore(error, password.nextSibling);
//   } else if (password.value.match(regex)) {
//     password.classList.add('valid');
//     password.classList.remove('invalid');
//     vld.removeAttribute('disabled', false);
//     removeValidation();
//   }
// }

password.onblur = function () {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (password.value === '') {
    password.classList.add('invalid');
    // password.classList.remove('valid');
    const error = generateError('This field is required');
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (!password.value.match(regex)) {
    password.classList.add('invalid');
    // password.classList.remove('valid');
    const error = generateError(
      'Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)',
    );
    password.parentNode.insertBefore(error, password.nextSibling);
    vld.setAttribute('disabled', true);
    // $('.error').next().html('');
  } else {
    this.classList.add('valid');
  }
};

password.onfocus = function () {
  if (this.classList.contains('invalid')) {
    // удаляем индикатор ошибки, т.к. пользователь хочет ввести данные заново
    this.classList.remove('invalid');
    this.classList.remove('valid');
    removeValidation();
  }
};

//=================================================================================
function chekPasswordMatch(params) {
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
}

function fieldsValidation() {
  userName();
  userLastName();
  userLogin();
  userEmail();
  removeValidation();
  chekPasswordMatch();
  chekPasswordUniqueness();
  user.Company = companyName.value;
}
// firstName.addEventListener('blur', userName);
// lastName.addEventListener('blur', userLastName);
// login.addEventListener('blur', userLogin);
// email.addEventListener('blur', userEmail);
// password.addEventListener('blur', chekPasswordUniqueness);
confirmPassword.addEventListener('blur', chekPasswordMatch);

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
