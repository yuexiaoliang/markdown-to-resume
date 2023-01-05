import 'reset.css';
import './assets/index.scss';
import './resume.md';

const printButton = document.getElementById('print-button');
printButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.print();
});
