import "./Colaborador.css"

export const Colaborador = ({ nome, imagem, cargo, cor }) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{ backgroundColor: cor }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4 style={{ color: cor }}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}