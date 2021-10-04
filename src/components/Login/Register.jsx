//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
//Componentes
import { useForm } from '../../hooks/useFrom'
import { firebasePOST, firebaseGET } from '../../firebase/firebaseCRUD'
//Estilos
import '../../styles/register.css'

const Register = () => {

    const [ values, handleInputChange ] = useForm({
        nombres: '',
        telefono: '',
        email: '',
        password: ''
    })

    const { nombres, telefono, email, password } = values

    const handleSubmit = async(nombres, telefono, email, password)=> {
        const u = await firebaseGET()
        const verf1 = u.find(usr=> usr.email.toLowerCase() === email.toLowerCase())
        if (verf1 !== undefined && nombres !== '' && telefono !== '' && email !== '' && password !== '') {
            Swal.fire({
                icon: 'error',
                title: 'Correo ya registrado',
                showConfirmButton: false,
                timer: 1500
              })
        }else if(nombres !== '' && telefono !== '' && email !== '' && password !== '') {
            firebasePOST(nombres,telefono,email,password)
            // props.history.push("/")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Debe llenar todos los campos',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    return (
        <div className="container-register">
            <div className="container-register-logo">
                <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632525119/Amazonas/image_1_pmddhc.png" alt="logo amazonas" />
            </div>
            <h1 className="title-register">Registro</h1>
            <div className="container-register-inputs">
                <input type="text" className="input-register" name="nombres" placeholder="Nombres" onChange={handleInputChange} required />
                <input type="tel" className="input-register" name="telefono" placeholder="Teléfono" onChange={handleInputChange} required />
                <input type="email" className="input-register" name="email" placeholder="Correo Electronico" onChange={handleInputChange} required />
                <input type="password" className="input-register" name="password" placeholder="Contraseña" onChange={handleInputChange} required />
            </div>
            <div className="container-register-btn">
                <button className="btn-register" onClick={()=> handleSubmit(nombres, telefono, email, password)}>Registrarse</button>
            </div>
            <div className="container-register-login">
                <p className="text-register-login">¿Ya tienes cuenta?</p>
                <Link to="/auth"><button className="btn-register-login">Inicia Sesion</button></Link>
            </div>
        </div>
    )
}

export default Register