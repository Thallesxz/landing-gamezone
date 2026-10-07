import { Fragment } from 'react'

const links = [
  { texto: 'Início', href: '#inicio' },
  { texto: 'Lançamentos', href: '#lancamentos' },
  { texto: 'Gêneros', href: '#proximoJogo' },
  { texto: 'Lojas', href: '#lojas' },
]

const redes = ['discord', 'instagram', 'twitter', 'youtube']

function Footer() {
  return (
    <footer>
      <div className="col-lg-2 col-md-12 foot-spc">
        <img src="img/logo.png" alt="Gamezone" />
        <p>Conectando Jogadores.</p>
        <p>Criando Histórias</p>
        <p>Construindo o futuro dos Games.</p>
        <div id="social">
          {redes.map((rede) => (
            <img key={rede} src={`img/${rede}.png`} alt={rede} className="img" />
          ))}
        </div>
      </div>
      <div className="col-lg-2 col-md-12 foot-spc">
        <h4>Navegação</h4>
        <p>
          {links.map((link) => (
            <Fragment key={link.href}>
              <a href={link.href}>{link.texto}</a>
              <br />
            </Fragment>
          ))}
        </p>
      </div>
      <div className="col-lg-2 col-md-12 foot-spc">
        <h4>Fique por dentro</h4>
        <p>Receba as últimas notícias e lançamentos em primeira mão!</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" name="email" id="email" />
          <button id="send"><img src="img/send.png" alt="Enviar" /></button>
        </form>
      </div>
    </footer>
  )
}

export default Footer