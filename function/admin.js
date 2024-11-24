document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('adminLoginForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would validate these credentials against a secure database
        if (username === 'admin' && password === 'pass') {
            localStorage.setItem('adminLoggedIn', 'true');
            window.location.href = 'admin-dashboard.html';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });
});