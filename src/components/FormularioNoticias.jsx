import { Button, Form } from "react-bootstrap";
import ContenedorCardsNoticias from "./ContenedorCardsNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  /* Variables (Estados) ------------------------- */
  const [noticias, setNoticias] = useState({});
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  

  /* Funciones ------------------------------------ */
  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async (categoria) => {
    const urlAPI = `https://newsdata.io/api/1/news?apikey=pub_374572f8d7c345f148275ee6d3b5cfb2633d2&category=${categoria}&language=es`;
    const respuesta = await fetch(urlAPI);
    const datos = await respuesta.json();
    setNoticias(datos.results);
  };

  const manejadorSubmit = async (e) => {
    e.preventDefault();
    if (categoriaSeleccionada) {
      consultarAPI(categoriaSeleccionada);
    } else {
      console.log("Selecinar una categoria");
    }
  };
  /* Logica extra maquetado-------------------------- */
  return (
    <>
      <Form
        className="border px-5 py-5 rounded-1 bg-body-tertiary border-danger"
        onSubmit={manejadorSubmit}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center inputsColumna justify-content-evenly">
            <Form.Label>Buscar por categoría:</Form.Label>
            <Form.Select
              className="color-inputs anchoControls w-auto"
              required
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
            >
              <option value={""}>
               
                Seleccionar
              </option>
              <option value={"sports"}>Deportes</option>
              <option value={"entertainment"}>Entretenimiento</option>
              <option value={"technology"}>Tecnología</option>
            </Form.Select>
            <Button className="my-3" variant="outline-danger" type="submit">
              Buscar
            </Button>
          </div>
        </Form.Group>
        <ContenedorCardsNoticias noticias={noticias}></ContenedorCardsNoticias>
      </Form>
    </>
  );
};

export default FormularioNoticias;
