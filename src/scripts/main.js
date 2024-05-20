'use strict';

const switcher = document.querySelector('.swing-trade__switcher');
const priceCheap = document.querySelectorAll('.swing-trade__price--cheap');
const priceExpensive = document.querySelectorAll('.swing-trade__price--expensive');
const month = document.querySelector('.swing-trade__switcher-text--month');
const year = document.querySelector('.swing-trade__switcher-text--year');
console.log(priceCheap.textContent)

switcher.addEventListener('click', () => {
  if (switcher.classList.contains('swing-trade__switcher--work--on')) {
    switcher.classList.remove('swing-trade__switcher--work--on');
    year.classList.remove('swing-trade__switcher-text--color--white');
    month.classList.add('swing-trade__switcher-text--color--white');
    priceCheap.textContent = '$150';
    priceExpensive.textContent = '$170';
  } else {
    switcher.classList.add('swing-trade__switcher--work--on');
    priceCheap.textContent = '$199';
    priceExpensive.textContent = '$300';
    year.classList.add('swing-trade__switcher-text--color--white');
    month.classList.remove('swing-trade__switcher-text--color--white');
  }
});


