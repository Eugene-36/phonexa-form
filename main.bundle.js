!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var a=document.querySelector(".formWithValidation"),n=a.querySelector(".first-name"),i=a.querySelector(".last-name"),l=a.querySelector(".login"),s=a.querySelector(".email"),o=a.querySelector(".company-name"),c=a.querySelector(".password"),d=a.querySelector(".passwordConfirmation"),u=a.querySelector(".wrapper"),v=a.querySelector(".wrapper-select"),m=a.querySelector(".validateBtn");n.addEventListener("blur",S),i.addEventListener("blur",g),l.addEventListener("blur",q),s.addEventListener("blur",w),c.addEventListener("blur",E),d.addEventListener("blur",x);var f,p={Name:"",login:"",Email:"",Company:"",Department:"","Job Title":""},y=function(e){var t=document.createElement("div");return t.className="error",t.style.color="red",t.innerHTML=e,t},L=function(e){for(var t=a.querySelectorAll(".error"),r=0;r<t.length;r++)t[r].remove()},b=/^[A-Za-z]+$/,h=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;function S(){if(""===n.value){n.classList.add("invalid"),n.classList.remove("valid");var e=y("This field is required");n.parentNode.insertBefore(e,n.nextSibling),$(".error").next().html("")}else n.value.match(b)?(n.classList.add("valid"),n.classList.remove("invalid"),p.Name=n.value,L()):(n.classList.add("invalid"),n.classList.remove("valid"))}function g(){if(""===i.value){i.classList.add("invalid"),i.classList.remove("valid");var e=y("This field is required");i.parentNode.insertBefore(e,i.nextSibling),$(".error").next().html("")}else i.value.match(b)?i.value.match(b)&&(i.classList.add("valid"),i.classList.remove("invalid"),L()):(i.classList.add("invalid"),i.classList.remove("valid"))}function q(){if(""===l.value){l.classList.add("invalid"),l.classList.remove("valid");var e=y("This field is required");l.parentNode.insertBefore(e,l.nextSibling),$(".error").next().html("")}else l.value.match(b)?l.value.match(b)&&(l.classList.add("valid"),l.classList.remove("invalid"),p.login=l.value,L()):(l.classList.add("invalid"),l.classList.remove("valid"))}function w(){if(""===s.value){s.classList.add("invalid"),s.classList.remove("valid");var e=y("This field is required");s.parentNode.insertBefore(e,s.nextSibling),$(".error").next().html("")}else s.value.match(h)?s.value.match(h)&&(s.classList.add("valid"),s.classList.remove("invalid"),p.Email=s.value,L()):(s.classList.add("invalid"),s.classList.remove("valid"))}function x(e){if(c.value!==d.value){d.classList.add("invalid"),d.classList.remove("valid");var t=y("Must be equal to password");d.parentNode.insertBefore(t,d.nextSibling),$(".error").next().html("")}else if(""===d.value){d.classList.add("invalid"),d.classList.remove("valid");var r=y("This field is required");d.parentNode.insertBefore(r,d.nextSibling)}else c.value===d.value&&(d.classList.add("valid"),d.classList.remove("invalid"),L())}function E(e){var t=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;if(c.value.match(t))if(""===c.value){c.classList.add("invalid"),c.classList.remove("valid");var r=y("This field is required");c.parentNode.insertBefore(r,c.nextSibling)}else c.value.match(t)&&(c.classList.add("valid"),c.classList.remove("invalid"),m.removeAttribute("disabled",!1),L());else{c.classList.add("invalid"),c.classList.remove("valid");var a=y("Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)");c.parentNode.insertBefore(a,c.nextSibling),m.setAttribute("disabled",!0),$(".error").next().html("")}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var l,s=e[Symbol.iterator]();!(a=(l=s.next()).done)&&(r.push(l.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}a.addEventListener("submit",(function(e){e.preventDefault(),S(),g(),q(),w(),L(),x(),E(),p.Company=o.value,n.value&&i.value&&l.value&&s.value&&c.value&&d.value&&c.value===d.value&&(u.classList.add("moving"),v.classList.add("show"))}));var M=document.querySelector(".formWithValidation"),j=M.querySelector(".validateBtn"),B=M.querySelector(".select-next"),k=M.querySelector(".wrapper-select"),N=M.querySelector(".check-block"),O=M.querySelector(".Department"),I=M.querySelector(".wrapper"),P={Sales:["Sales Manager","Account Manager"],Marketing:["Creative Manager","Marketing Coordinator","Content Writer"],Technology:["Project Manager","Software Developer","PHP programmer","Front End","Quality Assurance"]};$(document).ready((function(){$("#first").change((function(){var e=$(this).find("option:selected").attr("class"),t=P[e],r="";if("Department"===e)return O.setAttribute("disabled",!0);for(var a=0;a<t.length;a++)r+="<option>"+t[a]+"</option>";$("#second").html(r).removeAttr("disabled")})),B.addEventListener("click",(function(){var e=document.getElementById("first").value,t=document.getElementById("second").value;p.Department=e,p["Job Title"]=t,e&&t&&(N.classList.add("show-check"),k.classList.add("move-left"));for(var r="",a=(document.createElement("p"),0),n=Object.entries(p);a<n.length;a++){var i=A(n[a],2),l=i[0],s=i[1];r+="<span>"+"".concat(l,": ").concat(s)+"</span>"}$("#container").html(r)}))})),null===(f=document.querySelector(".send-localStorage"))||void 0===f||f.addEventListener("click",(function(){var e=document.querySelector(".field-position-check");localStorage.setItem("currentUser",JSON.stringify(p)),localStorage.getItem("currentUser")&&(e.innerHTML="",$("#container").html("<p>Thank You!</p>"))})),document.getElementById("edit").addEventListener("click",(function(){I.classList.remove("moving"),N.classList.remove("show-check")})),j.addEventListener("click",(function(){k.classList.remove("move-left")}))}]);
//# sourceMappingURL=main.bundle.js.map