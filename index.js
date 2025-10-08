function showAlert() {
    alert("Coming soon!");
}

function checkPassword(event) {
    event.preventDefault();
    const password = prompt("Enter password to continue:");
    if (password === "museum2025") {
        window.location.href = "https://share.arcware.cloud/v1/share-736d9389-fc24-4007-888a-5241e9ec8e56";
    } else if (password !== null) {
        alert("Incorrect password.");
    }
}