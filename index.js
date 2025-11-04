function showAlert() {
    alert("Coming soon!");
}

function checkPassword(event) {
    event.preventDefault();
    const password = prompt("Enter password to continue:");
    if (password === "museum2025") {
        window.location.href = "https://share.arcware.cloud/v1/share-658d3f13-6094-4e1c-8ab0-063aac84372a";
    } else if (password !== null) {
        alert("Incorrect password.");
    }
}