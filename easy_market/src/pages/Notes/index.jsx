import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { IoQrCode } from "react-icons/io5"
import { PacmanLoader } from "react-spinners"

import backgroundImg from "../../assets/illustration-page-note.png"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { CardNote } from "../../components/CardNote"
import { NoData } from "../../components/NoData"

import { Container, Search, List, More } from "./styles"

export function Notes() {
  const { user } = useAuth()
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState(() => {
    const height = innerHeight

    return height < 550 ? 3 : 6
  })

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const totalCards = notes.length

  const navigate = useNavigate()

  function handlePreview() {
    navigate(`/preview-note/${id}`)
  }

  function handleNewNote() {
    navigate("/new-note")
  }

  function handleAddCards() {
    if (cards > totalCards) {
      setCards(totalCards)
    } else {
      setCards(cards + 3)
    }
  }

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await api.get(`/notes/web/database/${user.id}`)
        setNotes(response.data)
      } catch (error) {
        console.error("Erro ao buscar as notas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLists()
  }, [user.id])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      {loading === true ? (
        <Content title="Notas Salvas" onOpenMenu={() => setMenuIsOpen(true)}>
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
        <Content title="Notas Salvas" onOpenMenu={() => setMenuIsOpen(true)}>
          <Search>
            <Input
              placeholder="Pesquisar..."
              onChange={(e) => setSearch(e.target.value)}
              disabled
            />

            <Button
              title="Registrar "
              icon={IoQrCode}
              onClick={handleNewNote}
            />
          </Search>

          {notes.length > 0 ? (
            <>
              <List>
                {notes.slice(0, cards).map((note) => (
                  <CardNote
                    key={String(note.codigo)} 
                    onClick={() => handlePreview()} 
                    data={note}
                  />
                ))}
              </List>

              {totalCards <= 6 || cards > totalCards ? null : (
                <More>
                  <button onClick={handleAddCards}>Mais Notas</button>
                </More>
              )}
            </>
          ) : (
            <NoData
              title="Nenhuma nota cadastrada!"
              phrase="Registre uma nota para que fique salva no seu perfil e você possa visualizar quando quiser."
              url={backgroundImg}
              className="note"
            />
          )}
        </Content>
      )}
    </Container>
  )
}
