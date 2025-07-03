
    const botao = document.getElementById('botaoMensagem');
    const areaMensagem = document.getElementById('areaMensagem');
    
    
    const frase = "“Esforce-se para não ter um sucesso, mas sim para ser valioso” - Albert Einstein."; 

    botao.addEventListener('click', function() {
        areaMensagem.textContent = frase;
    });
