function addVeic() {
    const placa = $('input[id=placa]').val();
    const ano = $('input[id=ano]').val();
    const marca = $('input[id=marca]').val();
    const cor = $('input[id=cor]').val();
    const quilometragem = $('input[id=quilometragem]').val();
    const cilindrada = $('input[id=cilindrada]').val();
  
    const dataObj = { placa, ano, marca, cor, quilometragem, cilindrada };
  
    if (localStorage.getItem('veiculos') === null) {
  
      localStorage.setItem('veiculos', JSON.stringify([dataObj]));
  
    } else {
  
      localStorage.setItem('veiculos', JSON.stringify([...JSON.parse(localStorage.getItem('veiculos')), dataObj]));
  
    }
  
    limpaInput();
    alert('Cadastro efetuado com sucesso!');
  
  }
  
  function limpaInput() {
    placa = $('input[id=placa]').val("");
    ano = $('input[id=ano]').val("");
    marca = $('input[id=marca]').val("");
    cor = $('input[id=cor]').val("");
    quilometragem = $('input[id=quilometragem]').val("");
    cilindrada = $('input[id=cilindrada]').val("");
  }
  
  function renderItem(veiculo) {
    $('.veiculos').append(`
    <tr class="list-veiculos-item">
      <td>${veiculo.placa}</td>   
      <td>${veiculo.ano}</td>  
      <td>${veiculo.marca}</td>
      <td>${veiculo.cor}</td>
      <td>${veiculo.quilometragem}</td>
      <td>${veiculo.cilindrada}</td>
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
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));
    document.getElementById('tabela_veiculos').innerHTML = '';
    veiculos.forEach(veiculo => renderItem(veiculo));
  }
  
  function listar() {
    getItems();
  }
  
  function deletar() {
   // localStorage.removeItem($veiculo.placa);
  
  }
  
  function editar() {
  
    alert('editando');
  }
  
  
  function limpaBusca() {
  
    valorInput = $('input[id=pesquisa]').val("");
  
  }
  
  
  function pesquisar() {
  
    const valor = $('input[id=pesquisa]').val();
  
    const veiculos = JSON.parse(localStorage.getItem('veiculos'));
  
    for (let i = 0; i < veiculos.length; i++) {
  
      if (valor === veiculos[i].placa) {
  
       // console.log(veiculos[i]);
        renderItem(veiculos[i]);
        limpaBusca();
  
      } else {
  
        console.log ("Placa incorreta. Tente novamente !!");
        limpaBusca();
  
      }
    } 
  }
  