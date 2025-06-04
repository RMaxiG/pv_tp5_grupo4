import { useNavigate, useParams } from 'react-router-dom';
import styles from '../Style/UserDetails.module.css';
const DetalleAlumno = ({ lista }) => {
    const { lu } = useParams();
    const alumno = lista.find(est => est.Lu === lu);
    const volver = useNavigate();
    return (
        <div className={styles.detailsCard}>
            <h2>Datos del Alumno</h2>
            <p className={styles.detailItem}><strong>LU:</strong> {alumno.Lu}</p>
            <p className={styles.detailItem}><strong>Nombre:</strong> {alumno.nombre}</p>
            <p className={styles.detailItem}><strong>Apellido:</strong> {alumno.apellido}</p>
            <p className={styles.detailItem}><strong>Curso:</strong> {alumno.curso}</p>
            <p className={styles.detailItem}><strong>Correo:</strong> {alumno.correo}</p>
            <p className={styles.detailItem}><strong>Domicilio:</strong> {alumno.domicilio}</p>
            <p className={styles.detailItem}><strong>Teléfono:</strong> {alumno.teléfono}</p>
            <button  className={styles.backButton} onClick={() => volver("/")}>Volver</button>
        </div>
    );
};

export default DetalleAlumno;