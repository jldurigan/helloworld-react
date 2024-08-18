import "./ListaSuspensa.css"

export const ListaSuspensa = ({ label, obrigatorio, valor, itens, aoAlterar }) => {

    const aoSelecionar = (e) => {
        aoAlterar(e.target.value)
    }

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                required={obrigatorio}
                onChange={aoSelecionar}
                value={valor}>
                {itens.map(item => {
                    return <option key={item.id}>{item.nome}</option>
                })}
            </select>
        </div>
    )
}