import Collaps from "./Collaps";
import '../../index.css';
import logo from '../../assets/logo.png'

export default function Navbar(){
    return(
        <nav class="navbar bg-light shadow-sm position-sticky top-0">
                <div class="container">
                    <a class="navbar-brand fw-bold logo" href="#">
                        <i class="bi bi-terminal-fill"></i>
                        </a>
                    <div class="d-flex gap-3 mn">

                        <a href="#" class="nav-links nav-link">
                            <i class="bi bi-house-door"></i>
                             <small class="sm">Accueil</small>
                        </a>

                        <a href="#" class="nav-links nav-link">
                            <i class="bi bi-briefcase"></i>
                             <small class="sm">Projets</small>
                        </a>
                        <a href="#" class="nav-links nav-link">
                            <i class="bi bi-chat"></i> 
                            <small class="sm">Message</small>
                        </a>
                        <a href="#" class="nav-links nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <i class="bi bi-list"></i>
                            <small class="sm">Menu</small>
                        </a>
                    </div>
                </div>

                <Collaps/>
            </nav>
    )
}