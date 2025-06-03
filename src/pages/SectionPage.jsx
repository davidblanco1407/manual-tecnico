import { useParams } from 'react-router-dom'
import { secciones } from '../data/manual'

export default function SectionPage() {
  const { id } = useParams()
  const seccion = secciones.find(s => s.id === id)

  if (!seccion) return <p>Sección no encontrada.</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{seccion.titulo}</h2>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1rem' }}>{seccion.contenido}</pre>
    </div>
  )
}
