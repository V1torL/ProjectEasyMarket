import { useNavigate } from "react-router-dom"

import image from "../../assets/illustration-page-404.png"

import { Container, Content } from "./styles"

export function NotFound() {
  const navigate = useNavigate()

  function handleBackInitial() {
    navigate("/")
  }

  return (
    <Container>
      <Content>
        <img src={image} alt="Imagem de um robó quebrado com os números 404" />

        <div>
          <h1>Ops... algo está faltando!</h1>

          <p>A página que você procura não foi encontrada.</p>

          <button onClick={handleBackInitial}>Vá para a página inicial</button>
        </div>
      </Content>
    </Container>
  )
}
