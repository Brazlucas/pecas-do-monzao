import React, { useState, useEffect } from 'react'
import './App.css'
import PartCard from './components/PartCard'
import BrandSection from './components/BrandSection'

const App = () => {
  const [parts, setParts] = useState([
    {
      id: 1,
      name: 'Kit Correia Dentada + Tensor',
      price: 'R$ 176,98',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/150352/180_kit_correia_dentada_e_tensor_astra_kadett_ipanema_monza_omega_suprema_vectra_zafira_1_8_e_2_0_8v_ori_4788_1_a93b84c0c3c21374644e11f338712e9c.jpg',
      description: 'Kit completo com correia dentada e tensor para o motor',
      checked: false
    },
    {
      id: 2,
      name: 'Kit Embreagem',
      price: 'R$ 587,00',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_NQ_NP_723584-MLB81759422736_012025-O.webp',
      description: 'Platô, disco e cabo de embreagem completo',
      checked: false
    },
    {
      id: 3,
      name: 'Vazamento Óleo Direção Hidráulica',
      price: 'Investigar e avaliar orçamento',
      priority: 'Urgência | Risco de danos',
      image: 'https://cdn.autopapo.com.br/box/uploads/2019/09/29163958/oleo-vazamento-shutterstock_1071637244.jpg',
      description: 'Resolver vazamento do sistema de direção hidráulica',
      checked: false
    },
    {
      id: 4,
      name: 'Vazamento Reservatório Radiador',
      price: 'Investigar e avaliar orçamento',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/670499/reservatorio_de_expansao_agua_monza_c_ar_condicionado_1984_a_1993_3_saidas_tampa_15093_1_5eedcd9dd41dd205775398254b45497d.jpg',
      description: 'Resolver vazamento do reservatório de água do radiador',
      checked: false
    },
    {
      id: 5,
      name: 'Troca Óleo e Filtro',
      price: 'R$ 155,00',
      priority: 'Urgência | Risco de danos',
      image: 'https://images.tcdn.com.br/img/img_prod/476243/kit_troca_filtro_e_oleo_20w50_mineral_monza_1985_a_1997_2862304_1_e3234a782665bff6373b3fe63659f89d_20240531220214.jpg',
      description: 'Troca completa do óleo do motor e filtro',
      checked: false
    },
    {
      id: 6,
      name: 'Coxinho do Câmbio & Motor',
      price: 'R$155,73',
      priority: 'Normal',
      image: 'https://s3-sa-east-1.amazonaws.com/fabiani-ecommerce/product_images/images/000/052/469/original/coxim-motor-monza-91-le-dianteiro.jpg?1481372205',
      description: 'Suporte e coxim do câmbio e motor',
      checked: false
    },
    {
      id: 7,
      name: 'Bucha do Volante',
      price: 'R$ 40,00',
      priority: 'Normal',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHCnF5owQIqxmFvVWFn9IWkJbmS2BN6CLpeZtbGOhu4Myavmtbcp7gyr4OJDD5SjhlXXB6yKxVZ-Ik0iBmruPFxa2x8L8KXl3pcZAuW0sq18_kFqxcbog_zg',
      description: 'Bucha do volante (folga)',
      checked: false
    },
    {
      id: 8,
      name: 'Maçaneta Externa Porta Traseira',
      price: 'R$ 29,45 (par)',
      priority: 'Baixa',
      image: 'https://imageswscdn.wslojas.com.br/files/29390/MED_prod_881161195969.jpg',
      description: 'Maçaneta externa porta direita de trás',
      checked: false
    },
    {
      id: 9,
      name: 'Cabo de abertura do Capô',
      price: 'R$ 49,00',
      priority: 'Baixa',
      image: 'https://http2.mlstatic.com/D_NQ_NP_809201-MLB82695273414_032025-O.webp',
      description: 'Cabo do puxador do capô',
      checked: false
    },
    {
      id: 10,
      name: 'Sensor de Ré',
      price: 'R$ 50,00',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_NQ_NP_913237-MLB71282443990_082023-O-kit-sensor-estacionamento-re-universal-display-sonoro.webp',
      description: 'Sensor de ré para sistema de ré',
      checked: false
    },
    {
      id: 11,
      name: 'Sensor de Rotação',
      price: 'R$ 71,50',
      priority: 'Normal',
      image: 'https://http2.mlstatic.com/D_Q_NP_647202-MLB76266805439_052024-O.webp',
      description: 'Sensor de rotação do motor',
      checked: false
    }
  ])
  const [isLoaded, setIsLoaded] = useState(false)

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

  const sortedParts = sortPartsByPriority(parts)
  const checkedCount = parts.filter(part => part.checked).length
  const totalParts = parts.length

  const resetAllParts = () => {
    if (window.confirm('Tem certeza que deseja resetar todas as peças? Esta ação não pode ser desfeita.')) {
      const resetParts = parts.map(part => ({ ...part, checked: false }))
      setParts(resetParts)
      localStorage.removeItem('monza-parts')
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚗 Kit Monza - Gerenciamento de Peças</h1>
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

      <main className="app-main">
        <section className="parts-section">
          <h2>📋 Lista de Peças</h2>
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
            {sortedParts.map(part => (
              <PartCard
                key={part.id}
                part={part}
                onToggle={togglePart}
              />
            ))}
          </div>
        </section>

        <BrandSection />
      </main>
    </div>
  )
}

export default App
