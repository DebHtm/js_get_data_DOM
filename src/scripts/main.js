'use strict';

const arr = [...document.querySelectorAll('.population')];
const result = arr.map((text) => Number(text.textContent.replaceAll(',', '')));
const total = result.reduce((sum, num) => sum + num, 0);
const average = total / result.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
