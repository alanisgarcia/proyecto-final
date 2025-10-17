import { useState, useEffect } from "react"
import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"
import { ChatProvider } from "../context/ChatContext"

const Messages = () => {
  const [theme, setTheme] = useState("claro")

  useEffect(() => {
    localStorage.setItem("chatTheme", theme)
  }, [theme])

  return (
    <ChatProvider>
      <div className={`app ${theme}`}>
        <Sidebar theme={theme} />
        <Chat theme={theme} setTheme={setTheme} />
      </div>
    </ChatProvider>
  )
}

export { Messages }