import React from 'react'
import './BrandSection.css'

const BrandSection = () => {
  const brands = [
    {
      name: 'Dayco',
      description: 'Líder mundial em sistemas de transmissão',
      logo: '🏆',
      specialties: ['Correias', 'Tensores', 'Polias']
    },
    {
      name: 'Cofap',
      description: 'Referência em peças automotivas',
      logo: '⭐',
      specialties: ['Filtros', 'Amortecedores', 'Suspensão']
    },
    {
      name: 'Bosch',
      description: 'Tecnologia alemã de alta qualidade',
      logo: '🔧',
      specialties: ['Sensores', 'Sistemas elétricos', 'Injeção']
    }
  ]

  return (
    <section className="brand-section">
      <div className="brand-header">
        <h2>🏅 Melhores Marcas</h2>
        <p>Marcas recomendadas para as peças do seu Monza</p>
      </div>
      
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <div className="brand-logo">{brand.logo}</div>
            <h3 className="brand-name">{brand.name}</h3>
            <p className="brand-description">{brand.description}</p>
            <div className="brand-specialties">
              {brand.specialties.map((specialty, idx) => (
                <span key={idx} className="specialty-tag">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandSection
