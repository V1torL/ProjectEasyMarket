import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"
import { usePopup } from "../../hooks/PopupContext"

import { LuClock4 } from "react-icons/lu"
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi"
import { FaRegCalendarAlt } from "react-icons/fa"
import { PacmanLoader } from "react-spinners"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Tag } from "../../components/Tag"
import { IconButton } from "../../components/IconButton"

import { Container, Nota, Table, Remove } from "./styles"

export function PreviewNote() {
  const { user } = useAuth()
  const { showPopup } = usePopup()
  const [data, setData] = useState({ items: [] })
  const [totalPages, setTotalPages] = useState(0)
  const [displayItems, setDisplayItems] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const params = useParams()

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToNextPage() {
    setPage(page + 1)
  }

  async function handleRemoveNote(id) {
    try {
      await api.delete(`/notes/database/${user.id}/delete/${id}`)
    } catch (error) {
      if (error.response) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível cadastrar. ❌")
      }
    } finally {
      showPopup("Nota deletada com sucesso. ✅")
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/notes/web/database/get/${params.id}`)
        setData(response.data)

        setTotalPages(Math.ceil(response.data[0].itens.length / 10))
        if (response.data[0].itens.length === 10) {
          setDisplayItems(10)
        } else {
          setDisplayItems(response.data[0].itens.length % 10)
        }

        console.log()
      } catch (error) {
        if (error) {
          console.error("Erro ao buscar os dados", error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      {loading === true ? (
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
          title={data[0].local.nomeEstabelecimento}
          back
          onOpenMenu={() => setMenuIsOpen(true)}
        >
          <Nota>
            <div>
              <p>
                <LuClock4 />{" "}
                {data[0].dataDeEfetuacao.hora +
                  ":" +
                  data[0].dataDeEfetuacao.minuto +
                  ":" +
                  data[0].dataDeEfetuacao.segundo}
              </p>

              <p>
                <FaRegCalendarAlt />{" "}
                {data[0].dataDeEfetuacao.dia +
                  "/" +
                  data[0].dataDeEfetuacao.mes +
                  "/" +
                  data[0].dataDeEfetuacao.ano}
              </p>
            </div>

            <footer>
              <Tag title={`R$ ${data[0].valorTotalNota}`} />
              <Tag title={`${data[0].itens.length} items`} />
            </footer>
          </Nota>

          <Table>
            <thead>
              <tr>
                <th>Produto</th>

                <th>Quantidade</th>

                <th>Categoria</th>

                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {data[0].itens
                .slice((page - 1) * 10, page * 10)
                .map((item, index) => (
                  <tr key={String(index)}>
                    <td>{item.description}</td>
                    <td>{item.amount}</td>
                    <td>{item.category}</td>
                    <td>R$ {item.totalPriceOnPurchase}</td>
                  </tr>
                ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan={1}>
                  {" "}
                  Mostrando{" "}
                  {page === Math.ceil(data[0].itens.length / 10)
                    ? displayItems
                    : 10}{" "}
                  de {data[0].itens.length} itens
                </td>
                <td colSpan={3}>
                  <div className="pagination">
                    <span>
                      Página {page} de {totalPages}
                    </span>

                    <div>
                      <IconButton
                        onClick={goToFirstPage}
                        disabled={page === 1}
                        icon={FiChevronsLeft}
                      />

                      <IconButton
                        onClick={goToPreviousPage}
                        disabled={page === 1}
                        icon={FiChevronLeft}
                      />

                      <IconButton
                        onClick={goToNextPage}
                        disabled={page === totalPages}
                        icon={FiChevronRight}
                      />

                      <IconButton
                        onClick={goToLastPage}
                        disabled={page === totalPages}
                        icon={FiChevronsRight}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </Table>

          <Remove>
            <button onClick={() => handleRemoveNote(data[0]._id)}>
              Deletar Nota
            </button>
          </Remove>
        </Content>
      )}
    </Container>
  )
}
