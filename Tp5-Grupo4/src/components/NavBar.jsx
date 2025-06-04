import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Styles from "../Style/NavBar.module.css"
const NavBar = () => {
  return (
    <nav className={Styles.navBarContainer}>
      <div className={Styles.horizontal}>
        <h1 className={Styles.navbarTitle}>Gestión de Alumnos</h1>
        <ul className={Styles.navbarList}>
          <li>
            <Link to="/" className={Styles.navbarLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/ListAlumnos" className={Styles.navbarLink}>
              Lista de Alumnos
            </Link>
          </li>
          <li>
            <Link to="/NewAlumno" className={Styles.navbarLink}>
              Nuevo Alumno
            </Link>
          </li>
          <li>
            <Link to="/acercad" className={Styles.navbarLink}>
              Acerda de Nosotros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
