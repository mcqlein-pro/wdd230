// JavaScript code for dynamic content

// Set the current year dynamically
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Get the last modified date of the document
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
