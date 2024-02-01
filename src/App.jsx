import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Container className="main my-5">
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
