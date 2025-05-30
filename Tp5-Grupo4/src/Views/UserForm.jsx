import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <div>
            <h3>Formulario de Nuevo Alumno</h3>
            <form onSubmit={handleSubmit}>
                <label>Lu:</label>
                <input type="text" name="libreta" value={formData.lu} onChange={(e) => setFormData((prev) => ({ ...prev, lu: e.target.value }))} required></input><br></br>
                <label>Nombre Completo:</label>
                <input type="text" name="NombreC" value={formData.nombre} onChange={(e) => setFormData((prev) => ({ ...prev, nombre: e.target.value }))} required></input><br></br>
                <label>Apellido:</label>
                <input type="text" name="Apellido" value={formData.apellido} onChange={(e) => setFormData((prev) => ({ ...prev, apellido: e.target.value }))} required></input><br></br>
                <label>Curso:</label>
                <input type="text" name="Curso" value={formData.curso} onChange={(e) => setFormData((prev) => ({ ...prev, curso: e.target.value }))} required></input><br></br>
                <label>Correo Electronico:</label>
                <input type="email" name="Correo" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required ></input><br></br>
                <label>Domicilio:</label>
                <input type="text" name="Domilic" value={formData.domicilio} onChange={(e) => setFormData((prev) => ({ ...prev, domicilio: e.target.value }))} required></input><br></br>
                <label>Telefono:</label>
                <input type="number" name="tel" value={formData.telefono} onChange={(e) => setFormData((prev) => ({ ...prev, telefono: e.target.value }))} required></input><br></br>
                <button type="submit">Guardar</button>
            </form>
        </div>
    )
}
export default Formulario