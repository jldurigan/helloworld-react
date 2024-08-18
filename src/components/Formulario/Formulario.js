import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

export const Formulario = ({ times, aoCadastrarColaborador }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (e) => {
        e.preventDefault()
        aoCadastrarColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    type="text"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)} />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    type="text"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)} />
                <Campo
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o caminho da imagem"
                    type="text"
                    valor={imagem}
                    aoAlterar={valor => setImagem(valor)} />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterar={valor => setTime(valor)} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}