import { useParams } from 'react-router-dom'
import { secciones } from '../data/manual'
import ReactMarkdown from 'react-markdown'

// 👇 Importamos las imágenes
import diagramaClases from '../assets/img/uml/diagrama-clases.png'
import diagramaCasosUso from '../assets/img/uml/diagrama-casos-uso.png'

// 👇 Creamos un objeto para mapear los nombres con las rutas importadas
const imagenes = {
  '/uml/diagrama-clases.png': diagramaClases,
  '/uml/diagrama-casos-uso.png': diagramaCasosUso
}

export default function SectionPage() {
  const { id } = useParams()
  const seccion = secciones.find(s => s.id === id)

  if (!seccion) return <p>Sección no encontrada.</p>

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 style={{ borderBottom: '2px solid #007acc', paddingBottom: '0.5rem' }}>{seccion.titulo}</h2>
      <ReactMarkdown
        children={seccion.contenido}
        components={{
          img: ({ node, ...props }) => {
            // 🧠 Usamos la ruta importada si existe
            const src = imagenes[props.src] || props.src
            return (
              <img
                {...props}
                src={src}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginTop: '1rem' }}
                alt={props.alt || 'imagen'}
              />
            )
          },
          code({ node, inline, className, children, ...props }) {
            return !inline ? (
              <pre style={{ backgroundColor: '#282c34', color: '#61dafb', padding: '1rem', borderRadius: '8px', overflowX: 'auto' }}>
                <code {...props}>{children}</code>
              </pre>
            ) : (
              <code style={{ backgroundColor: '#eaeaea', padding: '0.2rem 0.4rem', borderRadius: '4px' }} {...props}>
                {children}
              </code>
            )
          }
        }}
      />
    </div>
  )
}
