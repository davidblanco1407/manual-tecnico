export const secciones = [
  {
    id: 'objetivos',
    titulo: '1. Objetivos',
    contenido: `
El objetivo general de este manual técnico es documentar la estructura técnica del sistema **PMA Frequency**.

**Objetivos específicos:**
- Documentar la arquitectura física y lógica del sistema.
- Explicar los requerimientos técnicos de hardware y software.
- Proporcionar instrucciones para instalación y configuración.
- Identificar roles de usuarios y sus permisos.
- Documentar posibles fallos y soluciones comunes.
`
  },
  {
    id: 'alcance',
    titulo: '2. Alcance',
    contenido: `
Este documento está dirigido a desarrolladores, instructores del SENA y personal técnico que requiera instalar, mantener o extender el sistema **PMA Frequency**.

**Conocimientos requeridos:**
- Python, Django y Django REST Framework
- React con Vite
- MySQL
- Terminal, Git y control de versiones
`
  },
  {
    id: 'requerimientos',
    titulo: '3. Requerimientos Técnicos',
    contenido: `
**Hardware mínimo:**
- Procesador: Intel Core i3 o superior
- Memoria RAM: 4 GB mínimo
- Almacenamiento libre: 2 GB

**Software necesario:**
- Sistema operativo: Windows 10+ o Ubuntu 20.04+
- Python 3.11
- Node.js 18+
- MySQL 8.0
- Git
`
  },
  {
    id: 'herramientas',
    titulo: '4. Herramientas Utilizadas',
    contenido: `
- **Python 3.11:** Lenguaje para el backend
- **Django 4:** Framework principal del backend
- **Django REST Framework:** Construcción de API REST
- **React + Vite:** Interfaz del frontend
- **MySQL:** Base de datos relacional
- **Postman:** Pruebas de endpoints
- **Git y GitHub:** Control de versiones y colaboración
- **dotenv / decouple:** Configuración por variables de entorno
`
  },
  {
    id: 'instalacion',
    titulo: '5. Instalación',
    contenido: `
**1. Clonar el repositorio:**
\`\`\`bash
git clone https://github.com/davidblanco1407/pma-frequency.git
\`\`\`

### 🔧 Backend
\`\`\`bash
cd backend
python -m venv venv
# Activar entorno:
# Windows
venv\\Scripts\\activate
# Linux/Mac
source venv/bin/activate

pip install -r requirements.txt
# Crear archivo .env con claves, DB y correo
python manage.py migrate
python manage.py runserver
\`\`\`

### 💻 Frontend
\`\`\`bash
cd frontend
npm install
# Crear archivo .env con:
VITE_API_URL=http://localhost:8000/api/
npm run dev
\`\`\`
`
  },
  {
    id: 'configuracion',
    titulo: '6. Configuración',
    contenido: `
### Backend (.env)

- \`SECRET_KEY\`: clave secreta Django
- \`DEBUG\`: true para desarrollo
- \`DB_NAME, DB_USER, DB_PASSWORD\`: conexión MySQL
- \`EMAIL_BACKEND, EMAIL_HOST, EMAIL_USER, EMAIL_PASSWORD\`: envío de correos
- \`FRONTEND_URL\`: para enlaces en correos

### Frontend (.env)

- \`VITE_API_URL\`: apunta al backend
`
  },
  {
    id: 'arquitectura',
    titulo: '7. Arquitectura del Sistema',
    contenido: `
Sistema desacoplado con frontend y backend separados:

\`\`\`
[ React (Vite) ] ⇄ [ Django REST API ] ⇄ [ MySQL ]
\`\`\`

- El frontend React consume endpoints protegidos por JWT.
- El backend gestiona autenticación, validaciones, lógica y reglas de negocio.
- MySQL guarda usuarios, sanciones y solicitudes.
`
  },
  {
    id: 'usuarios',
    titulo: '8. Usuarios',
    contenido: `
### Tipos de usuario en PMA Frequency:

- **Superusuario**: control total, acceso a todo, incluso desbloquear miembros.
- **Administrador**: puede editar, sancionar, desactivar miembros y responder solicitudes.
- **Miembro**: puede ver su perfil, cambiar contraseña y enviar solicitudes de corrección.

### Seguridad:
- Login con JWT.
- Los usuarios desactivados no pueden iniciar sesión.
- Si un miembro fue bloqueado (no puede volver), solo el superusuario puede reactivarlo.
`
  },
  {
    id: 'contingencias',
    titulo: '9. Contingencias y Soluciones',
    contenido: `
| Problema                          | Posible solución                                 |
|----------------------------------|---------------------------------------------------|
| No conecta a MySQL               | Verifica .env, servicio y credenciales            |
| Error CORS en frontend           | Asegúrate que \`django-cors-headers\` está bien configurado |
| Login falla tras migraciones     | Revisa los tokens, migraciones y superusuario     |
| Frontend sin datos               | Chequea que \`VITE_API_URL\` esté correcto         |
| No envía correos                 | Revisa .env del backend y proveedor SMTP          |
`
  },
  {
    id: 'despliegue',
    titulo: '10. Despliegue',
    contenido: `
⚙️ Se planea implementar despliegue automático en:

- **Backend**: Render, Railway o VPS
- **Frontend**: GitHub Pages, Netlify o Vercel

**Consideraciones:**
- Variables .env deben estar configuradas en producción.
- El CORS debe aceptar el dominio de frontend.
- Se recomienda HTTPS y dominio personalizado.
`
  },
  {
    id: 'uml',
    titulo: '11. Diagramas UML',
    contenido: `
Esta sección presenta dos diagramas del sistema **PMA Frequency**:

### 📘 Diagrama de Clases

Representa los modelos Django: Miembro, Sanción, Solicitud, con relaciones entre sí.

![Diagrama de Clases](/uml/diagrama-clases.png)

### 👤 Diagrama de Casos de Uso

Describe las acciones posibles por parte de administradores y miembros.

![Diagrama de Casos de Uso](/uml/diagrama-casos-uso.png)
`
  },
  {
    id: 'glosario',
    titulo: '12. Glosario de Términos',
    contenido: `
**PMA Frequency**  
Sistema de gestión para la comunidad Producción Musical Accesible.

**Miembro**  
Usuario con acceso restringido a su propio perfil y a solicitudes.

**Administrador**  
Usuario con acceso al panel completo y permisos de gestión.

**JWT (JSON Web Token)**  
Token de autenticación segura usado en login.

**Sanción**  
Restricción aplicada a un miembro por un administrador.

**Solicitud de corrección**  
Petición enviada por un miembro para corregir información de su cuenta.

**Django / DRF**  
Framework de backend en Python y su extensión para construir APIs REST.

**React + Vite**  
Tecnologías modernas de frontend para interfaz rápida y modular.

**MySQL**  
Motor de base de datos relacional utilizado por el sistema.

**CORS**  
Política de seguridad entre el dominio frontend y backend.

**.env**  
Archivo de configuración para entornos sensibles.

**Netlify / Render / Railway**  
Servicios modernos para desplegar aplicaciones web frontend y backend.

**Diagrama UML**  
Representación visual para comprender la estructura y comportamiento del sistema.
`
  }
]
