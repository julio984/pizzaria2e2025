import { useState } from "react"

function App() {

  const [nome, setNome] = useState('cthulhu')
  const [idade, setIdade] = useState(18)
  const [livro, setTime] = useState('amarelo')
  const [pi] = useState(3.14)

  //var idade = 18;
  //let livro = 'amarelo';
  //const pi = 3.14;

const Formulario = (props) => {
  const [valor, setValor] = useState()
  
  return (
    <div>
      <input 
      className = "nome"
      placeholder= {props.sombra}
      onChange={(e)=>{setValor(e.target.value)}}
      type="text" />

      <button 
      className="botao"
      onClick={()=>{
        if (valor.length > 0){
          alert(valor);
        }
        else
        alert(props.nome + ' idade é' + props.idade
        )}}
      >
        CLIQUE AQUI
      </button>
    </div>
  )
}


  return (
    <div>
      <h3>Pizzaria 2E</h3>

    <Formulario nome="Ricardo"
    idade={45}
    sombra="Digite nome..." />
    <Formulario nome="Maria" sombra="Digite sua idade..." />
    <Formulario nome="Tomas" sombra="DIgite seu livro..." />
    <Formulario nome="Antonieta" sombra="valor de pi..." />
    <Formulario />
    <Formulario />
    <Formulario />

    </div>
  )
}

export default App
