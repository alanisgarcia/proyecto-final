import avatar from "../assets/images/avatar.png"

export default function Sidebar() {

  const users = [
    {
      id: 1,
      name: "Juan Perez",
      status: "offline",
      lastSeen: "7 mins ago",
    },
    {
      id: 1,
      name: "Aiden Chavez",
      status: "offline",
      lastSeen: "14 mins ago",
    },
    {
      id: 1,
      name: "Mike Thomas",
      status: "Online",
      lastSeen: "",
    },
    {
      id: 1,
      name: "Christian Kelly",
      status: "Online",
      lastSeen: "",
    },
    {
      id: 1,
      name: "Monica Ward",
      status: "offline",
      lastSeen: "1 hour ago",
    },
  ]


  return (
    <div className="sidebar">
      <input type="text" placeholder="Search..." className="search" />
      <ul className="user-list">
        {
          users.map(user => <li className="user">
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
