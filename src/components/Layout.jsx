import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Navbar />
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
