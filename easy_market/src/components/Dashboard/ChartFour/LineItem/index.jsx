import { Container } from "./styles"

export function LineItem({ data }) {
  return (
    <Container>
      <p>
        <span className="colocacao">
          {data.rank}º {data.produto}
        </span>
      </p>
    </Container>
  )
}
