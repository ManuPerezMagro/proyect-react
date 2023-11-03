import { CartWidget } from "./CartWidget/CartWidget"
import style from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <>
        <div>
            <nav className={`navbar navbar-expand-lg navBarColor ${style.navBarColor}`}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-2"  href="#">Tech-House</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Placas</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Perifericos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Mouse</a></li>
                                <li><a className="dropdown-item" href="#">Teclado</a></li>
                                <li><a className="dropdown-item" href="#">Auriculares</a></li>
                                <li><a className="dropdown-item" href="#">Microfono</a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" aria-disabled="true">Monitores</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <CartWidget/>
                </div>
            </nav>
        </div>
        </>
    )
}