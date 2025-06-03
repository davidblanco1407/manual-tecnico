export const secciones = [
  {
    id: 'objetivos',
    titulo: '1. Objetivos',
    contenido: `
El objetivo general de este manual técnico es documentar la estructura técnica del sistema Comunidad PMA.

Objetivos específicos:
- Documentar la arquitectura física y lógica del sistema.
- Explicar los requerimientos técnicos de hardware y software.
- Proporcionar instrucciones para instalación y configuración.
- Identificar roles de usuarios y sus permisos.
- Documentar posibles fallos y soluciones.
`
  },
  {
    id: 'alcance',
    titulo: '2. Alcance',
    contenido: `
Este documento está dirigido a desarrolladores, técnicos del SENA y personas encargadas del mantenimiento del sistema.

Conocimientos requeridos:
- Python, Django, React
- Bases de datos relacionales (MySQL)
- Uso básico de terminal y Git
`
  },
  {
    id: 'requerimientos',
    titulo: '3. Requerimientos Técnicos',
    contenido: `
Hardware mínimo:
- Procesador: Intel Core i3 o superior
- RAM: 4GB
- Almacenamiento: 2GB libres

Software necesario:
- SO: Windows 10 / Ubuntu 20.04+
- Python 3.11
- Node.js 18+
- MySQL 8.0
`
  },
  {
    id: 'herramientas',
    titulo: '4. Herramientas Utilizadas',
    contenido: `
- Python: Backend
- Django: Framework web
- Django REST Framework: API REST
- React: Frontend interactivo
- MySQL: Base de datos
- Git/GitHub: Control de versiones
- Postman: Pruebas API
`
  },
  {
    id: 'instalacion',
    titulo: '5. Instalación',
    contenido: `
Backend:
1. git clone <url-del-repo>
2. cd backend
3. python -m venv venv
4. Activar entorno:
   - Windows: venv\\Scripts\\activate
   - Linux/Mac: source venv/bin/activate
5. pip install -r requirements.txt
6. Configurar archivo .env
7. python manage.py migrate
8. python manage.py runserver

Frontend:
1. cd frontend
2. npm install
3. Crear .env con:
   VITE_API_URL=http://localhost:8000/api/
4. npm run dev
`
  },
  {
    id: 'configuracion',
    titulo: '6. Configuración',
    contenido: `
Backend:
- .env:
  SECRET_KEY, DEBUG, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT
- settings.py configurado para MySQL y CORS

Frontend:
- .env para VITE_API_URL
- Conexión a API REST desde React
`
  },
  {
    id: 'arquitectura',
    titulo: '7. Arquitectura del Sistema',
    contenido: `
Arquitectura desacoplada:

[ React ] ⇄ [ Django API ] ⇄ [ MySQL ]

React maneja UI. Django maneja lógica de negocio y datos. MySQL almacena la información.
`
  },
  {
    id: 'usuarios',
    titulo: '8. Usuarios',
    contenido: `
Aplicación:
- Administrador: CRUD completo
- Miembro: Ver datos, enviar solicitudes

Base de datos:
- Usuario: comunidad_user
- Privilegios: SELECT, INSERT, UPDATE, DELETE
`
  },
  {
    id: 'contingencias',
    titulo: '9. Contingencias y Soluciones',
    contenido: `
• No conecta a MySQL → Revisar .env y el servicio
• Error CORS → Configurar django-cors-headers
• Migraciones fallan → Revisar credenciales
• Frontend sin datos → Verificar URL de backend
`
  },
  {
    id: 'despliegue',
    titulo: '10. Despliegue (pendiente)',
    contenido: `
⚠️ Esta sección está pendiente. Se documentará el despliegue en Render, Railway o VPS.
`
  }
]
