import { navBar } from "./componentes/navbar.js";
import { footerContent } from "./componentes/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.querySelector("header");
    const footerContainer = document.querySelector("footer");
    const currentPage = window.location.pathname;

    // No carga el navbar en login y signup
    if (navContainer && !currentPage.includes("login.html") && !currentPage.includes("signup.html")) {
        navContainer.innerHTML = navBar;
        // Asignar eventos después de insertar el navbar
        const loginBtn = document.getElementById("login-btn");
        const logoutBtn = document.getElementById("logout-btn");

        if (loginBtn) {
            loginBtn.addEventListener("click", () => {
                window.location.href = "../login/login.html"; // Ajuste de la ruta para ser más precisa
            });
        }

        if (logoutBtn) {
            logoutBtn.addEventListener("click", () => {
                localStorage.removeItem("loggedIn");
                window.location.href = "../login/login.html"; // Ajuste de la ruta
            });
        }
    }

    if (footerContainer) {
        footerContainer.innerHTML = footerContent;
    }
});