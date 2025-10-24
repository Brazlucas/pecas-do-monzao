import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import PartsPage from './pages/PartsPage'
import BrandsPage from './pages/BrandsPage'

const App = () => {
  const [activePage, setActivePage] = useState('parts')

  const handlePageChange = (page) => {
    setActivePage(page)
  }

  const renderPage = () => {
    switch (activePage) {
      case 'parts':
        return <PartsPage />
      case 'brands':
        return <BrandsPage />
      default:
        return <PartsPage />
    }
  }

  return (
    <div className="app">
      <Navigation 
        activePage={activePage}
        onPageChange={handlePageChange}
      />
      <div className="app-content">
        {renderPage()}
      </div>
    </div>
  )
}

export default App
