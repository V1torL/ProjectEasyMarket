import { Container } from "./styles"
import { Tag } from "../Tag"

export function CardNote({ data, ...rest }) {
  const tags = [
    {
      name: `Itens ${data.itens.length}`,
    },
    {
      name: `R$ ${data.valorTotalNota.toFixed(2)}`, // Garantindo que o valor esteja formatado
    },
    {
      name: `${data.dataDeEfetuacao.dia}/${data.dataDeEfetuacao.mes}/${data.dataDeEfetuacao.ano}`,
    },
    {
      name: `${data.dataDeEfetuacao.hora}:${data.dataDeEfetuacao.minuto}:${data.dataDeEfetuacao.segundo}`,
    },
  ]

  return (
    <Container {...rest}>
      <h3>{data.local.nomeEstabelecimento}</h3>

      <p>
        {data.local.endereco.rua}, {data.local.endereco.numero}º -{" "}
        {data.local.endereco.bairro} - {data.local.endereco.cidade} /{" "}
        {data.local.endereco.estado}
      </p>

      {tags && (
        <footer>
          {tags.map((tag, index) => (
            <Tag key={String(index)} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  )
}
