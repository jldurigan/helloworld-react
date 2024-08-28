import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

export const Formulario = ({ times, aoCadastrarColaborador, cadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

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

    const salvarTime = (e) => {
        e.preventDefault();
        cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })
        setNomeTime('')
        setCorTime('')
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
            <form onSubmit={salvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    type="text"
                    valor={nomeTime}
                    aoAlterar={valor => setNomeTime(valor)}
                />
                <div className="input-cor-formulario">
                    <label>Selecione a cor do time:</label>
                    <input
                        value={corTime}
                        type="color"
                        onChange={e => setCorTime(e.target.value)}
                    />
                </div>
                <Botao>
                    Criar time
                </Botao>
            </form>
        </section>
    )
}