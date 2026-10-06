import { useRef } from 'react'
import { lancamentos } from '../data/jogos'

const plataformas = ['win', 'ps', 'sw', 'xbox']

function Lancamentos() {
  const carrossel = useRef(null)

  function rolar(direcao) {
    const item = carrossel.current.querySelector('.carousel-item')
    carrossel.current.scrollBy({ left: direcao * item.offsetWidth, behavior: 'smooth' })
  }

  return (
    <div id="lancamentos">
      <div className="sml-title col-3">
        <div><img src="img/fire.png" alt="foguinho" /></div>
        <div><h4>Lançamentos</h4></div>
      </div>
      <div>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner carousel-inner-home" ref={carrossel}>
            {lancamentos.map((jogo) => (
              <div className="carousel-item carousel-item-home" key={jogo.id}>
                <div className="card card-home">
                  <a href={jogo.link}>
                    <div className="img-wraper">
                      <img
                        className="card-img-top card-img-top-home img-home"
                        src={jogo.imagem}
                        alt={jogo.titulo}
                      />
                    </div>
                    <div className="card-body card-body-home">
                      <span className="badge badge-secondary">{jogo.genero}</span>
                      <h5 className="card-title card-title-home">{jogo.titulo}</h5>
                      <p className="card-text card-text-home">{jogo.descricao}</p>
                    </div>
                    <div className="card-rating-plat">
                      <div>
                        <img src="img/star.png" alt="estrelas" style={{ filter: 'grayscale(0%)' }} />
                        <span>{jogo.nota}</span>
                      </div>
                      <div>
                        {plataformas.map((p) => (
                          <img key={p} src={`img/${p}-plat-logo.png`} alt="plataforma" />
                        ))}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev carousel-control-prev-home"
            type="button"
            aria-label="Anterior"
            onClick={() => rolar(-1)}
          >
            <span className="carousel-control-prev-icon carousel-control-prev-icon-home" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next carousel-control-next-home"
            type="button"
            aria-label="Próximo"
            onClick={() => rolar(1)}
          >
            <span className="carousel-control-next-icon carousel-control-next-icon-home" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Lancamentos