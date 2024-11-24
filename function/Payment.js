document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const payButton = document.querySelector('.pay');

    payButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const bookingData = saveBooking();
            alert('Booking successful! Redirecting to confirmation page.');
            const queryString = new URLSearchParams(bookingData).toString();
            window.location.href = `HotelConfirmation.html?${queryString}`;
        }
    });

    function validateForm() {
        const requiredFields = ['date', 'time', 'guests', 'firstname', 'lastname', 'email', 'contact'];
        let isValid = true;

        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        if (!paymentMethod) {
            isValid = false;
            alert('Please select a payment method.');
        }

        return isValid;
    }

    function saveBooking() {
        const booking = {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            guests: document.getElementById('guests').value,
            name: `${document.getElementById('firstname').value} ${document.getElementById('lastname').value}`,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value,
            room: sessionStorage.getItem('selectedRoom') || 'Not specified',
            price: sessionStorage.getItem('selectedPrice') || 'Not specified',
            paymentMethod: document.querySelector('input[name="payment"]:checked').value
        };

        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        // Clear session storage
        sessionStorage.removeItem('selectedRoom');
        sessionStorage.removeItem('selectedPrice');

        return booking;
    }
});