import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import BoardL from './Views/UserList';
import Formulario from './Views/UserForm';
import DetalleAlumno from './Views/UserDetails';
import EditarAlumno from './Views/UserEdit';
import Inicio from './Views/Home';
import AboutUs from './Views/AboutUs';
import './App.css';
import './index.css';
function App() {
  const [estudiantes, setEstudiantes] = useState([
    { Lu: 'APU00999', nombre: 'María Eugenia', apellido: 'Diaz', curso: 'Tercero', correo: 'mariadiaz@mail.com', domicilio: 'Av. Congreso 125', teléfono: 3884895999 },
    { Lu: 'APU007296', nombre: 'Marcos Antonio', apellido: 'Mendez', curso: 'Segundo', correo: 'mendezm@gmail.com', domicilio: 'Bºlos perales', teléfono: 3885891063 }
  ])
  const eliminarAlumno = (lu) => {
    if (window.confirm("¿Estás seguro de eliminar este alumno?")) {
      const nuevaLista = estudiantes.filter((a) => a.Lu !== lu);
      setEstudiantes(nuevaLista);
      alert("Alumno eliminado!");
      navigate("/");
    }
  };
  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar/>
          <div>
          <Routes>
            <Route path='/' element={<Inicio/>}></Route> 
            <Route path="/ListAlumnos" element={<BoardL lista={estudiantes} eliminarAlumno={eliminarAlumno} />} />
            <Route path="/NewAlumno" element={<Formulario list={[estudiantes, setEstudiantes]} />} />
            <Route path="/alumno/:lu" element={<DetalleAlumno lista={estudiantes} />} />
            <Route path="/editar/:lu" element={<EditarAlumno lista={estudiantes} setLista={setEstudiantes} />} />
            <Route path="/acercad" element={<AboutUs></AboutUs>}></Route>
          </Routes>
          </div>
      </BrowserRouter>
    </div>
    </>
  );
};

export default App
