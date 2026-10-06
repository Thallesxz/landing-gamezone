function Banner() {
  return (
    <banner id="inicio">
      <div className="col-lg-4 col-sm-6 bantext">
        <c>Bem vindo à</c>
        <h1>Game<c>zone.</c></h1>
        <h2><c>Explore.</c> jogue. Conecte-se.</h2>
        <p>O seu destino definitivo para descobrir os melhores jogos, notícias e uma comunidade apaixonada por games.</p>
        <div>
          <a href="#lancamentos" className="btn_purp col-5">Explorar Jogos &gt;</a>
          <a href="#estatisticas" className="btn_outglow col-4">Saiba Mais</a>
        </div>
      </div>
      <div>
        <img src="img/personagem_banner.png" alt="personagem" id="pers_banner" />
      </div>
    </banner>
  )
}

export default Banner