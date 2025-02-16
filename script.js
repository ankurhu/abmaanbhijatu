function showLoveMessage() {
    const messageContainer = document.getElementById("hidden-message");
    messageContainer.style.display = "block";
    messageContainer.innerHTML = "<p>💖 I knew it! You're the one for me! 💖</p>";
    messageContainer.style.color = "lightgreen";
}

function showSadMessage() {
    const messageContainer = document.getElementById("hidden-message");
    messageContainer.style.display = "block";
    messageContainer.innerHTML = "<p>😭 It's okay, I’ll still cherish our moments. 😢</p>";
    messageContainer.style.color = "lightcoral";
}
