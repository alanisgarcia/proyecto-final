import avatar from "../assets/images/avatar.png"


export default function Chat() {
  return (
    <div className="chat">
      <header className="chat-header">
        <div>
          <div className="chat-user">
            <img
              src={avatar}
              alt="Aiden Chavez"
              className="chat-avatar"
            />
            <strong>Aiden Chavez</strong>
          </div>
          <span className="last-seen"> Last seen: 2 hours ago</span>
        </div>

        <div className="chat-actions">
          <button title="Camera">📷</button>
          <button title="Gallery">🖼️</button>
          <button title="Settings">⚙️</button>
          <button title="Help">❓</button>
        </div>
      </header>


      <section className="chat-messages">
        <div className="message">
          <p></p>
          <span className="time"></span>
        </div>
      </section>

      <footer className="chat-footer">
        <input type="text" placeholder="Enter text here..." />
        <button>➤</button>
      </footer>
    </div>
  )
}
