document.getElementById("awesomeBtn").addEventListener("click", function() {
    const container = document.getElementById("awesomeContainer");
    container.innerHTML = ""; // Tühjendab varasema teksti
    for (let i = 0; i < 10; i++) {
        const p = document.createElement("p");
        p.textContent = "I am awesome";
        container.appendChild(p);
    }
});
