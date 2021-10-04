//Dependencias
import React from 'react'
import { AddShoppingCart, Room, Search } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
//Componentes y funciones
import { startLogout } from '../../actions/actionLogin'

const Navbar = ({setSearch}) => {
    const dispatch = useDispatch()

    const cerrarSesion = ()=> {
        dispatch(startLogout())
    }

    const search = ({target})=> {
        setSearch(target.value.toLowerCase())
    }

    return (
        <nav className="container-navbar">
            <Link to="/"><img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632525119/Amazonas/image_1_pmddhc.png" alt="logo amazonas" /></Link>
            <div className="container-navbar-pin">
                <p className="text-navbar-saludo">Hola</p>
                <div className="container-navbar-icon">
                    <Room className="icon-navbar-pin" />
                    <p className="text-navbar-dir">{`Elige tu dirección`}</p>
                </div>
            </div>
            <div className="container-navbar-search">
            <select defaultValue={'DEFAULT'} name="categorias" className="select-navbar-categories">
                <option value="DEFAULT" disabled>Todos los departamentos</option>
            </select>
                <input className="input-navbar-search" onChange={(e)=> search(e)} type="text" placeholder="Canon EOS R6 - Cámara sin Espejo de Marco" />
            <button className="btn-navbar-searc"><Search /></button>
            </div>
            <p className="text-navbar-saludo-usr">Hola,<br /> <span onClick={cerrarSesion}>Cerrar Sesión</span></p>
            <p className="text-navbar-devo">Devoluciones <br /> <strong>Y Pedidos</strong></p>
            <div className="container-navbar-cart">
                <AddShoppingCart fontSize="large" />
                <p className="text-navbar-cart">Carrito</p>
            </div>
        </nav>
    )
}

export default Navbar
