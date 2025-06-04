import { Link, useNavigate } from "react-router-dom"
<<<<<<< HEAD
//import '../Style/BoardList.css';/
=======
import '../Style/UserList.module.css'
>>>>>>> 5885d34fc50371315924b390d872197aa4be0130
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
                        <th>Curso</th>
                        <th>Email</th>
                        <th>Domicilio</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((dato) => (
                        <tr key={dato.Lu}>
                            <td>{dato.Lu}</td>
                            <td>{dato.nombre}</td>
                            <td>{dato.apellido}</td>
                            <td>{dato.curso}</td>
                            <td>{dato.correo}</td>
                            <td>{dato.domicilio}</td>
                            <td>{dato.teléfono}</td>
                            <td>
                                <div className="action-buttons">
                                    <Link to={`/editar/${dato.Lu}`}>Editar</Link>
                                    <button onClick={() => eliminarAlumno(dato.Lu)}>Eliminar</button>
                                    <Link to={`/alumno/${dato.Lu}`}>Ver Detalles</Link>
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
