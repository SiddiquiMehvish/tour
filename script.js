// Redirect user to React login page
function redirectToLogin() {
    window.location.href = "http://localhost:3000";
}

// Check if the user is logged in
function checkUserStatus() {
    const userName = localStorage.getItem("userName");
    const userInfo = document.getElementById("user-info");

    if (userName) {
        // User is logged in - Show name & logout button
        userInfo.innerHTML = `
            <span>Welcome, ${userName}</span>
            <button class="nav-btn" onclick="logout()">Logout</button>
        `;
    }
}

// Logout function
function logout() {
    localStorage.removeItem("userName"); // Clear session data
    window.location.reload(); // Refresh page
}

// Run on page load
document.addEventListener("DOMContentLoaded", checkUserStatus);
