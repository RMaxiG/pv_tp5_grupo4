import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../Style/UserForm.module.css';

const Formulario = (estudiantes) => {
    const [nuevo, setNuevo] = estudiantes.list
    const [formData, setFormData] = useState({ lu: '', nombre: '', apellido: '', curso: '', email: '', domicilio: '', telefono: '' });
    const volver = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setNuevo([...nuevo, { Lu: formData.lu, nombre: formData.nombre, apellido: formData.apellido, curso: formData.curso, correo: formData.email, domicilio: formData.domicilio, teléfono: formData.telefono }])
        setFormData({ lu: '', nombre: '', apellido: '', curso: '', email: '', domicilio: '', telefono: '' });
        alert("Se guardo correctamente!");
        volver("/ListAlumnos");
    }

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Añadir Nuevo Alumno</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}> LU:</label>
                <input
                    type="text"
                    name="libreta"
                    className={styles.input}
                    value={formData.lu}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lu: e.target.value }))}
                    required>
                </input><br></br>
                <label className={styles.label}>Nombre/s:</label>
                <input
                    type="text"
                    name="NombreC"
                    className={styles.input}
                    value={formData.nombre}
                    onChange={(e) => setFormData((prev) => ({ ...prev, nombre: e.target.value }))}
                    required>
                </input><br></br>
                <label className={styles.label}>Apellido:</label>
                <input
                    type="text"
                    name="Apellido"
                    className={styles.input}
                    value={formData.apellido}
                    onChange={(e) => setFormData((prev) => ({ ...prev, apellido: e.target.value }))}
                    required
                ></input><br></br>
                <label className={styles.label}>Curso:</label>
                <select
                    name="Curso"
                    className={styles.input}
                    value={formData.curso}
                    onChange={(e) => setFormData((prev) => ({ ...prev, curso: e.target.value }))}
                    required
                >
                    <option value="">Seleccione un curso</option>
                    <option value="Primero">Primero</option>
                    <option value="Segundo">Segundo</option>
                    <option value="Tercero">Tercero</option>
                </select>
                <br></br>
                <label className={styles.label}>Correo Electronico:</label>
                <input
                    type="email"
                    name="Correo"
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    required
                ></input><br></br>
                <label className={styles.label}>Domicilio:</label>
                <input
                    type="text"
                    name="Domilic"
                    className={styles.input}
                    value={formData.domicilio}
                    onChange={(e) => setFormData((prev) => ({ ...prev, domicilio: e.target.value }))}
                    required
                ></input><br></br>
                <label className={styles.label}>Telefono:</label>
                <input
                    type="number"
                    name="tel"
                    className={styles.input}
                    value={formData.telefono}
                    onChange={(e) => setFormData((prev) => ({ ...prev, telefono: e.target.value }))}
                    required
                ></input><br></br>
                <button type="submit" className={styles.submitButton}>Guardar</button>
            </form>
        </div>
    )
}
export default Formulario