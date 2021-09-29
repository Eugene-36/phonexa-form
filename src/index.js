import "./styles.css";
const form = document.querySelector(".formWithValidation");
const validateBtn = form.querySelector(".validateBtn");
const firstName = form.querySelector(".first-name");
const lastName = form.querySelector(".last-name");
const login = form.querySelector(".login");
const email = form.querySelector(".email");
const companyName = form.querySelector(".company-name");
const password = form.querySelector(".password");
const confirmPassword = form.querySelector(".passwordConfirmation");
const fields = form.querySelectorAll(".fields");

const user = {
  Name: "",
  login: "",
  Email: "",
  Company: "",
  Department: "",
  "Job Title": "",
};

//console.log((user.Email = "dsadas"));
//console.log(user);

const generateError = function (text) {
  const error = document.createElement("div");
  error.className = "error";
  error.style.color = "red";
  error.innerHTML = text;
  return error;
};

const removeValidation = function (params) {
  const errors = form.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
};
const chekFieldsPresence = function (params) {
  // for (let i = 0; i < fields.length; i++) {
  //   if (!fields[i].value) {
  //     const error = generateError("Cannot be blank");
  //     form[i].parentElement.insertBefore(error, fields[i]);
  //   }
  // }
  // //typeof(str)!=='string'
  // if (typeof firstName.value !== "string" && "") {
  //   return true;
  // } else {
  //   const error = generateError("Required");
  //   firstName.parentNode.insertBefore(error, fields.nextSibling);
  // }
  // if (typeof lastName.value !== "string" && "") {
  //   return true;
  // } else {
  //   const error = generateError("Required");
  //   lastName.parentNode.insertBefore(error, fields.nextSibling);
  // }
};

const chekPasswordMatch = function (params) {
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("invalid");
    const error = generateError("Must be equal to password");
    confirmPassword.parentNode.insertBefore(error, confirmPassword.nextSibling);
  } else if (password.value === confirmPassword.value) {
    confirmPassword.classList.remove("invalid");
  }
};

const chekPasswordUniqueness = function (params) {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;
  if (!password.value.match(regex)) {
    password.classList.add("invalid");
    const error = generateError(
      "Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)",
    );
    password.parentNode.insertBefore(error, password.nextSibling);
  } else if (password.value.match(regex)) {
    password.classList.remove("invalid");
  }
};

const fieldsValidation = function () {
  //тут надо глянуть

  //First name, last na m
  const lettersOnly = /^[A-Za-z]+$/;

  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!firstName.value.match(lettersOnly)) {
    firstName.classList.add("invalid");
    const error = generateError("This field is required");
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (firstName.value.match(lettersOnly)) {
    firstName.classList.remove("invalid");

    //Записываем в объект данные
    user.Name = firstName.value;

    //===================
  }
  if (!lastName.value.match(lettersOnly)) {
    lastName.classList.add("invalid");
    const error = generateError("This field is required");
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (lastName.value.match(lettersOnly)) {
    lastName.classList.remove("invalid");
  }
  //===================================================
  // Login
  if (!login.value.match(lettersOnly)) {
    login.classList.add("invalid");
    const error = generateError("This field is required");
    login.parentNode.insertBefore(error, login.nextSibling);
    //login.classList.add("invalid")
  } else if (login.value.match(lettersOnly)) {
    login.classList.remove("invalid");

    //Записываем в объект данные
    user.login = login.value;
  }
  //===================================================
  // Email

  if (!email.value.match(emailValidation)) {
    email.classList.add("invalid");
    const error = generateError("This field is required");
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (email.value.match(emailValidation)) {
    email.classList.remove("invalid");

    //Записываем в объект данные
    user.Email = email.value;
  }
  console.log(user);
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  removeValidation();
  chekFieldsPresence();
  chekPasswordMatch();
  fieldsValidation();
  chekPasswordUniqueness();
  console.log("Клик прошёл на валидацию");
  console.log("first name", firstName.value);
  console.log("lastName", lastName.value);
  console.log("login", login.value);
  console.log("email", email.value);
  console.log("companyName", companyName.value);
  console.log("password", password.value);
  console.log("confirmPassword", confirmPassword.value);

  form.reset();
});
//====================== css

//==============================================
// import fetchObj from "./js/fetch-pag";
// import libs from "./js/libs.js";
// import "./styles.css";
// import x from "./js/refs.js";
// import just from "./js/try-task.js";

// const { form, searchBtn, container, input, loadMore } = x;

// console.log(form, searchBtn, container, input);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const inputValue = e.target.elements.query.value;

//   fetchObj.query = inputValue;
//   fetchObj.reset();

//   fetchObj.getfetch(container);

//   container.innerHTML = "";

//   // Чистка инпута
//   input.value = "";
//   loadMore.classList.remove("isHidden");
// });

// loadMore.addEventListener("click", () => {
//   fetchObj.setPage();
//   console.log("все ок ");

//   fetchObj.getfetch(container);
// });

console.log("Норм работает");
