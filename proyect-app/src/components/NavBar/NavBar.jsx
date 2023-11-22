import { Link } from "react-router-dom"
import { CartWidget } from "./CartWidget/CartWidget"
import style from "./NavBar.module.css"

export const NavBar = () => {
    return (
        <>
        <div>
            <nav className={`navbar navbar-expand-lg navBarColor ${style.navBarColor}`}>
                <div className="container-fluid">
                    <Link to="/">
                    <a className="navbar-brand fs-2" >Tech-House</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li className="nav-item">
                                <Link to="/">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/grafica">
                                <a className="nav-link" href="#">Graficas</a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Perifericos
                                </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link to={"/category/mouse"}>
                                    <a className="dropdown-item" href="#">Mouse</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/teclado">
                                    <a className="dropdown-item" href="#">Teclado</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/auriculares">
                                    <a className="dropdown-item" href="#">Auriculares</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/category/microfonos">
                                    <a className="dropdown-item" href="#">Microfono</a>
                                    </Link>
                                </li>
                            </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/monitores">
                                <a className="nav-link" aria-disabled="true">Monitores</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link to="/Cart">
                        <CartWidget/>
                    </Link>
                </div>
            </nav>
        </div>
        </>
    )
}