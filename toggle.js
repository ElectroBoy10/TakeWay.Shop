// Get the system preference for dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Check if user has set a preference explicitly
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.body.classList.toggle("dark-mode", storedTheme === "dark");
} else {
  // If no explicit preference, use system preference
  document.body.classList.toggle("dark-mode", prefersDarkScheme.matches);
}

// Function to toggle between light and dark mode
function toggleTheme() {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

// Event listener for the theme toggle button
const themeToggle = document.querySelector("#theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}
