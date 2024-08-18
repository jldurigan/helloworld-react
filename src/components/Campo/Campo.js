import "./Campo.css"

export const Campo = ({label, valor, obrigatorio, placeholder, type, aoAlterar}) => {

    const aoDigitar = (evento) => {
        aoAlterar(evento.target.value)
    }

    return (
        <div className="campo">
            <label>{label}</label>
            <input
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholder} 
                type={type} />
        </div>
    )
}