const currRoles = ["DATA ANALYST", "ML ENGINEER", "RA INTERN", "GRADUATE STUDENT"];
const seekingRoles = ["DATA/BUSINESS ANALYST", "AI/ML ENGINEER", "DATA SCIENTIST"];
let currentRole = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  const currentText = seekingRoles[currentRole];
  if (isDeleting) {
    charIndex--;
    typingElement.textContent = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    typingElement.textContent = currentText.substring(0, charIndex);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % seekingRoles.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
