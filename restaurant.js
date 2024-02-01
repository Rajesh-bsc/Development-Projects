







       
        
       
        
        // Set the countdown date for Indian time (replace with your desired end date and time)
    const countdownDate = new Date("2024-01-31T00:00:00+05:30");

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        // Get the current date and time in Indian time zone
        const now = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
        const nowDate = new Date(now).getTime();

        // Calculate the remaining time
        const timeDifference = countdownDate - nowDate;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown in the HTML
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);

        // If the countdown is over, clear the interval
        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            // You can add additional actions here when the countdown reaches zero
        }
    }

    // Helper function to format time with leading zeros
    function formatTime(time) {
        return time < 10 ? `0${time}` : `${time}`;
    }

    // Initial update when the page loads
    updateCountdown();
        
        