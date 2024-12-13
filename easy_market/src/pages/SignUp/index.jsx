import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { usePopup } from "../../hooks/PopupContext"

import logo from "../../assets/logo.png"
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { Container, Form, BackgroundImg } from "./styles"

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { showPopup } = usePopup()

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    async function handleSignUp(event) {
        event.preventDefault()
        setLoading(true)


        if (!name || !email || !password) {
            setLoading(false)
            return showPopup("Preencha todos os campos! ✍️")
        }

        try {
            await api.post("/users", { userName: name, email, password })
            showPopup("Cadastro realizado com sucesso! 👍")
            navigate("/")
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Não foi possível cadastrar! ❌";
            showPopup(errorMessage);
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container>
            <Form>
                <img src={logo} alt="Logo da empresa" />

                <h2>Faça o seu cadastro</h2>

                <Input
                placeholder="Nome"
                type="text"
                icon={FiUser}
                onChange={(e) => setName(e.target.value)}
                />

                <Input
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="Senha"
                type="password"
                icon={FiLock}
                onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                title={loading ? "Salvando dados..." : "Cadastrar"}
                onClick={handleSignUp}
                loading={loading}
                classSpin="spinButton"
                />

                <ButtonText
                title="Voltar para o login"
                onClick={handleBack}
                className="back"
                icon={FiArrowLeft}
                />
            </Form>

            <BackgroundImg />
        </Container>
    )
}
