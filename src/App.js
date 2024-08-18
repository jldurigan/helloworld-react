import { useState } from "react"
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from "./components/Time";

function App() {

  const times = [
    {
      id: 1,
      nome: "Programação",
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9'
    },
    {
      id: 2,
      nome: "Front-end",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      id: 3,
      nome: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0E7E8'
    },
    {
      id: 4,
      nome: "DevOps",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      id: 5,
      nome: "UX e Design",
      corPrimaria: '#D86E8F',
      corSecundaria: '#FAE9F5'
    },
    {
      id: 6,
      nome: "Mobile",
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      id: 7,
      nome: "Inovação e Gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrarNovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times} aoCadastrarColaborador={colaborador => aoCadastrarNovoColaborador(colaborador)} />
      {times.map(time => <Time
        key={time.id}
        nome={time.nome}
        corPrimaria={time.corPrimaria}
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} />)}
    </div>
  );
}

export default App;
