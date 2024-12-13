import marketImg from "../../../assets/esquinao.jpg"
import { GrNotes } from "react-icons/gr"
import { Container, NoData } from "./styles"

export function ChartTwo({ data }) {
  // Verifica se 'data' é uma lista e se ela tem itens
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <NoData>
        <GrNotes />
        <h1>Você não fez compras esse mês</h1>
        <p>Registre suas notas para poder analisar seus gastos!</p>
      </NoData>
    )
  }

  return (
    <Container>
      {data.map((item, index) => (
        <div key={String(index)}>
          <img src={marketImg} alt="Logo do mercado" />
          <div>
            <p className="name">{item.name_market}</p>
            <p className="spent">R$ {item.totalSpent}</p>
          </div>
        </div>
      ))}
    </Container>
  )
}
