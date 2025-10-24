import React from 'react'
import BrandSection from '../components/BrandSection'
import './BrandsPage.css'

const BrandsPage = () => {
  return (
    <div className="brands-page">
      <header className="page-header">
        <h1>🏆 Melhores Marcas para o Monza</h1>
        <p className="page-subtitle">
          Descubra as marcas mais confiáveis e recomendadas para seu Monza
        </p>
      </header>

      <main className="page-main">
        <BrandSection />
      </main>
    </div>
  )
}

export default BrandsPage
