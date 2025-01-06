import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"
import { usePopup } from "../../hooks/PopupContext"

import Webcam from "react-webcam"
import jsQR from "jsqr"
import html2canvas from "html2canvas"

import { Menu } from "../../components/Menu"
import { Content } from "../../components/Content"
import { Button } from "../../components/Button"

import { Container, Record, InputWrapper } from "./styles"

export function NewNote() {
  const { user } = useAuth()
  const webcamRef = useRef(null)
  const [scanning, setScanning] = useState(false)
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("Iniciar Scanner")
  const [manualUrl, setManualUrl] = useState("")
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { showPopup } = usePopup()

  function toggleScanning() {
    if (scanning) {
      // Se já estiver escaneando, interrompe o processo
      setScanning(false)
    } else {
      // Se não estiver escaneando, começa o processo
      setScanning(true)
      handleScan()
    }
  }

  async function handleScan() {
    if (webcamRef.current && scanning) {
      const imageData = await html2canvas(webcamRef.current.video, {
        useCORS: true,
        logging: false,
      }).then((canvas) => {
        return canvas
          .getContext("2d")
          .getImageData(0, 0, canvas.width, canvas.height)
      })
      const code = jsQR(imageData.data, imageData.width, imageData.height)

      if (code) {
        setScanning(false)
        showPopup(
          "Scanner feito com sucesso! 📷",
          "Aguarde, retornaremos uma mensagem quando tudo estiver pronto."
        )

        try {
          const response = await api.post(`/notes/scrape`, { url: code.data })

          handleSaveScrape(response.data)
        } catch (error) {
          if (error.response) {
            showPopup(error.response.data.message)
          } else {
            showPopup("Não foi possível cadastrar. ❌")
          }
        } finally {
          setScanning(false)
        }
      } else {
        //showPopup("Não conseguimos ler o QR code. ❌")
      }
    }
  }

  async function handleSaveScrape(result) {
    setLoading(true)

    try {
      await api.post(`/notes/newNote/${user.id}`, result)
    } catch (error) {
      if (error.response) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível cadastrar. ❌")
      }
    } finally {
      showPopup(
        "Nota cadastrada com sucesso. 🗂️",
        "Você será redirecionado para página Minhas Notas."
      )

      navigate(-1)
      setLoading(false)
    }
  }

  function handleSaveManual() {
    if (manualUrl.trim() === "") {
      showPopup("Por favor, insira uma URL válida. ❌")
      return
    }

    handleSaveScrape({ url: manualUrl })
    setManualUrl("")
  }

  useEffect(() => {
    if (scanning) {
      const interval = setInterval(() => {
        handleScan()
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [scanning])

  useEffect(() => {
    if (scanning && !loading) {
      setTitle("Parar Scanner")
    } else if (loading && !scanning) {
      setTitle("Registrando nota")
    } else {
      setTitle("Iniciar Scanner")
    }
  }, [scanning, loading])

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <Content
        title="Registrar nova nota"
        back
        onOpenMenu={() => setMenuIsOpen(true)}
      >
        <Record>
          <div>
            <p>
              Para registrar uma nova compra, você pode usar o scanner de QR
              Code ou inserir a URL manualmente.
            </p>

            <Button
              onClick={toggleScanning}
              title={title}
              loading={loading}
              classSpin="spinButton"
            />
            
            <InputWrapper>
              <input
                type="text"
                placeholder="Digite a URL aqui"
                value={manualUrl}
                onChange={(e) => setManualUrl(e.target.value)}
              />
              <Button
                onClick={handleSaveManual}
                title="Salvar Manualmente"
                loading={loading}
              />
            </InputWrapper>
          </div>

          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{ facingMode: "environment" }}
            style={{
              width: "50%",
              height: "50%",
              margin: "auto",
              objectFit: "cover",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Record>
      </Content>
    </Container>
  )
}
