//Dependencias
import React, { useState } from 'react'
//Componentes y funciones
import Navbar from './Navbar'
import Productos from './Productos'
//Estilos
import '../../styles/amazonas.css'
import Navbar2 from './Navbar2'

const Amazonas = () => {
    const [categorie, setCategorie] = useState('all')
    const [search, setSearch] = useState('')

    return (
        <div>
            <Navbar setSearch={setSearch} />
            <Navbar2 setCtg={setCategorie} />
            <Productos busqueda={search} ctg={categorie} />
        </div>
    )
}

export default Amazonas
