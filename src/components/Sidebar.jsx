import { useState } from "react"
import avatar from "../assets/images/avatar.png"
import { useChat } from "../context/ChatContext"

export default function Sidebar() {
  const { users, setSelectedUser } = useChat()
  const [usersToRender, setUsersToRender] = useState(users)

  const handleChange = (event) => {
    const result = users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setUsersToRender(result)
  }

  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." className="search"
        onChange={handleChange} />
      <ul className="user-list">
        {
          usersToRender.map(user => <li onClick={() => setSelectedUser(user.id)} className="user">
            <img className="avatar" src={avatar} alt="" />
            <div></div>
            <div className="user-info">
              <strong>
                <span style={{ color: user.status === "Online" ? "green" : "red", marginRight: "3px" }}>•</span>{user.name}
              </strong>
              <small>{user.status === "offline" ? user.lastSeen : "Online"}</small>
            </div>
          </li>)
        }
      </ul>
    </div>
  )
}
