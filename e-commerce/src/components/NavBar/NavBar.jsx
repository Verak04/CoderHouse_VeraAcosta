import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg" id="nav_bar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" id="marca">V&V</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav_lista">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Temporada
                            </a>
                            <ul class="dropdown-menu" id="nav_menu">
                                <li><a class="dropdown-item" href="">Primavera</a></li>
                                <li><a class="dropdown-item" href="">Verano</a></li>
                                <li><a class="dropdown-item" href="">Otoño</a></li>
                                <li><a class="dropdown-item" href="">Invierno</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="">Ofertas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href=""><CartWidget /></a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn" id="boton" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar