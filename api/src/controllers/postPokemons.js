const express = require('express');
const { Pokemones, Types } = require('../models'); // Importa los modelos de Pokemones y Types

const router = express.Router();

// Ruta para agregar un nuevo Pokémon
router.post('/pokemons', async (req, res) => {
  try {
    const {
      ID,
      Nombre,
      Imagen,
      Vida,
      Ataque,
      Defensa,
      Velocidad,
      Altura,
      Peso,
      Tipos, // Tipos debe ser un array de nombres de tipos
    } = req.body;

    // Busca los tipos en la base de datos para asegurarte de que existan
    const tiposExistentes = await Types.findAll({
      where: {
        Nombre: Tipos,
      },
    });

    // Si algún tipo no existe, devuelve un error
    const tiposNoEncontrados = Tipos.filter((tipo) => !tiposExistentes.find((t) => t.Nombre === tipo));
    if (tiposNoEncontrados.length > 0) {
      return res.status(400).json({ error: `Los siguientes tipos no existen: ${tiposNoEncontrados.join(', ')}` });
    }

    // Crea el nuevo Pokémon en la base de datos
    const nuevoPokemon = await Pokemones.create({
      ID,
      Nombre,
      Imagen,
      Vida,
      Ataque,
      Defensa,
      Velocidad,
      Altura,
      Peso,
    });

    // Asocia los tipos con el nuevo Pokémon
    await nuevoPokemon.addTypes(tiposExistentes);

    res.status(201).json({ message: 'Pokémon creado correctamente', id: nuevoPokemon.ID });
  } catch (error) {
    console.error('Error al agregar el Pokémon:', error);
    res.status(500).json({ error: 'Error al crear el Pokémon' });
  }
});

module.exports = router;
