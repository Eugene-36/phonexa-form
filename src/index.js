import './styles.css';

const form = document.querySelector('.formWithValidation');
const validateBtn = form.querySelector('.validateBtn');
const idContainer = document.getElementById('container');
const selectContainer = document.getElementById('second');
const selectNext = form.querySelector('.select-next');
const addClassWrapperSelect = form.querySelector('.wrapper-select');
const lastBlock = form.querySelector('.check-block');
const linkToDepartment = form.querySelector('.Department');
const move = form.querySelector('.wrapper');

import { array } from './js/db';
import { user } from './validation/validationUser';

const { departments } = array;

$(document).ready(function () {
  $('#first').change(function () {
    let selectedClass = $(this).find('option:selected').attr('class');

    let options = departments[selectedClass];
    let newoptions = '';

    if (selectedClass === 'Department') {
      return linkToDepartment.setAttribute('disabled', true);
    }

    for (let i = 0; i < options.length; i++) {
      newoptions += '<option>' + options[i] + '</option>';
    }
    selectContainer.innerHTML = newoptions;
    selectContainer.removeAttribute('disabled', false);
  });

  selectNext.addEventListener('click', () => {
    let data = document.getElementById('first').value;

    let dataOptions = document.getElementById('second').value;
    user.Department = data;
    user['Job Title'] = dataOptions;

    if (data && dataOptions) {
      lastBlock.classList.add('show-check');
      addClassWrapperSelect.classList.add('move-left');
    }

    let newString = '';

    for (const [key, value] of Object.entries(user)) {
      console.log(`${key}: ${value}`);
      newString += `<span>${key}: ${value}</span>`;
    }

    idContainer.innerHTML = newString;
  });
});

document.querySelector('.send-localStorage')?.addEventListener('click', () => {
  let clear = document.querySelector('.field-position-check');
  localStorage.setItem('currentUser', JSON.stringify(user));

  if (localStorage.getItem('currentUser')) {
    clear.innerHTML = '';

    const template = '<p>' + 'Thank You!' + '</p>';
    idContainer.insertAdjacentHTML('beforeEnd', template);
  }
});
document.getElementById('edit').addEventListener('click', () => {
  move.classList.remove('moving');
  lastBlock.classList.remove('show-check');
});
validateBtn.addEventListener('click', () => {
  addClassWrapperSelect.classList.remove('move-left');
});
