import "./Campo.css"

export const Campo = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className="campo">
            <label>{props.label}</label>
            <input
                value={props.valor} 
                onChange={aoDigitar} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} 
                type={props.type} />
        </div>
    )
}