function addEnd() {
    // Pegando os valores dos campos name e qtd
    
    const rua = $('input[id=rua]').val();
    const bairro = $('input[id=bairro]').val();
    const cep = $('input[id=cep]').val();
    const numero = $('input[id=numero]').val();
    const complemento = $('input[id=complemento]').val();
    const cidade = $('input[id=cidade]').val();
    
    const select = document.getElementById("estados");
    var estado = select.options[select.selectedIndex].value;

    // Criando objeto com dados dos inputs
    const dataObj = { rua, bairro, cep, numero, complemento, cidade, estado };

    /* 
    Todo valor do localstorage é null no inicio (antes de adicionarmos algum valor nele),
    Por isso checamos se é null, ou seja, se será o primeiro item a ser adicionado.
    */
    if (localStorage.getItem('end') === null) {
      // Adicionando um array com um objeto no localstorage
      localStorage.setItem('end', JSON.stringify([dataObj]));
    } else {
      // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
      localStorage.setItem(
        'end',
        // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('end')),
          dataObj
        ])
      );
    }
    
    renderItem(dataObj);
  }
   
  function renderItem(endereco) {
    // Adicionando uma div com o item e a quantidade na div .items
    $('.end').append(`
    <div class="list-group-item">
      <strong>Rua:           </strong>${endereco.rua}<br>
      <strong>Bairro:        </strong>${endereco.bairro}<br>
      <strong>CEP:           </strong>${endereco.cep}<br>
      <strong>Número:        </strong>${endereco.numero}<br>
      <strong>Complemento:   </strong>${endereco.complemento}<br>
      <strong>Cidade:        </strong>${endereco.cidade}
      <strong>Estado:        </strong>${endereco.estado}
    </div>`);
  }

  function getItems() {
    // Pegando o array do localstorage
    const enderecos = JSON.parse(localStorage.getItem('end'));
    

    // Para cada item do array, é renderizado no html
    document.getElementById('tabela_clientes').innerHTML = ''; // para limpar o html
    enderecos.forEach(endereco => renderItem(endereco));
  }

  getItems();


  