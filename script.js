//script apenas para auxiliar, é necessário criar outro.

    const add = document.getElementById('add');
    const del = document.getElementById('remover');

    add.addEventListener('click', function(){
        const novoItem = document.createElement('li');
        novoItem.textContent = 'item novo';
        document.getElementById('lista').appendChild(novoItem);
    })

    del.addEventListener('click', ()=>{
        const lista = document.getElementById('lista');
        lista.removeChild(lista.lastElementChild);
    })

