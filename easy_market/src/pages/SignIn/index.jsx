import { useState } from "react"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { usePopup } from "../../hooks/PopupContext"

import logo from "../../assets/logo.png"
import { FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, BackgroundImg } from "./styles"

export function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const { signIn } = useAuth()
    const { showPopup } = usePopup()

    async function handleSignIn(event) {
        event.preventDefault()
        setLoading(true)

        if (!email || !password) {
            setLoading(false)
            return showPopup("Preencha todos os campos! ✍️")
        }

        try {
            await signIn({ email, password })
        } catch (error) {
            showPopup(error.message || "Erro de autenticação. Tente novamente.")
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <Form>
                <img src={logo} alt="Logo da empresa" />

                <h2>Faça o seu login</h2>

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
                    title={loading ? "Verificando dados" : "Entrar"}
                    onClick={handleSignIn}
                    loading={loading}
                    classSpin="spinButton"
                />

                <Link to="/register">Criar conta</Link>
            </Form>

            <BackgroundImg />
        </Container>
    )
}
