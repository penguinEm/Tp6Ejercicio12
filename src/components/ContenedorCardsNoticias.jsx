import Noticia from "./Noticia";

const ContenedorCardsNoticias = ({ noticias }) => {
  return (
    <section className="d-flex justify-content-around row mt-5 border-top">
      {noticias.length > 0 ? (
        noticias.map((noticia, indiceNoticia) => (
          <Noticia
            key={indiceNoticia}
            titulo={noticia.title}
            imagen={noticia.image_url}
            descripcion={noticia.description}
            verMas={noticia.link}
          />
        ))
      ) : (
        <p className="mt-5">No hay noticias disponibles.</p>
      )}
    </section>
  );
};

export default ContenedorCardsNoticias;
