const toggleButton = document.getElementById('toggle-mode');
let modoEscuro = true;

toggleButton.addEventListener('click', function() {
    modoEscuro = !modoEscuro;
    
    if (modoEscuro) {
        document.body.classList.remove('claro'); 
        toggleButton.src = 'images/botao-dark'; 
        document.querySelectorAll('header a').forEach(link => link.classList.remove('claro'));
        document.querySelectorAll('h2.titulo').forEach(titulo => titulo.classList.remove('claro'));
        document.querySelectorAll('.topo-do-site h1').forEach(h1 => h1.classList.remove('claro'));
        document.querySelectorAll('.topo-do-site .txt-topo-site p').forEach(p => p.classList.remove('claro'));
        document.querySelectorAll('.especialidades .especialidades-box').forEach(box => box.classList.remove('claro'));
    } else {
        document.body.classList.add('claro'); 
        toggleButton.src = 'images/botao-light'; 
        document.querySelectorAll('header a').forEach(link => link.classList.add('claro'));
        document.querySelectorAll('h2.titulo').forEach(titulo => titulo.classList.add('claro'));
        document.querySelectorAll('.topo-do-site h1').forEach(h1 => h1.classList.add('claro'));
        document.querySelectorAll('.topo-do-site .txt-topo-site p').forEach(p => p.classList.add('claro'));
        document.querySelectorAll('.especialidades .especialidades-box').forEach(box => box.classList.add('claro'));
    }
});
