document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const Nav = this.textContent.trim().toLowerCase();
            switch (Nav) {
                case 'hotel':
                    window.location.href = 'Hotel.html';
                    break;
                case 'dining':
                    window.location.href = 'Dining.html'; // Adjust as necessary
                    break;     
                default:
                    window.location.href = 'Event.html';  
                    break;
            }
        });
    });

    const bookNowBtn = document.querySelector('.btn');
    bookNowBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('Stay'); 
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            
        } 
    });

    const Hotel = document.querySelector('.stay-content a');
    Hotel.addEventListener('click', function(e) {
        e.preventDefault();
        // Directly navigate to Hotel.html
        window.location.href = 'Hotel.html';
    });

    // Add scroll event listener for header shadow
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1s ease forwards`;
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stay, footer').forEach(el => observer.observe(el));
    document.querySelectorAll('.dine').forEach(el => observer.observe(el));
    
    const Dinning = document.querySelector('.dine-content a');
    Dinning.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'Dining.html';
    });
    
    const Event = document.querySelector('.event-content a');
    Event.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'Event.html';
    });


    //For dark and light mode
    const modeToggle = document.querySelector('.mode-toggle');
    const body = document.body;
    const footer = document.querySelector('footer'); // Select the footer element

// Function to toggle dark mode
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
         const isDarkMode = body.classList.contains('dark-mode');
         localStorage.setItem('darkMode', isDarkMode);
         updateModeToggleButton(isDarkMode);
         updateFooterBackground(isDarkMode); // Update footer background based on mode
    });

// Update the icon based on the current mode
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


 