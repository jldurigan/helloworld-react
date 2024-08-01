import "./ListaSuspensa.css"

export const ListaSuspensa = (props) => {

    const aoSelecionar = (e) => {
        props.aoAlterar(e.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                required={props.obrigatorio}
                onChange={aoSelecionar}
                value={props.valor}>
                {props.itens.map(item => {
                    return <option key={item.id}>{item.nome}</option>
                })}
            </select>
        </div>
    )
}