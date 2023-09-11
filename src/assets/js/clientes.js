function addClientes() {
    const rua         = $('input[id=rua]').val();
    const bairro      = $('input[id=bairro]').val();
    const cep         = $('input[id=cep]').val();
    const numero      = $('input[id=numero]').val();
    const complemento = $('input[id=complemento]').val();
    const cidade      = $('input[id=cidade]').val();
    
    const select = document.getElementById("estados");
    var estado = select.options[select.selectedIndex].value;

    const dataObj = { rua, bairro, cep, numero, complemento, cidade, estado };

    if (localStorage.getItem('end') === null) {

      localStorage.setItem('end', JSON.stringify([dataObj]));

    } else {
      
      localStorage.setItem('end', JSON.stringify([...JSON.parse(localStorage.getItem('end')),dataObj]));

    }

    limpaInput();
    alert('Cadastro efetuado com sucesso!');

  }

  function limpaInput(){
    rua         = $('input[id=rua]').val("");
    bairro      = $('input[id=bairro]').val("");
    cep         = $('input[id=cep]').val("");
    numero      = $('input[id=numero]').val("");
    complemento = $('input[id=complemento]').val("");
    cidade      = $('input[id=cidade]').val("");
    estado      = $("#estados").html('<option value="">Selecione</option>');
    }

  function renderItem(endereco) {
    $('.clientes').append(`
    <tr class="list-client-item">
      <td>${endereco.rua}</td>   
      <td>${endereco.numero}</td>  
      <td>${endereco.complemento}</td>
      <td>${endereco.bairro}</td>
      <td>${endereco.cidade}</td>
      <td>${endereco.cep}</td>
      <td>${endereco.estado}</td>
      <td>
      <button class="btn btn-outline-secondary btn-sm m-1" onclick="editar()">
        Editar
      </button>
      <button class="btn btn-outline-danger btn-sm m-1" onclick="deletar()">
        Excluir
    </button>
    </td>
    </
    tr>`);
  }
  function getItems() {
    const enderecos = JSON.parse(localStorage.getItem('end'));
    document.getElementById('tabela_clientes').innerHTML = ''; 
    enderecos.forEach(endereco => renderItem(endereco));
  }

  function listarClientes() {
    getItems();
  }

  function deletar() {
    alert('deletando');
  }

  function editar() {

    alert('editando');

  }