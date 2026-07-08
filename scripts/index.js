document.addEventListener('DOMContentLoaded', function() {

    var botaoTema = document.getElementById('botao-tema');
    var corpoDoSite = document.body;

    botaoTema.addEventListener('click', function() {
        corpoDoSite.classList.toggle('tema-escuro');
        
        if (corpoDoSite.classList.contains('tema-escuro')) {
            botaoTema.textContent = 'Tema Claro';
        } else {
            botaoTema.textContent = 'Tema Escuro';
        }
    });

    var botaoMenu = document.getElementById('botao-menu-celular');
    var listaLinks = document.querySelector('.lista-links');
    var todosOsLinks = document.querySelectorAll('.link-menu');

    botaoMenu.addEventListener('click', function() {
        listaLinks.classList.toggle('aberto');
    });

    for (var i = 0; i < todosOsLinks.length; i++) {
        todosOsLinks[i].addEventListener('click', function() {
            listaLinks.classList.remove('aberto');
        });
    }

    var formulario = document.getElementById('formulario-contato');
    var campoNome = document.getElementById('campo-nome');
    var campoEmail = document.getElementById('campo-email');
    var campoMensagem = document.getElementById('campo-mensagem');
    
    var erroNome = document.getElementById('erro-nome');
    var erroEmail = document.getElementById('erro-email');
    var erroMensagem = document.getElementById('erro-mensagem');
    
    var janelaAviso = document.getElementById('janela-aviso');
    var botaoFecharModal = document.getElementById('botao-fechar-modal');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 

        var formularioEstaCorreto = true; 

        if (campoNome.value.trim() === '') {
            erroNome.style.display = 'block'; 
            formularioEstaCorreto = false;
        } else {
            erroNome.style.display = 'none'; 
        }

        var textoEmail = campoEmail.value.trim();
        if (textoEmail === '' || !textoEmail.includes('@') || !textoEmail.includes('.')) {
            erroEmail.style.display = 'block';
            formularioEstaCorreto = false;
        } else {
            erroEmail.style.display = 'none';
        }

        if (campoMensagem.value.trim() === '') {
            erroMensagem.style.display = 'block';
            formularioEstaCorreto = false;
        } else {
            erroMensagem.style.display = 'none';
        }

        if (formularioEstaCorreto === true) {
            formulario.reset(); 
            janelaAviso.style.display = 'flex'; 
        }
    });

    botaoFecharModal.addEventListener('click', function() {
        janelaAviso.style.display = 'none';
    });
});