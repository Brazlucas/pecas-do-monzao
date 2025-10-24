import React from 'react'
import './PurchaseModal.css'

const PurchaseModal = ({ isOpen, onClose, purchaseLinks, partName }) => {
  if (!isOpen) return null

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3 className="modal-title">Onde comprar: {partName}</h3>
          <button 
            className="modal-close-button"
            onClick={onClose}
            title="Fechar modal"
          >
            ✕
          </button>
        </div>
        
        <div className="modal-body">
          <div className="purchase-options">
            {purchaseLinks && purchaseLinks.map((link, index) => (
              <button
                key={index}
                className="purchase-option"
                onClick={() => handleLinkClick(link.url)}
              >
                <span className="option-icon">{link.icon}</span>
                <div className="option-info">
                  <span className="option-name">{link.name}</span>
                  <span className="option-description">Clique para abrir</span>
                </div>
                <span className="external-arrow">↗</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="modal-footer">
          <button 
            className="modal-cancel-button"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseModal
