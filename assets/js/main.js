/*=============== MENU DONE WITH BEDIMCODE VIDEO ===============*/
// DEFINING CONSTANTS
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
// IF THE TOGGLE IS CLICKED THE MENU IS SHOWN
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
// IF THE X IS CLICKED THE MENU IS HIDDEN
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

// MENU CLOSES FOR EACH LINK THAT IS CLICKED

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DARK LIGHT THEME DONE WITH THE BEDIMCODE VIDEO ===============*/
// DEFINING DARK THEME + ADDING DIFFERENT ICON
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

/* CLOSES MENU ON MOBILE IF THE THEME BUTTON WAS CLICKED
if (themeButton) {
    themeButton.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    });
}
*/

// SEARCHES FOR PREVIOUS USER SELECTION
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  // CHECK WHAT THEME WILL BE ACTIVATED
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// ACTIVATING AND DEACTIVATING THEME
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // SAVING USER OPTION
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
