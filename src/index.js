import './styles.css'
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

const user = {nam:"",age:'',}

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
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      const error = generateError("Cannot be blank");
      form[i].parentElement.insertBefore(error, fields[i]);
    }
  }
};

const chekPasswordMatch = function (params) {
  if (password.value !== confirmPassword.value) {
    const error = generateError("Must be equel to password");
    confirmPassword.parentElement.insertBefore(error, confirmPassword);
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  removeValidation();
  chekFieldsPresence();
  chekPasswordMatch();

  console.log("Клик прошёл на валидацию");
  console.log("first name", firstName.value);
  console.log("lastName", lastName.value);
  console.log("login", login.value);
  console.log("email", email.value);
  console.log("companyName", companyName.value);
  console.log("password", password.value);
  console.log("confirmPassword", confirmPassword.value);
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
