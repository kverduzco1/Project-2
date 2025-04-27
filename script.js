console.log("JavaScript is linked and running!");

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.createElement("h1");
    heading.textContent = "Hello from JavaScript!";
    document.body.appendChild(heading);
});
