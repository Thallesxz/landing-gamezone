import { Fragment } from 'react'

const numeros = [
  { icone: 'people', alt: 'pessoas', valor: '10K+', linha1: 'Jogadores', linha2: 'ativos' },
  { icone: 'console', alt: 'controle', valor: '500+', linha1: 'Jogos', linha2: 'Disponíveis' },
  { icone: 'newspaper', alt: 'jornal', valor: '1K+', linha1: 'Notícias', linha2: 'publicadas' },
  { icone: 'trophy', alt: 'troféu', valor: '50+', linha1: 'Torneios', linha2: 'Realizados' },
]

function Estatisticas() {
  return (
    <div id="estatisticas">
      {numeros.map((numero, i) => (
        <Fragment key={numero.icone}>
          {i > 0 && <span className="borda"></span>}
          <div className="card-sts">
            <img src={`img/${numero.icone}.png`} alt={numero.alt} />
            <div>
              <h3>{numero.valor}</h3>
              <span>{numero.linha1}<br />{numero.linha2}</span>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Estatisticas