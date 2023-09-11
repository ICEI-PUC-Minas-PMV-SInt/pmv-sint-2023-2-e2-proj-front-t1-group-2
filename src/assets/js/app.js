atualizaTexto();

function atualizaTexto() {
    document.querySelector("p").innerHTML = "Seu nome é " + localStorage.getItem("nome");
}


function salvar() {
    localStorage.setItem("nome", document.querySelector("#nome").value);
    document.querySelector("#nome").value = "";
    atualizaTexto();
}


/**/



function addItem() {
    
    const placa = $('input[id=placa]').val();
    const ano = $('input[id=ano]').val();
    const marca = $('input[id=marca]').val();
    const cor = $('input[id=cor]').val();
    const quilometragem = $('input[id=quilometragem]').val();
    const cilindrada = $('input[id=cilindrada]').val();

 
    const dataObj = { placa, ano, marca, quilometragem, cilindrada };

    /* 
    Todo valor do localstorage é null no inicio (antes de adicionarmos algum valor nele),
    Por isso checamos se é null, ou seja, se será o primeiro item a ser adicionado.
    */
    if (localStorage.getItem('items') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('items', JSON.stringify([dataObj]));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'items',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('items')),
          dataObj
        ])
      );
    }
    
    renderItem(dataObj);
  }

  function renderItem(item) {
    // Adicionando uma div 
    $('.items').append(`
    <div class="list-group-item">
      <strong>Nome: ${item.placa}</strong> : ${item.ano}<br>
      <strong>${item.marca}</strong> : ${item.cor}
      <strong>${item.quilometragem}</strong> : ${item.cilindrada}
    </div>`);
  }

  function getItems() {
    // Pegando o array do localstorage
    const items = JSON.parse(localStorage.getItem('items'));

    // Para cada item do array, é renderizado no html
    items.forEach(item => renderItem(item));
  }

  getItems();

 
  