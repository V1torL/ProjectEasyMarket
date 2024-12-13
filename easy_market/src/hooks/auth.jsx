import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"

import { usePopup } from "./PopupContext"

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  const { showPopup } = usePopup()

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/users/login", { email, password })
      const { user, token } = response.data

      localStorage.setItem("@easymarket:user", JSON.stringify(user))
      localStorage.setItem("@easymarket:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      throw new Error(
        error.response?.data?.message ||
          "Não foi possível entrar! Tente mais tarde."
      )
    }
  }

  function signOut() {
    localStorage.removeItem("@easymarket:user")
    localStorage.removeItem("@easymarket:token")

    setData({})
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)

        const response = await api.patch("/users/avatar", fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put("/users", user)

      localStorage.setItem("@easymarket:user", JSON.stringify(user))

      setData({ user, token: data.token })
      showPopup("Perfil atualizado! ✅")
    } catch (error) {
      if (error.response.data.message) {
        showPopup(error.response.data.message)
      } else {
        showPopup("Não foi possível atualizar perfil.  ❌")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@easymarket:token")
    const user = localStorage.getItem("@easymarket:user")

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
