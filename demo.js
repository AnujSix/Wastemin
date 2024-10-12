        document.getElementById('submitButton').addEventListener('click', function() {
            const popup = document.getElementById('popup');

            // Show the popup
            popup.style.opacity = '1'; // Fade in
            popup.style.transform = 'translateY(-20px)'; // Move up
            popup.style.display = 'block'; // Ensure it's visible

            // Hide the popup after 3 seconds
            setTimeout(() => {
                popup.style.opacity = '0'; // Fade out
                popup.style.transform = 'translateY(-40px)'; // Move further up
            }, 3000); // Show for 3 seconds

            // Hide completely after fade out
            setTimeout(() => {
                popup.style.display = 'none'; // Hide after fade out
            }, 3500); // Match with fade out duration
        });
    