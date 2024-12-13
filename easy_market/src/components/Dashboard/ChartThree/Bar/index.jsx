import { Container } from "./styles"

export function Bar({ data, heightMax, onMouseOver, onMouseOut, ...rest }) {
  const heightCalculation = Math.ceil((data.value / heightMax) * 100).toFixed(0)

  return (
    <Container
      onMouseOver={(e) => onMouseOver(e, `${data.month}`)}
      onMouseOut={onMouseOut}
      {...rest}
    >
      <div className="bar" style={{ height: `${heightCalculation}%` }}></div>
      <span>{data.month}</span>
    </Container>
  )
}
