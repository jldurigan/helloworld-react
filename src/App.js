import { useState } from "react"
import './App.css';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from "./components/Time";

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoCadastrarNovoColaborador = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarColaborador={colaborador => aoCadastrarNovoColaborador(colaborador)} />
      <Time nome="Programação" />
      <Time nome="Front-end" />
    </div>
  );
}

export default App;
