// index.js (sin cambios, ya está bien)
import { navBar } from "./componentes/navbar.js";
import { footerContent } from "./componentes/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector("header");
    const footerContainer = document.querySelector("footer");
    const currentPage = window.location.pathname;

    // No cargar el navbar en login.html ni signup.html
    if (navContainer && !currentPage.includes("login.html") && !currentPage.includes("signup.html")) {
        navContainer.innerHTML = navBar;
    }
    if (footerContainer) {
        footerContainer.innerHTML = footerContent;
    }

    // Añadir funcionalidad al botón "Login"
    const loginBtn = document.getElementById("login-btn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "./login/login.html"; // Redirige a login.html desde la raíz
        });
    }

    // Añadir funcionalidad al botón "Log Out"
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedIn");
            window.location.href = "./login/login.html"; // Redirige a login.html después de logout
        });
    } 
});