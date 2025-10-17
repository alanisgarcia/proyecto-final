En RouterApp.jsx tenemos al ProtectedRouter que hace que el chat quede protegido y por otro lado, / Login redirige al chat si ya está logueado.

Se agregó un replace:true en login.jsx para que no quede la página de login en el historial, asi no se vuelve a dicha página.

En chat.jsx se agregó:
- el nuevo estado para cambiar de tema. -onClick={handleClosePopup} para cerrar el contenedor si se clickea afuera. 
-e.stopPropagation() en el popup para que el click dentro no cierre. 
-theme con useState para que el usuario pueda elegir y después aplicarlo a la clase del chat.

Se agregó en chat.jsx la funcion para cambiar el nombre del chat seleccionado. value={tempName} muestra el nombre actual-
onChange: actualiza tempName mientras el usuario escribe.
-const handleSaveSettings es la funcion que actualiza el nombre del usuario seleccionado

Se actualizó la página de help dando información de las funcionalidades de la aplicación y se estiló