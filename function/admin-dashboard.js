document.addEventListener('DOMContentLoaded', () => {
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    if (adminLoggedIn !== 'true') {
        window.location.href = 'admin.html';
        return;
    }

    const bookingsTable = document.getElementById('bookingsTable').getElementsByTagName('tbody')[0];
    const downloadCsvButton = document.getElementById('downloadCsv');
    const logoutButton = document.getElementById('logout');

    function loadBookings() {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookingsTable.innerHTML = '';

        bookings.forEach(booking => {
            const row = bookingsTable.insertRow();
            row.insertCell(0).textContent = booking.name;
            row.insertCell(1).textContent = booking.email;
            row.insertCell(2).textContent = booking.date;
            row.insertCell(3).textContent = booking.time;
            row.insertCell(4).textContent = booking.guests;
            row.insertCell(5).textContent = booking.room;
            row.insertCell(6).textContent = `₱${booking.price}`;
            row.insertCell(7).textContent = booking.paymentMethod;
        });
    }

    function handleDownloadCSV() {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const csvContent = 'Name,Email,Date,Time,Guests,Room,Price,Payment Method\n' + 
            bookings.map(booking => 
                `${booking.name},${booking.email},${booking.date},${booking.time},${booking.guests},${booking.room},₱${booking.price},${booking.paymentMethod}`
            ).join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', 'bookings.csv');
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    function handleLogout() {
        localStorage.removeItem('adminLoggedIn');
        window.location.href = 'admin.html';
    }

    loadBookings();
    downloadCsvButton.addEventListener('click', handleDownloadCSV);
    logoutButton.addEventListener('click', handleLogout);
});
