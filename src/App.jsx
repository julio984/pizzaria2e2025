import { useState } from "react"

function App() {


const Formulario = ()=>{

  const [nome, setNome] = useState('cthulhu')
  
  return (
    <div>
      <input 
      className = "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button 
      className="botao"
      onClick={()=>{alert(nome)}}
      >
        CLIQUE AQUI
      </button>
    </div>
  )
}


  return (
    <div>
      <h3>Pizzaria 2E</h3>

    <Formulario />
    <Formulario />
    <Formulario />
    <Formulario />

    </div>
  )
}

export default App