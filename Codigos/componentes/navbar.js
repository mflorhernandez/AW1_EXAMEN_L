// navbar.js
const navElements = [
    { title: "Home", link: "../home/home.html" },
    { title: "Alojamiento", link: "../home/home.html" },
    { title: "Paquete", link: "../home/home.html" },
    { title: "Asistencia al viajero", link: "../home/home.html" }
    
];

export const navBar = `
    <nav class="navbar navbar-expand-lg" style="background-color: var(--primary-color, #40E0D0) !important;">
        <div class="container-fluid"> 
            <a href="../home/home.html" class="navbar-brand" style="color: var(--text-color, #000000);">Agencia de Viaje</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav">
                    ${navElements.map(e => `
                        <li class="nav-item">
                            <a class="nav-link" href="${e.link}" style="color: var(--text-color, #000000);">${e.title}</a>  
                        </li>
                    `).join("")}
                </ul>
                <div class="d-flex"> <!-- Contenedor flex para alinear botones -->
                    <button class="btn btn-success me-2" id="login-btn" style="background-color: #28A745; border-color: #28A745;"><i class="bi bi-box-arrow-in-right"></i> Login</button> <!-- Botón Login verde -->
                    <button class="btn btn-danger ms-auto" id="logout-btn" style="background-color: #BC0505; border-color: #BC0505;"><i class="bi bi-box-arrow-left"></i> Log Out</button> <!-- Botón Logout rojo -->
                </div>
            </div>
        </div>
    </nav>
`;