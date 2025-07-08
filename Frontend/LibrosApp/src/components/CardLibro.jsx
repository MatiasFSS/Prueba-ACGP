export const CardLibro = ({ libro }) => {

  if (!libro) return <p>No hay libro disponible.</p>;

  const { titulo, autor, descripcion } = libro;

  return (
    <div className="card mb-3" style={{ height: "180px" }}>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{autor}</h6>
            <p className="card-text">{descripcion}</p>
        </div>
    </div>
  );
};