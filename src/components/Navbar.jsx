import { useState } from 'react'

const itensMenu = [
  { texto: 'Início', href: '#inicio' },
  { texto: 'Lançamentos', href: '#lancamentos' },
  { texto: 'Gêneros', href: '#proximoJogo' },
  { texto: 'Estatísticas', href: '#estatisticas' },
  { texto: 'Lojas', href: '#lojas' },
]

function Navbar() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a href="#inicio" className="navbar-brand">
          <img src="img/logo.png" alt="Logo" id="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menu"
          onClick={() => setAberto(!aberto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarSupportedContent"
          className={`menu collapse navbar-collapse ${aberto ? 'show' : ''}`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {itensMenu.map((item) => (
              <li className="nav-item" key={item.href}>
                <a href={item.href} className="nav-link" onClick={() => setAberto(false)}>
                  {item.texto}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex">
            <a href="#" id="pesquisa"><img src="img/search.png" alt="pesquisa" /></a>
            <a href="#" id="usuario">
              <img src="img/user.png" alt="user" id="userimg" /> Usuário
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar