import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '../Style/UserEdit.module.css'

const EditarAlumno = ({ lista, setLista }) => {
    const { lu } = useParams();
    const navigate = useNavigate();

    const alumno = lista.find(a => a.Lu === lu);

    const [formData, setFormData] = useState({ ...alumno });

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevaLista = lista.map((a) =>
            a.Lu === lu ? { ...formData } : a
        );
        setLista(nuevaLista);
        alert("Alumno actualizado");
        navigate("/ListAlumnos");
    };

    return (
        <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}className={styles.form}>
            <h3 className={styles.title}>Editar Alumno</h3>
            <label className={styles.label}>Nombre:</label>
            <input className={styles.input}  value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })}></input>
            <br></br>
            <label className={styles.label}>Apellido:</label>
            <input className={styles.input} value={formData.apellido} onChange={e => setFormData({ ...formData, apellido: e.target.value })}></input>
            <br></br>
            <label className={styles.label}>Curso:</label>
            <input className={styles.input} value={formData.curso} onChange={e => setFormData({ ...formData, curso: e.target.value })}></input>
            <br></br>
            <label className={styles.label}>Correo:</label>
            <input className={styles.input} value={formData.correo} onChange={e => setFormData({ ...formData, correo: e.target.value })}></input>
            <br></br>
            <label className={styles.label}>Domicilio:</label>
            <input className={styles.input} value={formData.domicilio} onChange={e => setFormData({ ...formData, domicilio: e.target.value })}></input>
            <br></br>
            <label className={styles.label}>Telefono:</label>
            <input className={styles.input} value={formData.teléfono} onChange={e => setFormData({ ...formData, teléfono: e.target.value })}></input>
            <br></br>
            <button type="submit"className={styles.submitButton}>Guardar Cambios</button>
        </form>
        </div>
    );
};
export default EditarAlumno;