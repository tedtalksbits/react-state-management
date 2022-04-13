import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Nav />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
