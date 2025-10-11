import Chat from "../components/Chat"
import Sidebar from "../components/Sidebar"

const Messages = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  )
}

export { Messages }