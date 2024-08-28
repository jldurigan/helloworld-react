import { AiFillCloseCircle } from "react-icons/ai"
import "./Colaborador.css"

export const Colaborador = ({ id, nome, imagem, cargo, cor, aoDeletar }) => {
    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => aoDeletar(id)}
            />
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