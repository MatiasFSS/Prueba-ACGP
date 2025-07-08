import { useState, useEffect } from "react";
import { CardLibro } from "./components/CardLibro";
import { Formulario } from "./components/Formulario";

export const LibrosApp = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/libros")
      .then(res => res.json())
      .then(data => setLibros(data));
  }, []);

  const agregarLibro = (nuevoLibro) => {
    setLibros([...libros, nuevoLibro]);
  };

  return (
    <main className="container-fluid p-5">
        <section className="row">
          
            {libros.length === 0 ? (
                <p>No hay libros disponibles.</p>
            ) : (
                libros.map(libro => (
                <div key={libro.id} className="col-12 col-md-6 col-lg-4">
                    <CardLibro libro={libro} />
                </div>
                
                ))
                
            )}
        </section>

        <section className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-6 mt-5 ">
                <h2>Agrega un Libro.</h2>
                <Formulario agregarLibro={agregarLibro} />
            </div>
        </section>
    </main>
  );
};
