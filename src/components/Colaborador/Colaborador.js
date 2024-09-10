import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import "./Colaborador.css"

export const Colaborador = ({ id, nome, imagem, cargo, cor, favorito = false, aoDeletar, aoFavoritar }) => {
    const propsFavoritar = {
        size: 25,
        onClick: () => aoFavoritar(id)
    }

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
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favorito">
                    {favorito ? <AiFillHeart color="#ff0000" {...propsFavoritar} /> : <AiOutlineHeart {...propsFavoritar} />}
                </div>
            </div>
        </div>
    )
}