import React, { useState } from 'react';

function PokemonForm() {
    const [formData, setFormData] = useState({
        Nombre: '',
        imagen: '',
        vida: '',
        ataque: '',
        defensa: '',
        velocidad: '',
        altura: '',
        peso: '',
        tipos: []
    });

    // Función para manejar cambios en los campos de entrada del formulario
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    // Función para manejar cambios en el campo de selección múltiple de tipos
    const handleTipoChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
        setFormData({
            ...formData,
            tipos: selectedOptions
        });
    }

    // Función para enviar los datos al servidor en el puerto 3001
    const enviarDatosAlServidor = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado de enviar el formulario

        try {
            // Realizar una solicitud POST al servidor en el puerto 3001
            const response = await axios.post('http://localhost:3001/pokemons', formData);

            // Manejar la respuesta del servidor aquí
            console.log('Respuesta del servidor:', response.data);

            // Puedes realizar acciones adicionales según la respuesta, como mostrar un mensaje de éxito al usuario
            alert('Pokemon creado exitosamente.');
        } catch (error) {
            // Manejar errores de la solicitud aquí
            console.error('Error al enviar la solicitud:', error);

            // Puedes mostrar un mensaje de error al usuario en este caso
            alert('Error al crear el Pokemon.');
        }
    } 

    return (
        <div>
            <h1>📍 FORM PAGE</h1>
            <form onSubmit={enviarDatosAlServidor}>
                <label htmlFor="Nombre">Nombre:</label>
                <input type="text" id="Nombre" value={formData.Nombre} onChange={handleChange} required /><br />

                <label htmlFor="imagen">Imagen:</label>
                <input type="text" id="imagen" value={formData.imagen} onChange={handleChange} required /><br />

                <label htmlFor="vida">Vida:</label>
                <input type="number" id="vida" value={formData.vida} onChange={handleChange} required /><br />

                <label htmlFor="ataque">Ataque:</label>
                <input type="number" id="ataque" value={formData.ataque} onChange={handleChange} required /><br />

                <label htmlFor="defensa">Defensa:</label>
                <input type="number" id="defensa" value={formData.defensa} onChange={handleChange} required /><br />

                <label htmlFor="velocidad">Velocidad:</label>
                <input type="number" id="velocidad" value={formData.velocidad} onChange={handleChange} /><br />

                <label htmlFor="altura">Altura:</label>
                <input type="number" id="altura" value={formData.altura} onChange={handleChange} /><br />

                <label htmlFor="peso">Peso:</label>
                <input type="number" id="peso" value={formData.peso} onChange={handleChange} /><br />

                <label htmlFor="tipos">Tipos:</label>
                <select multiple id="tipos" value={formData.tipos} onChange={handleTipoChange} required>
                    <option value="Agua">Agua</option>
                    <option value="Fuego">Fuego</option>
                    <option value="Planta">Planta</option>
                    {/* Agrega más tipos aquí */}
                </select><br />

                <button type="submit">Crear Pokémon</button>
            </form>
        </div>
    );
}

export default PokemonForm;
