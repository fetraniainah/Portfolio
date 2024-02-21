import '../../index.css'
export default function Collaps(){
    return(
        <div class="offcanvas offcanvas-end bg-tr" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
          <button type="button" class="btn-close shadow-none border-0 btn bg-white"  data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body bg-tr">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active " aria-current="page" href="/home"> <span><i class="bi bi-house-door-fill px-1 text-warning fw-bold"></i></span> Tableau de bord</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/profile"><span><i class="bi bi-person-bounding-box text-warning fw-bold px-1"></i></span> Profile</a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#history"> <span><i class="bi bi-card-checklist text-warning fw-bold px-1"></i></span>Historique</a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#history"> <span><i class="bi bi-card-checklist text-warning fw-bold px-1"></i></span>Térme et condition d'utilisation</a>
            </li>

            <li class="nav-item">
              <a class="nav-link  navbar-toggler" href="/logout"> <span><i class="bi bi-box-arrow-right text-danger fw-bold px-1"></i></span>Déconnection</a>
            </li>
           
          </ul>
        </div>
      </div>
    )
}