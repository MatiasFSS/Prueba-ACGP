import { useForm } from "../hooks/useForm";

export const Formulario = ({ agregarLibro }) => {

    const initialForm = {
        titulo: "",
        autor: "",
        descripcion: ""
    };

    const { titulo, autor, descripcion, onInputChange, onResetForm } = useForm(initialForm);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoLibro = { titulo, autor, descripcion };

        try {
            const resp = await fetch("http://localhost:3001/api/libros", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevoLibro),
            });

            if (!resp.ok) {
                const error = await resp.json();
                alert("Error: " + error.error);
                return;
            }

            const data = await resp.json();

            agregarLibro(data);     
            onResetForm();

        } catch (err) {
            alert("Error de red o del servidor");
        }
    };
    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <div className="form-group mb-3">
                <label htmlFor="tituloLibro">Título del libro</label>
                <input
                    type="text"
                    className="form-control"
                    id="tituloLibro"
                    name="titulo"
                    placeholder="Título"
                    value={titulo}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="autor">Autor</label>
                <input
                    type="text"
                    className="form-control"
                    id="autor"
                    name="autor"
                    placeholder="Autor del libro"
                    value={autor}
                    onChange={onInputChange}
                />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción del libro"
                    rows={4}
                    value={descripcion}
                    onChange={onInputChange}
                ></textarea>
            </div>

            <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                    Agregar Libro
                </button>
            </div>
        </form>
    );
};