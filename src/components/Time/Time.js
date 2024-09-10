import hexToRgba from "hex-to-rgba"
import Colaborador from "../Colaborador"
import "./Time.css"

export const Time = ({ id, nome, cor, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundColor: hexToRgba(cor, '0.5') }}>
            <input onChange={evento => mudarCor(evento.target.value, id)} type="color" className="input-cor" value={cor} />
            <h3 style={{ borderColor: cor }}>{nome}</h3>
            {colaboradores.map(colaborador =>
                <Colaborador
                    id={colaborador.id}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    favorito={colaborador.favorito}
                    cor={cor}
                    aoDeletar={aoDeletar}
                    aoFavoritar={aoFavoritar}
                />
            )}
        </section>
    )
}