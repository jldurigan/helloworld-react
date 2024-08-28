import { useState } from "react"
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from "./components/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: '#FF8A29'
    },
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrarNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }])
  }

  const deletarColaborador = (id) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
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
      <Formulario
        times={times}
        aoCadastrarColaborador={colaborador => aoCadastrarNovoColaborador(colaborador)}
        cadastrarTime={cadastrarTime}
      />
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
