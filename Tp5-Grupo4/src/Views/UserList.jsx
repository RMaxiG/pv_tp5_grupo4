import { Link, useNavigate } from "react-router-dom"
import styles from '../Style/UserList.module.css'
const BoardL = ({ lista, eliminarAlumno }) => {

    return (
        <div className="board-container">
            <h3>Listado de Alumnos</h3>
            <table>
                <thead>
                    <tr>
                        <th>LU</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((dato) => (
                        <tr key={dato.Lu}>
                            <td>{dato.Lu}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                            <td>
                                <div className="action-buttons">
                                    <Link 
                                    to={`/editar/${dato.Lu}`} className={`${styles.btn} ${styles.edit}`}> Editar </Link>
                                    <button onClick={() => eliminarAlumno(dato.Lu)} className={`${styles.btn} ${styles.delete}`}> Eliminar </button>
                                    <Link to={`/alumno/${dato.Lu}`} className={`${styles.btn} ${styles.details}`}> Ver Detalles</Link>
                                </div>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default BoardL
