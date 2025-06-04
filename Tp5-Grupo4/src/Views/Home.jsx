import styles from '../Style/Home.module.css';
const Inicio = () => {
    return(
          <section className={styles.welcomeSection}>
            <h1 className={styles.welcomeTitle}>Sistema Integral de Gestión de Alumnos</h1>
            <h2 className={styles.welcomeSubtitle}>Administración y Seguimiento de Datos Estudiantiles</h2>
            <h3 className={styles.welcomeText}>La Universidad Nacional de Jujuy adopta para su organización el sistema de facultades. </h3>
            <p className={styles.welcomeText}>
                Las Facultades son las unidades académicas, administrativas y de gobierno y están integradas por sus docentes, estudiantes, egresados inscriptos en las mismas y no docentes.
                <br /><br />
                    Para ello el sistema de gestión de alumnos es una herramienta diseñada para facilitar la administración y seguimiento de estudiantes. 
                </p>
            </section>
    )
}
export default Inicio