import React, { useState, useEffect } from 'react'
import PartCard from '../components/PartCard'
import FilterBar from '../components/FilterBar'
import PurchaseModal from '../components/PurchaseModal'
import './PartsPage.css'

const PartsPage = () => {
  const [parts, setParts] = useState([
    {
      id: 1,
      name: 'Kit Correia Dentada + Tensor',
      price: 'R$ 176,98',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/150352/180_kit_correia_dentada_e_tensor_astra_kadett_ipanema_monza_omega_suprema_vectra_zafira_1_8_e_2_0_8v_ori_4788_1_a93b84c0c3c21374644e11f338712e9c.jpg',
      description: 'Kit completo com correia dentada e tensor para o motor',
      checked: false,
      hasPrice: true,
      category: 'Motor',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/kit-correia-dentada-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/kit-correia-dentada', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/kit-correia', icon: '🛠️' }
      ]
    },
    {
      id: 2,
      name: 'Kit Embreagem',
      price: 'R$ 587,00',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_NQ_NP_723584-MLB81759422736_012025-O.webp',
      description: 'Platô, disco e cabo de embreagem completo',
      checked: false,
      hasPrice: true,
      category: 'Transmissão',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/kit-embreagem-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/kit-embreagem', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/kit-embreagem', icon: '🛠️' }
      ]
    },
    {
      id: 3,
      name: 'Vazamento Óleo Direção Hidráulica',
      price: 'Investigar e avaliar orçamento',
      priority: 'Urgência | Risco de danos',
      image: 'https://cdn.autopapo.com.br/box/uploads/2019/09/29163958/oleo-vazamento-shutterstock_1071637244.jpg',
      description: 'Resolver vazamento do sistema de direção hidráulica',
      checked: false,
      hasPrice: false,
      category: 'Direção',
      purchaseLinks: [
        { name: 'Mecânico Local', url: 'https://google.com/search?q=mecanico+monza+local', icon: '🔍' },
        { name: 'AutoZone', url: 'https://autozone.com.br/oleo-direcao-hidraulica', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/oleo-direcao', icon: '🛠️' }
      ]
    },
    {
      id: 4,
      name: 'Vazamento Reservatório Radiador',
      price: 'Investigar e avaliar orçamento',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/670499/reservatorio_de_expansao_agua_monza_c_ar_condicionado_1984_a_1993_3_saidas_tampa_15093_1_5eedcd9dd41dd205775398254b45497d.jpg',
      description: 'Resolver vazamento do reservatório de água do radiador',
      checked: false,
      hasPrice: false,
      category: 'Sistema de Arrefecimento',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/reservatorio-radiador-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/reservatorio-radiador', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/reservatorio', icon: '🛠️' }
      ]
    },
    {
      id: 5,
      name: 'Troca Óleo e Filtro',
      price: 'R$ 155,00',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/476243/kit_troca_filtro_e_oleo_20w50_mineral_monza_1985_a_1997_2862304_1_e3234a782665bff6373b3fe63659f89d_20240531220214.jpg',
      description: 'Troca completa do óleo do motor e filtro',
      checked: false,
      hasPrice: true,
      category: 'Manutenção',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/oleo-filtro-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/oleo-filtro', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/oleo-filtro', icon: '🛠️' }
      ]
    },
    {
      id: 6,
      name: 'Coxinho do Câmbio & Motor',
      price: 'R$155,73',
      priority: 'Normal',
      image: 'https://s3-sa-east-1.amazonaws.com/fabiani-ecommerce/product_images/images/000/052/469/original/coxim-motor-monza-91-le-dianteiro.jpg?1481372205',
      description: 'Suporte e coxim do câmbio e motor',
      checked: false,
      hasPrice: true,
      category: 'Motor',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/coxim-motor-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/coxim-motor', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/coxim', icon: '🛠️' }
      ]
    },
    {
      id: 7,
      name: 'Bucha do Volante',
      price: 'R$ 40,00',
      priority: 'Normal',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHCnF5owQIqxmFvVWFn9IWkJbmS2BN6CLpeZtbGOhu4Myavmtbcp7gyr4OJDD5SjhlXXB6yKxVZ-Ik0iBmruPFxa2x8L8KXl3pcZAuW0sq18_kFqxcbog_zg',
      description: 'Bucha do volante (folga)',
      checked: false,
      hasPrice: true,
      category: 'Direção',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/bucha-volante-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/bucha-volante', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/bucha-volante', icon: '🛠️' }
      ]
    },
    {
      id: 8,
      name: 'Maçaneta Externa Porta Traseira',
      price: 'R$ 29,45 (par)',
      priority: 'Baixa',
      image: 'https://imageswscdn.wslojas.com.br/files/29390/MED_prod_881161195969.jpg',
      description: 'Maçaneta externa porta direita de trás',
      checked: false,
      hasPrice: true,
      category: 'Carroceria',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/macaneta-porta-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/macaneta-porta', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/macaneta', icon: '🛠️' }
      ]
    },
    {
      id: 9,
      name: 'Cabo de abertura do Capô',
      price: 'R$ 49,00',
      priority: 'Baixa',
      image: 'https://http2.mlstatic.com/D_NQ_NP_809201-MLB82695273414_032025-O.webp',
      description: 'Cabo do puxador do capô',
      checked: false,
      hasPrice: true,
      category: 'Carroceria',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/cabo-capo-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/cabo-capo', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/cabo-capo', icon: '🛠️' }
      ]
    },
    {
      id: 10,
      name: 'Sensor de Ré',
      price: 'R$ 50,00',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_NQ_NP_913237-MLB71282443990_082023-O-kit-sensor-estacionamento-re-universal-display-sonoro.webp',
      description: 'Sensor de ré para sistema de ré',
      checked: false,
      hasPrice: true,
      category: 'Elétrica',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/sensor-re-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/sensor-re', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/sensor-re', icon: '🛠️' }
      ]
    },
    {
      id: 11,
      name: 'Sensor de Rotação',
      price: 'R$ 71,50',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_Q_NP_647202-MLB76266805439_052024-O.webp',
      description: 'Sensor de rotação do motor',
      checked: false,
      hasPrice: true,
      category: 'Elétrica',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/sensor-rotacao-monza', icon: '🛒' },
        { name: 'AutoZone', url: 'https://autozone.com.br/sensor-rotacao', icon: '🔧' },
        { name: 'Auto Peças Online', url: 'https://autopecasonline.com.br/sensor-rotacao', icon: '🛠️' }
      ]
    },
    {
      id: 12,
      name: 'KIT Alto falante',
      price: 'R$ 215,00',
      priority: 'Baixa',
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_943833-MLA95695191648_102025-F.webp',
      description: 'Alto Falante Bravox Kit Facil 6 + Triaxial Quadriaxial 6x9 Cor Preto',
      checked: false,
      hasPrice: true,
      category: 'Elétrica',
      purchaseLinks: [
        { name: 'Mercado Livre', url: 'https://mercadolivre.com.br/alto-falante-bravox-kit-facil-6-triaxial-quadriaxial-6x9-cor-preto', icon: '🛒' },
      ]
    }
  ])
  
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalData, setModalData] = useState({ isOpen: false, part: null })
  const [activeFilter, setActiveFilter] = useState('Todas')

  // Carregar dados do localStorage ao inicializar
  useEffect(() => {
    const savedParts = localStorage.getItem('monza-parts')
    if (savedParts) {
      try {
        const parsedParts = JSON.parse(savedParts)
        setParts(parsedParts)
      } catch (error) {
        console.error('Erro ao carregar dados do localStorage:', error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Salvar no localStorage sempre que parts mudar (após carregar dados iniciais)
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('monza-parts', JSON.stringify(parts))
    }
  }, [parts, isLoaded])

  const togglePart = (id) => {
    setParts(prevParts => 
      prevParts.map(part => 
        part.id === id ? { ...part, checked: !part.checked } : part
      )
    )
  }

  // Função para ordenar as peças por prioridade
  const sortPartsByPriority = (partsList) => {
    return [...partsList].sort((a, b) => {
      // Urgência | Risco de danos = prioridade 1 (mais alta)
      const priorityA = a.priority.includes('Urgência') ? 1 : 
                       a.priority === 'Normal' ? 2 : 3
      const priorityB = b.priority.includes('Urgência') ? 1 : 
                       b.priority === 'Normal' ? 2 : 3
      
      // Se a prioridade for igual, ordena por ID para manter consistência
      if (priorityA === priorityB) {
        return a.id - b.id
      }
      
      return priorityA - priorityB
    })
  }

  // Função para filtrar peças por categoria
  const getFilteredParts = (partsList) => {
    if (activeFilter === 'Todas') {
      return partsList
    }
    return partsList.filter(part => part.category === activeFilter)
  }

  const sortedParts = sortPartsByPriority(parts)
  const filteredParts = getFilteredParts(sortedParts)
  const checkedCount = parts.filter(part => part.checked).length
  const totalParts = parts.length

  const resetAllParts = () => {
    if (window.confirm('Tem certeza que deseja resetar todas as peças? Esta ação não pode ser desfeita.')) {
      const resetParts = parts.map(part => ({ ...part, checked: false }))
      setParts(resetParts)
      localStorage.removeItem('monza-parts')
    }
  }

  const handlePurchaseClick = (part) => {
    setModalData({ isOpen: true, part })
  }

  const handleCloseModal = () => {
    setModalData({ isOpen: false, part: null })
  }

  const handleFilterChange = (category) => {
    setActiveFilter(category)
  }

  return (
    <div className="parts-page">
      <header className="page-header">
        <h1>📋 Gerenciamento de Peças</h1>
        <div className="progress-bar">
          <div className="progress-info">
            <span>Progresso: {checkedCount}/{totalParts} peças trocadas</span>
            <span className="percentage">{Math.round((checkedCount / totalParts) * 100)}%</span>
          </div>
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${(checkedCount / totalParts) * 100}%` }}
            ></div>
          </div>
          {checkedCount > 0 && (
            <button 
              className="reset-button" 
              onClick={resetAllParts}
              title="Resetar todas as peças"
            >
              🔄 Resetar Progresso
            </button>
          )}
        </div>
      </header>

      <main className="page-main">
        <FilterBar 
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          parts={parts}
        />
        
        <div className="priority-legend">
          <div className="priority-item urgent">
            <span className="priority-dot urgent"></span>
            <span>Urgência | Risco de danos</span>
          </div>
          <div className="priority-item normal">
            <span className="priority-dot normal"></span>
            <span>Normal</span>
          </div>
          <div className="priority-item low">
            <span className="priority-dot low"></span>
            <span>Baixa</span>
          </div>
        </div>
        
        <div className="parts-grid">
          {filteredParts.map(part => (
            <PartCard
              key={part.id}
              part={part}
              onToggle={togglePart}
              onPurchaseClick={handlePurchaseClick}
            />
          ))}
        </div>
        
        {filteredParts.length === 0 && activeFilter !== 'Todas' && (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>Nenhuma peça encontrada</h3>
            <p>Não há peças na categoria "{activeFilter}".</p>
            <button 
              className="clear-filter-button"
              onClick={() => setActiveFilter('Todas')}
            >
              Ver todas as peças
            </button>
          </div>
        )}
      </main>

      {modalData.isOpen && modalData.part && (
        <PurchaseModal
          isOpen={modalData.isOpen}
          onClose={handleCloseModal}
          purchaseLinks={modalData.part.purchaseLinks}
          partName={modalData.part.name}
        />
      )}
    </div>
  )
}

export default PartsPage
