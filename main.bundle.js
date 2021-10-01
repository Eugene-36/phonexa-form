!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n;function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t);var l=document.querySelector(".formWithValidation"),o=l.querySelector(".validateBtn"),s=l.querySelector(".wrapper"),c=l.querySelector(".select-next"),u=l.querySelector(".first-name"),d=l.querySelector(".last-name"),v=l.querySelector(".login"),f=l.querySelector(".email"),m=l.querySelector(".company-name"),p=l.querySelector(".password"),y=l.querySelector(".passwordConfirmation"),g=l.querySelector(".wrapper-select"),h=l.querySelector(".check-block"),S={Name:"",login:"",Email:"",Company:"",Department:"","Job Title":""},b={Sales:["Sales Manager","Account Manager"],Marketing:["Creative Manager","Marketing Coordinator","Content Writer"],Technology:["Project Manager","Software Developer","PHP programmer","Front End","Quality Assurance"]},L=function(e){var t=document.createElement("div");return t.className="error",t.style.color="red",t.innerHTML=e,t};l.addEventListener("submit",(function(e){e.preventDefault(),function(e){for(var t=l.querySelectorAll(".error"),r=0;r<t.length;r++)t[r].remove()}(),function(e){if(p.value!==y.value){y.classList.add("invalid");var t=L("Must be equal to password");y.parentNode.insertBefore(t,y.nextSibling)}else p.value===y.value&&y.classList.remove("invalid")}(),function(){var e=/^[A-Za-z]+$/,t=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;if(""===u.value){u.classList.add("invalid");var r=L("This field is required");u.parentNode.insertBefore(r,u.nextSibling)}else if(u.value.match(e))u.value.match(e)&&(u.classList.remove("invalid"),S.Name=u.value);else{u.classList.add("invalid");var n=L("Invalid field");u.parentNode.insertBefore(n,u.nextSibling)}if(""===d.value){d.classList.add("invalid");var a=L("This field is required");d.parentNode.insertBefore(a,d.nextSibling)}else if(d.value.match(e))d.value.match(e)&&d.classList.remove("invalid");else{d.classList.add("invalid");var i=L("Invalid field");d.parentNode.insertBefore(i,d.nextSibling)}if(""===v.value){v.classList.add("invalid");var l=L("This field is required");v.parentNode.insertBefore(l,v.nextSibling)}else if(v.value.match(e))v.value.match(e)&&(v.classList.remove("invalid"),S.login=v.value);else{v.classList.add("invalid");var o=L("Invalid field");v.parentNode.insertBefore(o,v.nextSibling)}if(""===f.value){f.classList.add("invalid");var s=L("This field is required");f.parentNode.insertBefore(s,f.nextSibling)}else if(f.value.match(t))f.value.match(t)&&(f.classList.remove("invalid"),S.Email=f.value);else{f.classList.add("invalid");var c=L("Invalid field");f.parentNode.insertBefore(c,f.nextSibling)}S.Company=m.value}(),function(e){var t=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{9,}$/;if(p.value.match(t))p.value.match(t)&&p.classList.remove("invalid");else{p.classList.add("invalid");var r=L("Required at least one number (0-9), uppercase and lowercase letters (a-Z) and at least one special character (!@#$%^&*~)");p.parentNode.insertBefore(r,p.nextSibling)}}(),u.value&&d.value&&v.value&&f.value&&p.value===y.value&&(s.classList.add("moving"),g.classList.add("show"))})),$(document).ready((function(){$("#first").change((function(){var e=$(this).find("option:selected").attr("class"),t=b[e];console.log(t);for(var r="",n=0;n<t.length;n++)console.log(t.length),r+="<option>"+t[n]+"</option>";$("#second").html(r).removeAttr("disabled")})),c.addEventListener("click",(function(){var e=document.getElementById("first").value,t=document.getElementById("second").value;S.Department=e,S["Job Title"]=t,console.log(S),e&&t&&(h.classList.add("show-check"),g.classList.add("move-left"));for(var r="",n=(document.createElement("p"),0),i=Object.entries(S);n<i.length;n++){var l=a(i[n],2),o=l[0],s=l[1];r+="<span>"+"".concat(o,": ").concat(s)+"</span>"}$("#container").html(r)}))})),null===(n=document.querySelector(".send-localStorage"))||void 0===n||n.addEventListener("click",(function(){var e=document.querySelector(".field-position-check");localStorage.setItem("currentUser",JSON.stringify(S)),localStorage.getItem("currentUser")&&(e.innerHTML="",$("#container").html("<p>Thank You!</p>"))})),document.getElementById("edit").addEventListener("click",(function(){s.classList.remove("moving"),h.classList.remove("show-check")})),o.addEventListener("click",(function(){g.classList.remove("move-left")}))}]);
//# sourceMappingURL=main.bundle.js.map