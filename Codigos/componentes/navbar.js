const navElements = [
    { title: "Home", link: "../home/home.html" },
    { title: "Alojamiento", link: "../alojamiento/alojamiento.html" },
    { title: "Paquete", link: "../paquete/paquete.html" },
    { title: "Asistencia al viajero", link: "../asistencia/asistencia.html" }
];

export const navBar = `
    <nav class="navbar navbar-expand-lg" style="background-color: #A91D8D !important;">
        <div class="container-fluid"> 
            <a href="../home/home.html" class="navbar-brand" style="color: #FFFFFF;">Agencia de Viaje</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto"> <!-- "me-auto" empuja los botones a la derecha -->
                    ${navElements.map(e => `
                        <li class="nav-item">
                            <a class="nav-link" href="${e.link}" style="color: #FFFFFF;">${e.title}</a>  
                        </li>
                    `).join("")}
                </ul>
                <div class="d-flex"> <!-- Contenedor flex para los botones, ahora al lado derecho -->
                    <button class="btn btn-success me-2" id="login-btn"><i class="bi bi-box-arrow-in-right"></i> Login</button>
                    <button class="btn btn-danger" id="logout-btn"><i class="bi bi-box-arrow-left"></i> Log Out</button>
                </div>
            </div>
        </div>
    </nav>
`;  