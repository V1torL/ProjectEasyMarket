// Importa funcionalidades necessarias;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

// Importa para exibir popups de feedback para o usuário;
import { usePopup } from "../../hooks/PopupContext";

// Importa a logo da empresa e os ícones necessários para o formulário;
import logo from "../../assets/logo.png";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

// Importa componentes personalizados;
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

// Importa os estilos específicos para essa página;
import { Container, Form, BackgroundImg } from "./styles";

// Componente para a página de cadastro;
export function SignUp() {

    // Estados locais para armazenar os valores dos campos de input e o status de carregamento;
    const [name, setName] = useState(""); // Nome do usuário;
    const [email, setEmail] = useState(""); // E-mail do usuário;
    const [password, setPassword] = useState(""); // Senha do usuário;
    const [loading, setLoading] = useState(false); // Estado de carregamento para o botão de cadastro;

    // Desestrutura o hook 'usePopup' para acessar a função 'showPopup', que exibe mensagens para o usuário;
    const { showPopup } = usePopup();

    // Instância do hook 'useNavigate' para navegar entre páginas;
    const navigate = useNavigate();

    // Função para voltar à página anterior (login) quando o usuário clicar no botão de "voltar";
    function handleBack() {
        navigate(-1);
    }

    // Função assíncrona para lidar com o processo de cadastro;
    async function handleSignUp(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário;
        setLoading(true); // Ativa o estado de carregamento;

        // Verifica se todos os campos foram preenchidos;
        if (!name || !email || !password) {
            setLoading(false); // Desativa o estado de carregamento;
            return showPopup("Preencha todos os campos! ✍️");
        }

        try {
            // Envia a solicitação POST para criar um novo usuário via API;
            await api.post("/users", { userName: name, email, password });
            showPopup("Cadastro realizado com sucesso! 👍");
            navigate("/"); // Navega para a página principal após o sucesso;
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Não foi possível cadastrar! ❌";
            showPopup(errorMessage); // Exibe popup com a mensagem de erro;
        } finally {
            setLoading(false); // Desativa o estado de carregamento no final do processo;
        }
    }

    return (
        <Container>
            <Form>
                <img src={logo} alt="Logo da empresa" /> {/* Exibe a logo da empresa */}

                <h2>Faça o seu cadastro</h2> {/* Título da página */}

                {/* Campo para nome do usuário */}
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />

                {/* Campo para e-mail do usuário */}
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Campo para senha do usuário */}
                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Botão para enviar o formulário e realizar o cadastro */}
                <Button
                    title={loading ? "Salvando dados..." : "Cadastrar"}
                    onClick={handleSignUp} // Chama a função de cadastro ao clicar;
                    loading={loading} // Indica se o botão está no estado de carregamento;
                    classSpin="spinButton" // Classe adicional para o botão de carregamento (se necessário);
                />

                {/* Botão de texto para voltar à página de login */}
                <ButtonText
                    title="Voltar para o login"
                    onClick={handleBack} // Chama a função para voltar à página anterior;
                    className="back"
                    icon={FiArrowLeft} // Ícone de seta para a esquerda;
                />
            </Form>
            <BackgroundImg />
        </Container>
    );
}
