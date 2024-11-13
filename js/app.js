let edtNome         = document.getElementById('nome-amigo');
let edtIncluidos    = document.getElementById('lista-amigos');
let lbSorteio       = document.getElementById('lista-sorteio');
let Nomes = [];
let Pares = {};

function adicionar(){
    if (edtNome.value == ''){
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (Nomes.includes(edtNome.value)){
        alert('Nome já incluído na lista. Por favor digite outro ou adicione o sobrenome.');
        return;
    }

    Nomes.push(edtNome.value.trim());
    edtIncluidos.textContent = Nomes;
    edtNome.value = '';
}

function sortear(){
    if (Nomes.length < 3){
        alert('Inclua no mínimo 3 nomes para sortear');
        return;
    }

    Nomes = embaralhaNomes(Nomes);

    sorteiaPares();
    imprimeSorteio(Pares);
}

function imprimeSorteio(Pares) {
    let textoSorteado = '';
    let textoPar = '';

    for (let i = 0; i <= Object.keys(Pares).length; i++) {
        for (const j in Pares[i]) {
            let Nome = Pares[i][j];
            if (j < 1) {
                textoPar = `${Nome} ---> `;
            }
            else {
                textoPar = textoPar + `${Nome}`;
            }
        }
        textoSorteado = (textoSorteado + `${textoPar} <br>`);
        textoPar = '';
    }
    lbSorteio.innerHTML = textoSorteado;
}

function sorteiaPares() {
    let Sorteios = 0;
    let Par = [];
    while (Sorteios < Nomes.length) {
        for (let i = Sorteios; i < Sorteios + 2; i++) {
            if (i >= Nomes.length) {
                i = 0;
                Par.push(Nomes[i]);
                break;
            }
            Par.push(Nomes[i]);
        }
        Pares[`${Sorteios}`] = Par;
        Par = [];
        Sorteios++;
    }
}

function reiniciar(){
    lbSorteio.innerText = '';
    edtIncluidos.textContent = '';
    Nomes = [];
    Pares = {};
}

function embaralhaNomes(Arr){
    let Sorteio = [];
    for(let i = 0; i < Arr.length; i++){
        let Sorteado = Arr[Math.floor(Math.random() * Arr.length)];
        if (Sorteio.includes(Sorteado)){
            i--;
            continue;
        }
        else{
            Sorteio.push(Sorteado);
        }
    }
    return Sorteio;
}