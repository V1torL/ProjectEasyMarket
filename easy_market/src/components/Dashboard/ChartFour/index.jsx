import { GrNotes } from "react-icons/gr"

import { LineItem } from "./LineItem"

import { Container, List, Header, NoSpent } from "./styles"

export function ChartFour({ data }) {
  const itemsPerPage = 5 // Defina o número de itens a serem exibidos
  const limitedData = data.slice(0, itemsPerPage) // Limita os dados a apenas 5 produtos

  return (
    <Container>
      {data.length > 0 ? (
        <>
          <Header>
            <h3>Produtos mais comprados no mês</h3>
          </Header>

          <List>
            {limitedData.map((item, index) => (
              <LineItem
                key={index}
                data={{
                  rank: index + 1, // Adiciona o ranking
                  produto: item.produto // Passa apenas o nome do produto
                }}
              />
            ))}
          </List>
        </>
      ) : (
        <NoSpent>
          <GrNotes />
          <h1>Você não teve gasto esse mês!</h1>
          <p>Registre notas para você saber o quanto gastou.</p>
        </NoSpent>
      )}
    </Container>
  )
}
