document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Perform validation here (e.g., check if fields are not empty)
        
        // Example of sending data to server using fetch API
        fetch("login.php", {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle response from server (e.g., show success message or redirect to dashboard)
            console.log(data);
        })
        .catch(error => {
            // Handle error (e.g., show error message to user)
            console.error("Error:", error);
        });
    });
});
