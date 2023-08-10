// Select The Elements
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

////////////////////////////


// Set the time limit for inactivity (in milliseconds)
const inactivityTimeLimit = 5 * 60 * 1000; // 5 minutes

const logoutUrl = "https://www.google.com/"; // Redirect to Google homepage

let timeoutId;
let popup;

// Function to log out the user and show popup
function logoutAndShowPopup() {
  // Show popup message
  popup = window.open("", "popup", "width=300,height=200");
  popup.document.write(
    "<p>We are logging you out due to page inactivity.</p>"
  );

  // Replace this with your actual logout logic
  window.location.href = logoutUrl;
}

// Function to reset the inactivity timer
function resetInactivityTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(logoutAndShowPopup, inactivityTimeLimit);
}

// Add event listeners to track user activity
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);
document.addEventListener("click", resetInactivityTimer);

// Initialize the inactivity timer on page load
resetInactivityTimer();


