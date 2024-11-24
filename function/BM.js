document.addEventListener("DOMContentLoaded", function() {
    const bookNowButtons = document.querySelectorAll('.book-now');

    bookNowButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedRoom = this.getAttribute('data-room');
            const selectedPrice = this.getAttribute('data-price');
            
            // Store selected room and price in sessionStorage
            sessionStorage.setItem('selectedRoom', selectedRoom);
            sessionStorage.setItem('selectedPrice', selectedPrice);

            // Redirect to payment page
            window.location.href = 'PaymentMethods.html';
        });
    });
    const modeToggle = document.querySelector('.mode-toggle');
    const body = document.body;
    const footer = document.querySelector('footer');
    
    // Function to toggle dark mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode); // Save user preference
        updateModeToggleButton(isDarkMode); // Update toggle button icon
        updateFooterBackground(isDarkMode); // Update footer background based on mode
    });

    // Function to update the mode toggle button's icon (sun/moon)
    function updateModeToggleButton(isDarkMode) {
        const icon = modeToggle.querySelector('svg');
        if (isDarkMode) {
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            `; // Moon icon
        } else {
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y1="4.22"/>
            `; // Sun icon
        }
    }
    // Update the footer background based on the mode
    function updateFooterBackground(isDarkMode) {
        if (isDarkMode) {
             footer.style.backgroundImage = "linear-gradient(0deg, rgb(126, 123, 123), #000000)";
         } else {
             footer.style.backgroundImage = "linear-gradient(180deg, rgba(255, 250, 250, 0.966), #000000)";
             }
    }

    // Check for saved user preference
    const savedMode = localStorage.getItem('darkMode');
        if (savedMode === 'true') {
            body.classList.add('dark-mode');
            updateModeToggleButton(true);
         updateFooterBackground(true); // Apply dark mode footer color
        } else {
            updateModeToggleButton(false);
         updateFooterBackground(false); // Apply light mode footer color
        }
});