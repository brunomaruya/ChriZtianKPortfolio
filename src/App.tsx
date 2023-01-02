import {
  BrowserRouter,
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ErrorPage } from './pages/ErrorPage/indes';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Portfolio2 } from './pages/Portfolio2';
import { AppContainer, GlobaStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/themes/default';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppContainer>
          <GlobaStyles />

          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
