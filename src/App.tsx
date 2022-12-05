import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ErrorPage } from './pages/ErrorPage/indes'
import { Home } from './pages/Home'
import { AppContainer, GlobaStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/default'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ])
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppContainer>
        <GlobaStyles />

        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
