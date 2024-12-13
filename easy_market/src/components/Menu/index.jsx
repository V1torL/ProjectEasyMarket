import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import { BiFile, BiLogOut } from "react-icons/bi"
  
import { FiX } from "react-icons/fi"

import { Container, Nav, Profile, Close } from "./styles"
import { ButtonText } from "../../components/ButtonText"
import Logo from "../../assets/logo.png"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Menu({ menuIsOpen, onCloseMenu }) {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    function handleSignOut() {
        navigate("/")
        signOut()
    }

    const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

    return (
        <Container data-menu-is-open={menuIsOpen}>
            {menuIsOpen && (
                <Close onClick={onCloseMenu}>
                <FiX />
                </Close>
            )}
            <img src={Logo} alt="Logo do EasyMarket" />
            <Nav>
                <ul>
                    <li>
                        <Link to="/dashboard">
                        <BiFile /> Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <BiFile /> Notas
                        </Link>
                    </li>
                </ul>
            </Nav>

            <Profile>
                <img src={avatarUrl} alt="Foto do usuário" />

                <div>
                    <ButtonText title={user.user_name} />
                    <ButtonText title="Sair" icon={BiLogOut} onClick={handleSignOut} />
                </div>
            </Profile>
        </Container>
    ) 
}