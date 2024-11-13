let edtNome         = document.getElementById('nome-amigo');
let edtIncluidos    = document.getElementById('lista-amigos');
let Nomes = [];

function adicionar(){
    if (edtNome.value == ''){
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    Nomes.push(' ' + edtNome.value.trim());
    edtIncluidos.textContent = Nomes;
    edtNome.value = '';
}

function sortear(){
    let nomesSorteados = [];
    let Sorteios = 0;
    let Par = [];
    let Pares = {};
    if (Nomes.length < 3){
        alert('Inclua no mínimo 3 nomes para sortear');
        return;
    }

    nomesSorteados = embaralhaNomes(Nomes);
    while (Sorteios < nomesSorteados.length) {
        for(let i = 0; i < 2; i++){
            if (Par.includes(nomesSorteados[Sorteios])){
                i--;
                continue;
            }
            else{
                Par.push(nomesSorteados[i]);
            }  
        }
        Pares[`Sorteio${Sorteios}`] = Par;
        Sorteios++;     
    }
    alert(nomesSorteados);
    alert(Pares);
}

function reiniciar(){

}

function embaralhaNomes(Nomes){
    let Sorteio = [];
    for(let i = 0; i < Nomes.length; i++){
        let Sorteado = Nomes[Math.floor(Math.random() * Nomes.length)];
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