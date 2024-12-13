import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { usePopup } from "../../hooks/PopupContext"

import { LuClock4 } from "react-icons/lu"
import { FaRegCalendarAlt } from "react-icons/fa"
import { PacmanLoader } from "react-spinners"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Tag } from "../../components/Tag"
import { IconButton } from "../../components/IconButton"

import { Container, Nota, Table, Remove } from "./styles"

export function PreviewNote() {
  const { showPopup } = usePopup()
  const [data, setData] = useState({ produtos: [] })
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const params = useParams()

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await fetch("/itens.json")
        const data = await response.json()
        setData(data.produtos[0])  // Ajustando para acessar o primeiro produto
      } catch (error) {
        console.error("Erro ao buscar os dados:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLists()
  }, [])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      {loading ? (
        <Content onOpenMenu={() => setMenuIsOpen(true)}>
          <div
            style={{
              height: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <PacmanLoader color="#D5CB04" loading={loading} size={50} />
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#D5CB04",
              }}
            >
              Buscando dados...
            </h2>
          </div>
        </Content>
      ) : (
        <Content
          title={data.local?.nomeEstabelecimento || "Nome Estabelecimento"}
          back
          onOpenMenu={() => setMenuIsOpen(true)}
        >
          <Nota>
            <div>
              <p>
                <LuClock4 />{" "}
                {data.dataDeEfetuacao?.hora +
                  ":" +
                  data.dataDeEfetuacao?.minuto +
                  ":" +
                  data.dataDeEfetuacao?.segundo}
              </p>
              <p>
                <FaRegCalendarAlt />{" "}
                {data.dataDeEfetuacao?.dia +
                  "/" +
                  data.dataDeEfetuacao?.mes +
                  "/" +
                  data.dataDeEfetuacao?.ano}
              </p>
            </div>

            <footer>
              <Tag title={`R$ ${data.valorTotalNota}`} />
              <Tag title={`${data.itens.length} itens`} />
            </footer>
          </Nota>

          <Table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
              </tr>
            </thead>

            <tbody>
              {data.itens.map((item, index) => (
                <tr key={String(index)}>
                  <td>{item.produto}</td>
                  <td>{item.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Remove>
            <button onClick={() => handleRemoveNote(data.itens[0]._id)}>
              Deletar Nota
            </button>
          </Remove>
        </Content>
      )}
    </Container>
  )
}
