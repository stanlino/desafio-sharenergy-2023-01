/* eslint-disable @typescript-eslint/no-non-null-assertion */
import 'react-toastify/dist/ReactToastify.css'

import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { useAxiosConfig } from './hooks/useAxiosConfig'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/globalStyle'

function App (): JSX.Element {
  useAxiosConfig()

  return (
    <>
      <AppRoutes />
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
