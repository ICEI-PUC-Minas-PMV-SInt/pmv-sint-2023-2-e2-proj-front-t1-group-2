

function salvar() {
    localStorage.setItem("nome", document.querySelector("#nome").value);
    document.querySelector("#nome").value = "";
}


//const usuario = localStorage.getItem('nome');

//console.log(usuario);

const veiculos = [
{
    placa: 'abc123',
    cor: 'preta'
},
{
    placa: 'efg789',
    cor: 'vermelha'
}];


localStorage.setItem('veic', JSON.stringify(veiculos));
//localStorage.setItem('produto1', produto);


let listaDeVeiculos = JSON.parse(localStorage.getItem('veic'));

//console.log(descricao);

for (let veiculo of listaDeVeiculos){
    console.log(veiculo);

}

