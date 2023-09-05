Swal.fire({
    title: 'Internet Connected',
    text: 'You are connected to the internet.',
    icon: 'success',
    timer: 3000, // Set the timer to 3000 milliseconds (3 seconds)
    showConfirmButton: false, // Hide the "OK" button
}).then((result) => {
    // This code will be executed when the popup is closed
    if (result.dismiss === Swal.DismissReason.timer) {
        // The popup was closed by the timer
        console.log('Popup closed by timer');
    }
});
