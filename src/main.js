import validator from 'validator';
import './style.css';

const button = document.getElementById('button');
const option = document.getElementById('option');
const input = document.getElementById('input');
const answer = document.getElementById('answer');

button.addEventListener('click', (event) => {
  event.preventDefault(); // Vamos usar o preventDefault() para evitar que, ao clicar no botão, ele recarregue a página

  const campos = {
    email: validator.isEmail(input.value),
    cpf: validator.isTaxID(input.value, 'pt-BR'),
    hexColor: validator.isHexColor(input.value),
    url: validator.isURL(input.value),
    date: validator.isDate(input.value),
    currency: validator.isCurrency(input.value),
    mobilePhone: validator.isMobilePhone(input.value, 'pt-BR'),
  };

  answer.innerHTML = `A validação retornou ${campos[option.value]}`;
});
