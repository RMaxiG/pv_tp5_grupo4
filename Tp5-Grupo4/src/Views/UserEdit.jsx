import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
        <form onSubmit={handleSubmit}>
            <h3>Editar Alumno</h3>
            <label>Nombre:</label>
            <input value={formData.nombre} onChange={e => setFormData({ ...formData, nombre: e.target.value })}></input>
            <br></br>
            <label>Apellido:</label>
            <input value={formData.apellido} onChange={e => setFormData({ ...formData, apellido: e.target.value })}></input>
            <br></br>
            <label>Curso:</label>
            <input value={formData.curso} onChange={e => setFormData({ ...formData, curso: e.target.value })}></input>
            <label>Correo:</label>
            <input value={formData.correo} onChange={e => setFormData({ ...formData, correo: e.target.value })}></input>
            <label>Domicilio:</label>
            <input value={formData.domicilio} onChange={e => setFormData({ ...formData, domicilio: e.target.value })}></input>
            <label>Telefono:</label>
            <input value={formData.teléfono} onChange={e => setFormData({ ...formData, teléfono: e.target.value })}></input>
            <button type="submit">Guardar Cambios</button>
        </form>
    );
};
export default EditarAlumno;