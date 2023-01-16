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

import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';

import { AppContainer, GlobaStyles } from './styles/GlobalStyles';
import { defaultTheme } from './styles/themes/default';
import ScrollToTop from './utils/ScrollToTop';
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ScrollToTop />
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
