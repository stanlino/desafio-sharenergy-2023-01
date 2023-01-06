import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/globalStyle'

function App (): JSX.Element {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
