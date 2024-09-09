/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto ';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML =  'escolha um numero entre 1 e 10';*/

let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoTela(tag,texto){

    let campo = document.querySelector(tag);
    campo.innerHTML =  texto;    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}

alteraNome();

function alteraNome() {

    exibirTextoTela('h1','Jogo do numero secreto');
    exibirTextoTela('p','escolha um numero entre 1 e 10');

}

function verificarChute(){

    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto){
            exibirTextoTela('h1','Voce acertou !!');
            let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativas = `Voce acertou em ${tentativas} ${palavraTentativas} !!`

            exibirTextoTela('p',`${mensagemTentativas}`); 
            document.getElementById('reiniciar').removeAttribute('disabled');

        }else {

            if(chute > numeroSecreto){        
                exibirTextoTela('p',`o numero secreto é menor`);     
            }else{
                exibirTextoTela('p',`o numero secreto é maior`); 
            }

            tentativas++;
            limparCampo();

        }



}

function limparCampo(){

    chute =  document.querySelector('input');
    chute.value = '';

}

function gerarNumeroAleatorio () {
    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeElementoNaLista = numeroLimite){

        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    } else {

        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }

}

function reiniciarJogo() {

    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
    alteraNome();

}

