import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/globalStyle'

function App (): JSX.Element {
  return (
    <Fragment>
      <AppRoutes />
      <GlobalStyle />
    </Fragment>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
