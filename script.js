document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe active de todos
        document.querySelectorAll('.nav-item').forEach(nav => {
            nav.classList.remove('active');
        });
        
        // Adiciona ao item clicado
        this.classList.add('active');
    });
});