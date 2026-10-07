function CardLoja({ loja }) {
  return (
    <div className="card-loja">
      <div className="card-img">
        <span className="badge-parceiro">
          <i className="bi bi-patch-check-fill"></i> Parceiro Oficial
        </span>
      </div>
      <div className="card-body">
        <h3>{loja.nome}</h3>
        <p className="card-endereco"><i className="bi bi-geo-alt-fill"></i> {loja.endereco}</p>
        <p className="card-horario"><i className="bi bi-clock-fill"></i> {loja.horario}</p>
        <span className="tag-estado">{loja.estado}</span>
      </div>
    </div>
  )
}

export default CardLoja