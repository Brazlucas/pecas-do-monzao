import React from 'react'
import './PartCard.css'

const PartCard = ({ part, onToggle, onPurchaseClick }) => {
  const handleToggle = (e) => {
    e.preventDefault()
    onToggle(part.id)
  }

  const handlePurchaseClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    onPurchaseClick(part)
  }

  const getPriorityColor = (priority) => {
    if (priority.includes('Urgência')) return '#ff4757'
    if (priority === 'Normal') return '#ffa502'
    return '#2ed573'
  }

  return (
    <div className={`part-card ${part.checked ? 'checked' : ''}`}>
      <div className="card-overlay">
        <div className="check-icon">✅</div>
      </div>
      
      <div className="card-header">
        <div className="part-image">
          <img src={part.image} width={80} height={80} alt={part.name} />
        </div>
        <div className="part-info">
          <h3 className="part-name">{part.name}</h3>
          <div 
            className="priority-badge"
            style={{ backgroundColor: getPriorityColor(part.priority) }}
          >
            {part.priority}
          </div>
        </div>
      </div>

      <div className="card-body">
        <p className="part-description">{part.description}</p>
        <div className="price-section">
          <span className="price">{part.price}</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="footer-actions">
          <button 
            className="checkbox-container" 
            onClick={handleToggle}
            type="button"
          >
            <input
              type="checkbox"
              checked={part.checked}
              onChange={() => {}} // Controlled by button click
              style={{ display: 'none' }}
            />
            <span className="checkmark"></span>
            <span className="checkbox-label">
              {part.checked ? 'Trocada' : 'Marcar como trocada'}
            </span>
          </button>
          
          {part.purchaseLinks && !part.checked && part.hasPrice && (
            <button 
              className="purchase-button"
              onClick={handlePurchaseClick}
              title="Ver opções de compra"
            >
              <span className="purchase-icon">🛒</span>
              <span className="purchase-text">Comprar</span>
            </button>
          )}
        </div>
      </div>

    </div>
  )
}

export default PartCard
