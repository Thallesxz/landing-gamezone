import { useState } from 'react'
import { lojas } from '../data/lojas'
import CardLoja from './CardLoja'

const filtros = [
  { valor: 'Todos', rotulo: 'Todos' },
  { valor: 'SP', rotulo: 'São Paulo' },
  { valor: 'RJ', rotulo: 'Rio de Janeiro' },
  { valor: 'MG', rotulo: 'Minas Gerais' },
]

function Lojas() {
  const [estado, setEstado] = useState('Todos')

  const lojasFiltradas =
    estado === 'Todos' ? lojas : lojas.filter((loja) => loja.estado === estado)

  return (
    <div id="lojas">
      <section className="hero-loja">
        <h2>Lojas <span className="accent">Parceiras</span></h2>
        <p>Encontre lojas físicas oficiais da GameZone espalhadas pelo Sudeste do Brasil.</p>
      </section>

      <section className="filtros-loja">
        <p className="filtro-label">Filtrar por estado</p>
        <div className="filtro-btns">
          {filtros.map((filtro) => (
            <button
              type="button"
              key={filtro.valor}
              className={`filtro-btn chip ${estado === filtro.valor ? 'active' : ''}`}
              onClick={() => setEstado(filtro.valor)}
            >
              {filtro.rotulo}
            </button>
          ))}
        </div>
      </section>

      <section className="grid-lojas" id="gridLojas">
        {lojasFiltradas.map((loja) => (
          <CardLoja key={loja.id} loja={loja} />
        ))}
      </section>

      {lojasFiltradas.length === 0 && (
        <p id="semResultados" className="sem-resultados">
          Nenhuma loja encontrada para esse estado.
        </p>
      )}
    </div>
  )
}

export default Lojas