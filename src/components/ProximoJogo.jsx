const generos = [
  { nome: 'RPG', icone: 'sword' },
  { nome: 'FPS', icone: 'target' },
  { nome: 'Ação', icone: 'action' },
  { nome: 'Aventura', icone: 'compass' },
  { nome: 'Estratégia', icone: 'rook' },
  { nome: 'Corrida', icone: 'speedometer' },
  { nome: 'Terror', icone: 'ghost' },
  { nome: 'Esportes', icone: 'esports' },
]

function ProximoJogo() {
  return (
    <div id="proximoJogo">
      <h3>Qual é seu próximo jogo?</h3>
      <span>Encontre experiências baseadas no seu estilo.</span>
      <div className="tipojogo">
        {generos.map((genero) => (
          <a href="#lancamentos" key={genero.nome}>
            <div className="minicard">
              <img src={`img/${genero.icone}.png`} alt={genero.nome} />
              <h4>{genero.nome}</h4>
            </div>
          </a>
        ))}
      </div>
      <a href="#lancamentos" className="minicard btn_outglow">Veja todos os Gêneros &gt;</a>
    </div>
  )
}

export default ProximoJogo