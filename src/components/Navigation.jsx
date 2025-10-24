import React from 'react'
import './Navigation.css'

const Navigation = ({ activePage, onPageChange }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="nav-icon">🚗</span>
          <span className="nav-title">Monza Manager</span>
        </div>
        
        <div className="nav-links">
          <button
            className={`nav-link ${activePage === 'parts' ? 'active' : ''}`}
            onClick={() => onPageChange('parts')}
          >
            <span className="nav-link-icon">📋</span>
            <span className="nav-link-text">Peças</span>
          </button>
          
          <button
            className={`nav-link ${activePage === 'brands' ? 'active' : ''}`}
            onClick={() => onPageChange('brands')}
          >
            <span className="nav-link-icon">🏆</span>
            <span className="nav-link-text">Marcas</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
