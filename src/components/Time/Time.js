import Colaborador from "../Colaborador"
import "./Time.css"

export const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
    return (
        colaboradores.length > 0 &&
        <section className="time" style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            {colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
        </section>
    )
}