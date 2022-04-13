import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ContextPage from "./pages/ContextPage";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import ReduxPage from "./pages/ReduxPage";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <Wrapper>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ContextPage />} path="/context" />
            <Route element={<ReduxPage />} path="/redux" />
          </Routes>
        </Wrapper>
      </Router>
    </ChakraProvider>
  );
}

export default App;
