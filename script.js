function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos} horas.`;

    if (hora >= 0 && hora < 12) {
        // bom dia 
        img.src = 'manha.png';
        document.body.style.background = '#edca62';
    } else if (hora >= 12 && hora < 18) {
        // boa tarde    
        img.src = 'tarde.png';
        document.body.style.background = '#e37a14';
    } else {
        // boa noite
        img.src = 'noite.png';
        document.body.style.background = '#0e203c';
    }
}

// Chame a função para carregar a mensagem e imagem ao carregar a página
carregar();

// Atualize a cada minuto (60000 milissegundos)
setInterval(carregar, 60000);
