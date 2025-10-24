import React from 'react'
import './FilterBar.css'

const FilterBar = ({ activeFilter, onFilterChange, parts }) => {
  // Obter categorias únicas das peças
  const categories = ['Todas', ...Array.from(new Set(parts.map(part => part.category)))]
  
  // Contar peças por categoria
  const getCategoryCount = (category) => {
    if (category === 'Todas') return parts.length
    return parts.filter(part => part.category === category).length
  }

  return (
    <div className="filter-bar">
      <div className="filter-title">
        <span className="filter-icon">🔍</span>
        <span className="filter-text">Filtrar por categoria:</span>
      </div>
      
      <div className="filter-buttons">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            onClick={() => onFilterChange(category)}
            title={`Ver ${category.toLowerCase()}`}
          >
            <span className="button-text">{category}</span>
            <span className="button-count">({getCategoryCount(category)})</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterBar
