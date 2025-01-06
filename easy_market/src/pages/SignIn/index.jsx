// Importa funcionalidades necessarias;
import { useState } from "react"
import { Link } from "react-router-dom"

// Import de autenticação para acessar a funcionalidade de login
import { useAuth } from "../../hooks/auth"

// Import para exibir popups de feedback para o usuário;
import { usePopup } from "../../hooks/PopupContext"

// Importa a logo da empresa e os ícones necessários para o formulário;
import logo from "../../assets/logo.png"
import { FiMail, FiLock } from "react-icons/fi"

// Importa componentes personalizados;
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

// Importa os estilos específicos para essa página;
import { Container, Form, BackgroundImg } from "./styles"

// Define o componente funcional SignIn, responsável pela página de login;
export function SignIn() {
    // Estados locais para armazenar email, senha e status de carregamento;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    // Função de login obtida a partir do contexto de autenticação;
    const { signIn } = useAuth()

    // Função para exibir mensagens de popup;
    const { showPopup } = usePopup()

    // Função que lida com o envio do formulário de login;
    async function handleSignIn(event) {
        event.preventDefault();  // Impede o comportamento padrão de envio do formulário;
        setLoading(true);  // Ativa o estado de carregamento;

        // Verifica se os campos de email e senha estão preenchidos;
        if (!email || !password) {
            setLoading(false)   // Desativa o estado de carregamento;
            return showPopup("Preencha todos os campos! ✍️")
        }

        try {
            // Tenta realizar o login com os dados fornecidos
            await signIn({ email, password })
        } catch (error) {
            // Exibe popup com a mensagem de erro;
            showPopup(error.message || "Erro de autenticação. Tente novamente.")
        } finally {
            setLoading(false); // Desativa o estado de carregamento no final do processo;
        }
    }

    return (
        <Container>
            <Form>
                <img src={logo} alt="Logo da empresa" /> {/* Exibe a logo da empresa */}

                <h2>Faça o seu cadastro</h2> {/* Título da página */}

                {/* Campo de entrada para o email */}
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Campo de entrada para a senha */}
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Botão de login */}
                <Button
                    title={loading ? "Verificando dados" : "Entrar"}
                    onClick={handleSignIn}
                    loading={loading}
                    classSpin="spinButton"
                />

                {/* Link para criar uma nova conta */}
                <Link to="/register">Criar conta</Link>
            </Form>
            <BackgroundImg />
        </Container>
    )
}
