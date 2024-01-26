const form = document.getElementById('formulario01');
const proxy = [];
const anon = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome01');
    const inputTelefone = document.getElementById('telefone01');

    if(proxy.includes(inputNome.value)) {
        alert(`O numero :${inputNome.value} ja foi Adicionado`);
    } else {
        proxy.push(inputNome.value);
        anon.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;
        
    linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
