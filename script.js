// Function to show internet connection status
function showInternetConnectionStatus() {
    if (navigator.onLine) {
        Swal.fire({
            title: 'Internet Connected',
            text: 'You are connected to the internet.',
            icon: 'success',
            timer: 3000, // Set the timer to 3000 milliseconds (3 seconds)
    showConfirmButton: false, // Hide the "OK" button
        });
    } else {
        Swal.fire({
            title: 'Internet Disconnected',
            text: 'You are not connected to the internet.',
            icon: 'error',
            timer: 3000, // Set the timer to 3000 milliseconds (3 seconds) 
            showConfirmButton: false, // Hide the "OK" button
        });
    }
}

// Initial check when the page loads
showInternetConnectionStatus();

// Listen for online and offline events
window.addEventListener('online', showInternetConnectionStatus);
window.addEventListener('offline', showInternetConnectionStatus);