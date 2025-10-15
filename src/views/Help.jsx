import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main>
      <h1>If you need assistance, please contact us at info@wsplove.com</h1>
      <p className="text-info">Ir a <Link to="/chat">Chat</Link></p>
    </main>
  )
}

export default Help