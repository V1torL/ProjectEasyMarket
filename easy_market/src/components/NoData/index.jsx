import { Container } from "./styles"

export function NoData({ title, phrase, url, className }) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <p>{phrase}</p>
      </div>

      <img src={url} alt="Imagem de uma lista" className={className} />
    </Container>
  )
}