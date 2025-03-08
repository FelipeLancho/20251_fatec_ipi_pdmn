import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"
const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos o que aconteceu")
  const componenteFeedback = 
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
    />
  return (
    <div className="container border rounded mt-2">
      <div className="row">
        
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
          cabecalho="22/04/2024"> 
          <Pedido 
          icone="headset"
          titulo="Headset"
          descricao="Headset bluetooth"
          />
          {componenteFeedback}
          </Cartao>
          
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
          cabecalho="22/03/2023">
          <Pedido 
          icone="gamepad"
          titulo="GamePad"
          descricao="GamePad Nintendo"
          />
          {componenteFeedback}
          </Cartao>
          
        </div>
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
          cabecalho="21/04/2024">
          <Pedido 
          icone="hippo"
          titulo="Hipopótamo"
          descricao="Hipopótamo Fêmea"
          />
          {componenteFeedback}
          </Cartao>
         
        
        </div>
        
        <div className="col-sm-12 col-md-6 col-xxl-3">
          <Cartao
          cabecalho="20/04/2024">
          <Pedido
          icone="snowman"
          titulo="Boneco de neve"
          descricao="Boneco de neve balançando para todos os lados"
          />
          {componenteFeedback}
          </Cartao>
          
        </div>
      
      </div>
    </div>
  )
}

export default App