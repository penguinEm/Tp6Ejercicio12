import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

const Noticia = ({titulo, imagen, verMas, descripcion }) => {

    const irAlEnlace = () => {
        window.open(verMas, "_blank");
      };
  return (
    <Card className="mt-5 px-0 shadow" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title>{titulo}</Card.Title>
        <Card.Img src={imagen} alt="Imagen de la noticia"></Card.Img>
      </Card.Header>
      <Card.Body className="cardScroll">
        <Card.Text>
          {descripcion}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-end">
      <Button variant="danger"  onClick={irAlEnlace}>Ver mas</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
