document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        window.location.href = 'download.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
});

document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
