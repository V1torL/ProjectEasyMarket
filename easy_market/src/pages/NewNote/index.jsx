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
    setScanning((prev) => !prev)
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
        showPopup("Scanner feito com sucesso! 📷", "Nota sendo salva localmente.")
        handleSaveScrape({ url: code.data })
      }
    }
  }

  function handleSaveScrape(result) {
    setLoading(true);
  
    try {
      const storedNotes = JSON.parse(localStorage.getItem("Notas")) || [];
      const nextId = parseInt(localStorage.getItem("nextNoteId") || "0", 10);
  
      const newNote = {
        id: nextId,
        ...result,
        userEmail: user.email,
        date: new Date().toISOString(),
      };
  
      const updatedNotes = [...storedNotes, newNote];
      localStorage.setItem("Notas", JSON.stringify(updatedNotes));
      localStorage.setItem("nextNoteId", nextId + 1);
  
      showPopup("Nota cadastrada com sucesso. 🗂️", "Redirecionando...");
      navigate(-1);
    } catch (error) {
      showPopup("Não foi possível salvar a nota. ❌");
    } finally {
      setLoading(false);
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
