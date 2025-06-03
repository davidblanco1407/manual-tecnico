import { Link } from 'react-router-dom'
import { secciones } from '../data/manual'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#111', color: '#fff', height: '100vh' }}>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {secciones.map(sec => (
          <li key={sec.id} style={{ margin: '0.5rem 0' }}>
            <Link style={{ color: '#90ee90' }} to={`/seccion/${sec.id}`}>{sec.titulo}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
