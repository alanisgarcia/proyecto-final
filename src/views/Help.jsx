import { Link } from "react-router-dom"

const Help = () => {
  return (
    <main className="help-container">
      <h1>Centro de Ayuda – WhatsApp Love💌</h1>

      <section>
        <h2>🗨️ Funcionamiento general del chat</h2>
        <p>
          Esta aplicación permite enviar mensajes a usuarios simulando
          el comportamiento básico de WhatsApp Web.
          Podés seleccionar un usuario desde la barra lateral, escribir mensajes y ver el historial de conversación en tiempo real.
        </p>
      </section>

      <section>
        <h2>⚙️ Tecnologías utilizadas</h2>
        <ul>
          <li>React + Vite</li>
          <li>React Router DOM para el ruteo de páginas</li>
          <li>Context API para el manejo del estado global del chat</li>
          <li>Hooks (useState, useEffect, useContext, useNavigate)</li>
          <li>CSS para el diseño visual</li>
        </ul>
      </section>

      <section>
        <h2>🚀 Posibles mejoras futuras</h2>
        <ul>
          <li>Integración con un backend para mensajes reales</li>
          <li>Autenticación de usuarios (login/register)</li>
          <li>Notificaciones en tiempo real</li>
          <li>Soporte para imágenes, emojis y estados</li>
        </ul>
      </section>

      <p className="mail-contact">
        Si necesitás asistencia, contactanos en <strong>info@wsplove.com</strong>.
      </p>

      <Link to="/chat" className="back-link">Volver al chat</Link>
    </main>
  )
}

export default Help