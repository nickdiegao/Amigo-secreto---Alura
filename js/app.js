let amigos = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if (nomeAmigo.value == '') {
        alert('O campo nome está vazio!');
        return;
    } 

    if (amigos.includes(nomeAmigo.value)) {
        alert('Nome já adicionado');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo.value); //adicionando no array

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear() {

    if (amigos.length < 3) {
        alert('Digite pelo menos 3 pessoas');
        return;
    } 

    embaralha(amigos);

    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i=0;i<amigos.length;i++) {
        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        }
    }
}

function embaralha(listaAmigos) {

    for (let indice = listaAmigos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] = 
            [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}