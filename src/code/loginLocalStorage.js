// Pegando a tag <input id="buttonSendForm">
const buttonSendForm = document.getElementById('buttonSendForm');

// Adicionando um "Escutador de Eventos" na tag <input id="buttonSendForm">
buttonSendForm.addEventListener('click', (event) => {
    // Prevenindo as funções que vem por padrão na tag <input>
    event.preventDefault();

    // Salvando o e-mail e a senha no localStorage
    saveLocalStorage();

    // Mostrando os dados do localStorage na tag <div id="localStorageOutput"></div>
    showLocalStorage();
});

function saveLocalStorage() {
    // Pegando os valores dos campos de "e-mail" e "senha"
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;

    if (userEmail === '' || userPassword === '') {
        console.log("Algum campo não foi preenchido.");
        return ;
    }

    // Colocando/Persistindo os dados de "e-mail" e "senha" no localStorage
    localStorage.setItem('userEmail', userEmail);
    localStorage.setItem('userPassword', userPassword);
}

function showLocalStorage() {
    // Pegando a tag <div id="localStorageOutput"></div> com Javascript
    const localStorageOutput = document.getElementById('localStorageOutput');

    // Colocando o "e-mail" e a "senha" armazenados no localStorage em constantes com Javascript
    const userEmail = localStorage.getItem("userEmail");
    const userPassword = localStorage.getItem("userPassword");

    if (userEmail === null || userPassword === null) return;

    // Armazenando o conteúdo HTML em uma variável para melhorar a visualização.
    const htmlContent = `E-mail: ${userEmail}<br>Senha: ${userPassword}<br>`;
    const buttonClearLocalStorage = `<button onclick="clearLocalStorage()">Limpar LocalStorage</button>`;

    // Colocando o "e-mail" e a "senha" dentro da tag <div id="localStorageOutput"></div>
    localStorageOutput.innerHTML = `${htmlContent}${buttonClearLocalStorage}`;
}

function clearLocalStorage() {
    // Criando o botão para limpar o LocalStorage
    const buttonClearLocalStorage = `<button onclick="clearLocalStorage()">Limpar LocalStorage</button>`;

    // Pegando a tag <div id="localStorageOutput"></div> com Javascript
    const localStorageOutput = document.getElementById('localStorageOutput');
    localStorageOutput.innerHTML = `${buttonClearLocalStorage}`;

    // Limpando todo o localStorage com a função localStorage.clear()
    localStorage.clear();
}
