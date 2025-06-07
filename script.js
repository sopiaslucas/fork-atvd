const lista = document.getElementById('lista');
const add = document.getElementById('add');
const remover = document.getElementById('remover');
const input = document.getElementById('item');

add.addEventListener('click', () => {
  if (input.value.trim() === '') return;

  novoItem let = document.getElementById('item');
  lista.appendChild(novoItem);
  input.value = '';

});

remover.addEventListener('click', () => {
  if (lista.lastElementChild) {
    lista.removeChild(lista.lastElementChild);
  }
});