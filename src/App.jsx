import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SectionPage from './pages/SectionPage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seccion/:id" element={<SectionPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
