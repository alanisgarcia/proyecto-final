import { useState } from "react"
import { useChat } from "../context/ChatContext"

export default function Chat() {
  const [msg, setMsg] = useState("")

  const { users, selectedUser } = useChat()

  const user = users.find(u => u.id === selectedUser)

  console.log(user)

  if (!user) {
    return (
      <p>No hay usuario seleccionado...</p>
    )
  }

  const handleChange = (event) => {
    setMsg(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newMessage = {
      id: crypto.randomUUID(),
      text: msg,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }

    setMessages([...messages, newMessage])
    setMsg("")
  }


  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
              alt="Aiden Chavez"
              className="chat-avatar"
            />
            <strong>{user.name}</strong>
            {user.lastSeen !== "" && <span className="last-seen">Last seen: {user.lastSeen}</span>}
          </div>
        </div>

        <div className="chat-actions">
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <button title="Settings">⚙️</button>
          <button title="Help">❓</button>
        </div>
      </header>


      <section className="chat-messages">
        {
          user.messages.map((message) => <div className="message">
            <p>{message.text}</p>
            <span className="time">{message.time}</span>
          </div>)
        }
      </section>

      <footer className="chat-footer">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter text here..."
            onChange={handleChange}
            value={msg}
          />
          <button>➤</button>
        </form>
      </footer>
    </div>
  )
}
