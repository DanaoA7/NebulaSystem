document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the booking data from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const bookingData = Object.fromEntries(urlParams);

    // Get DOM elements for confirmation display
    const confirmName = document.getElementById('confirmName');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmDate = document.getElementById('confirmDate');
    const confirmTime = document.getElementById('confirmTime');
    const confirmGuests = document.getElementById('confirmGuests');
    const confirmRoom = document.getElementById('confirmRoom');
    const confirmPrice = document.getElementById('confirmPrice');
    const confirmPayment = document.getElementById('confirmPayment');

    // Populate confirmation details
    confirmName.textContent = bookingData.name || 'N/A';
    confirmEmail.textContent = bookingData.email || 'N/A';
    confirmDate.textContent = bookingData.date || 'N/A';
    confirmTime.textContent = bookingData.time || 'N/A';
    confirmGuests.textContent = bookingData.guests || 'N/A';
    confirmRoom.textContent = bookingData.room || 'Not specified';
    confirmPrice.textContent = bookingData.price || 'Not specified';
    confirmPayment.textContent = bookingData.paymentMethod || 'Not specified';

    // Add event listener for dark mode toggle
    const modeToggle = document.querySelector('.mode-toggle');
    modeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Modal Elements
    const modal = document.getElementById('receiptModal');
    const receiptBody = document.getElementById('receiptBody');
    const printButton = document.getElementById('printButton');
    const closeButton = document.getElementById('closeButton');

    // Show receipt modal with booking data
    function showReceiptModal() {
        const receiptHTML = `
            <tr><td>Name</td><td>${bookingData.name}</td></tr>
            <tr><td>Email</td><td>${bookingData.email}</td></tr>
            <tr><td>Date</td><td>${bookingData.date}</td></tr>
            <tr><td>Time</td><td>${bookingData.time}</td></tr>
            <tr><td>Guests</td><td>${bookingData.guests}</td></tr>
            <tr><td>Room</td><td>${bookingData.room}</td></tr>
            <tr><td>Price</td><td>${bookingData.price}</td></tr>
            <tr><td>Payment Method</td><td>${bookingData.paymentMethod}</td></tr>
        `;
        receiptBody.innerHTML = receiptHTML;

        // Show modal
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
    }

    // Open receipt modal when user confirms booking
    const confirmButton = document.getElementById('confirmButton');
    confirmButton.addEventListener('click', showReceiptModal);

    // Print receipt
    printButton.addEventListener('click', function() {
        window.print();
    });

    // Close the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
    });

    // Close modal if clicked outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});
