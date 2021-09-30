import "./styles.css";
import { array } from "./js/db";
//console.log(array);
const form = document.querySelector(".formWithValidation");
const validateBtn = form.querySelector(".validateBtn");
const move = form.querySelector(".wrapper");
const selectNext = form.querySelector(".select-next");
const firstName = form.querySelector(".first-name");
const lastName = form.querySelector(".last-name");
const login = form.querySelector(".login");
const email = form.querySelector(".email");
const companyName = form.querySelector(".company-name");
const password = form.querySelector(".password");
const confirmPassword = form.querySelector(".passwordConfirmation");
const fields = form.querySelectorAll(".fields");
const addClassWrapperSelect = form.querySelector(".wrapper-select");
const lastBlock = form.querySelector(".check-block");
//const container = form.getElementById("container");
//const sendlocalStorage = form.getElementById("ssss");
let myArray = [];
console.log(form);
// let newMassive = array.map(({ Sales, Marketing, Technology }) =>
//   myArray.push(Sales, Marketing, Technology),
// );
//let retrive = myArray.flatMap(({ Sales, Marketing, Technology }) => Technology);

// for (const [key, value] of Object.entries(array)) {
//   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
// }

const user = {
  Name: "",
  login: "",
  Email: "",
  Company: "",
  Department: "",
  "Job Title": "",
};
let globaloptions = {
  Sales: ["Sales Manager", "Account Manager"],
  Marketing: ["Creative Manager", "Marketing Coordinator", "Content Writer"],
  Technology: [
    "Project Manager",
    "Software Developer",
    "PHP programmer",
    "Front End",
    "Quality Assurance",
  ],
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
  //First name, last na m
  const lettersOnly = /^[A-Za-z]+$/;

  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (firstName.value === "") {
    firstName.classList.add("invalid");
    const error = generateError("This field is required");
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (!firstName.value.match(lettersOnly)) {
    firstName.classList.add("invalid");
    const error = generateError("Invalid field");
    firstName.parentNode.insertBefore(error, firstName.nextSibling);
  } else if (firstName.value.match(lettersOnly)) {
    firstName.classList.remove("invalid");

    //Записываем в объект данные
    user.Name = firstName.value;

    //===================
  }

  if (lastName.value === "") {
    lastName.classList.add("invalid");
    const error = generateError("This field is required");
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (!lastName.value.match(lettersOnly)) {
    lastName.classList.add("invalid");
    const error = generateError("Invalid field");
    lastName.parentNode.insertBefore(error, lastName.nextSibling);
  } else if (lastName.value.match(lettersOnly)) {
    lastName.classList.remove("invalid");
  }
  //===================================================
  // Login

  if (login.value === "") {
    login.classList.add("invalid");
    const error = generateError("This field is required");
    login.parentNode.insertBefore(error, login.nextSibling);
  } else if (!login.value.match(lettersOnly)) {
    login.classList.add("invalid");
    const error = generateError("Invalid field");
    login.parentNode.insertBefore(error, login.nextSibling);
  } else if (login.value.match(lettersOnly)) {
    login.classList.remove("invalid");

    //Записываем в объект данные
    user.login = login.value;
  }
  //===================================================
  // Email

  if (email.value === "") {
    email.classList.add("invalid");
    const error = generateError("This field is required");
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (!email.value.match(emailValidation)) {
    email.classList.add("invalid");
    const error = generateError("Invalid field");
    email.parentNode.insertBefore(error, email.nextSibling);
  } else if (email.value.match(emailValidation)) {
    email.classList.remove("invalid");

    //Записываем в объект данные
    user.Email = email.value;
  }

  //===================================
  //Company Name
  user.Company = companyName.value;
  console.log(user);
};
form.addEventListener("submit", function (e) {
  e.preventDefault();
  removeValidation();
  chekFieldsPresence();
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
    move.classList.add("moving");
    addClassWrapperSelect.classList.add("show");
  }
  // if (!fields.style.borderColor === "red") {
  //   move.classList.add("moving");
  // } else if (fields.style.borderColor === "red") {
  //   return;
  // }

  console.log("Клик прошёл на валидацию");
  console.log("first name", firstName.value);
  console.log("lastName", lastName.value);
  console.log("login", login.value);
  console.log("email", email.value);
  console.log("companyName", companyName.value);
  console.log("password", password.value);
  console.log("confirmPassword", confirmPassword.value);

  // form.reset();
});

$(document).ready(function () {
  $("#first").change(function () {
    let selectedClass = $(this).find("option:selected").attr("class");

    let options = globaloptions[selectedClass];
    console.log(options);
    let newoptions = "";

    for (let i = 0; i < options.length; i++) {
      console.log(options.length);
      newoptions += "<option>" + options[i] + "</option>";
    }

    $("#second").html(newoptions).removeAttr("disabled");
  });

  //Записываем в объект данные
  selectNext.addEventListener("click", () => {
    let data = document.getElementById("first").value;
    let dataOptions = document.getElementById("second").value;
    user.Department = data;
    user["Job Title"] = dataOptions;
    console.log(user);

    if (data && dataOptions) {
      lastBlock.classList.add("show-check");
      addClassWrapperSelect.classList.add("move-left");
    }

    // export function getImages() {
    //   return shuffle(arrImages).map((imgSrc) => {
    //     const img = document.createElement('img');
    //     img.classList.add('gallery__img');
    //     img.src = imgSrc;
    //     img.alt = imgSrc.slice(pathImgGallery.length);
    //     return img;
    //   });
    // }

    let newString = "";
    let p = document.createElement("p");
    for (const [key, value] of Object.entries(user)) {
      newString += "<span>" + `${key}: ${value}` + "</span>";
    }
    $("#container").html(newString);
  });
});

// localStorage.addEventListener("click", () => {
//   const obj = {
//     prop1: "value1",
//     prop2: "value2",
//     prop3: "value3",
//   };

//   let serialObj = JSON.stringify(obj);
//   console.log(serialObj);
//   localStorage.setItem("check", serialObj);
// });

document.querySelector(".send-localStorage")?.addEventListener("click", () => {
  let clear = document.querySelector(".field-position-check");
  localStorage.setItem("currentUser", JSON.stringify(user));

  if (localStorage.getItem("currentUser")) {
    clear.innerHTML = "";

    $("#container").html("<p>" + "Thank You!" + "</p>");
  }
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
