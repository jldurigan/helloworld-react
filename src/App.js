import { useState } from "react"
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from "./components/Time";

function App() {

  const [times, setTimes] = useState([
    {
      id: 1,
      nome: "Programação",
      cor: '#d9f7e9'
    },
    {
      id: 2,
      nome: "Front-end",
      cor: '#E8F8FF'
    },
    {
      id: 3,
      nome: "Data Science",
      cor: '#F0E7E8'
    },
    {
      id: 4,
      nome: "DevOps",
      cor: '#FDE7E8'
    },
    {
      id: 5,
      nome: "UX e Design",
      cor: '#FAE9F5'
    },
    {
      id: 6,
      nome: "Mobile",
      cor: '#FFF5D9'
    },
    {
      id: 7,
      nome: "Inovação e Gestão",
      cor: '#FFEEDF'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrarNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {

  }

  const mudarCorDoTime = (cor, idTime) => {
    setTimes(times.map(time => {
      if (time.id === idTime)
        time.cor = cor;
      return time
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoCadastrarColaborador={colaborador => aoCadastrarNovoColaborador(colaborador)} />
      {times.map(time =>
        <Time
          id={time.id}
          key={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          mudarCor={mudarCorDoTime}
          aoDeletar={deletarColaborador}
        />
      )}
    </div>
  );
}

export default App;
