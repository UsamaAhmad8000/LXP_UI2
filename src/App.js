import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import 'bulma/css/bulma.css';
import Home from './components/Home/Home';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Root from './assets/url/url';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import University from './pages/University/University';
import Nav from './components/Navbar/Nav';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./assets/theme/theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
    <Router>
      <>
            <Routes>
                  <Route
                    path={Root.DEFAULTHOME}
                    element={<Home />}
                  />
                  <Route
                    path={Root.ABOUT}
                    element={<About />}
                  />
                  
                  {<Route
                    path={Root.UNIVERSITIES}
                    element={<University />}
                  /> }
                  <Route
                    path={Root.CONTACT}
                    element={<Contact />}
                  />
                </Routes>
                
      </>
    </Router>
    </ThemeProvider>
  );
}

export default App;