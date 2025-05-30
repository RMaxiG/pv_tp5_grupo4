import { useNavigate, useParams } from 'react-router-dom';

const DetalleAlumno = ({ lista }) => {
    const { lu } = useParams();
    const alumno = lista.find(est => est.Lu === lu);
    const volver = useNavigate();
    return (
        <div>
            <h2>Detalle del Alumno</h2>
            <p><strong>LU:</strong> {alumno.Lu}</p>
            <p><strong>Nombre:</strong> {alumno.nombre}</p>
            <p><strong>Apellido:</strong> {alumno.apellido}</p>
            <p><strong>Curso:</strong> {alumno.curso}</p>
            <p><strong>Correo:</strong> {alumno.correo}</p>
            <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p><strong>Teléfono:</strong> {alumno.teléfono}</p>
            <button onClick={() => volver("/")}>Volver</button>
        </div>
    );
};

export default DetalleAlumno;