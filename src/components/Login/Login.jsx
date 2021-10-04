//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { firebaseGET } from '../../firebase/firebaseCRUD'
//Componentes
import { loginGoogle } from '../../actions/actionLogin'
import { useForm } from '../../hooks/useFrom'
//Estilos
import '../../styles/login.css'
import Swal from 'sweetalert2'

const Login = () => {
    const dispatch = useDispatch()

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleLogin = async(email, password)=> {
        const u = await firebaseGET()
        const verf1 = u.find(usr=> usr.email.toLowerCase() === email.toLowerCase() && usr.password === password)
        if (verf1 !== undefined) {
            Swal.fire({
                icon: 'success',
                title: `Bienvenido ${verf1.nombres}`,
                showConfirmButton: false,
                timer: 1500
              })
              
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Usuario/Contraseña invalida',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const handleGoogle = ()=> {
        dispatch(loginGoogle())
    }

    return (
        <div className="container-login">

            <div className="container-login-cont">

                <div className="container-logo-login">
                    <img src="https://res.cloudinary.com/dpkaiokho/image/upload/v1632525119/Amazonas/image_1_pmddhc.png" alt="logo amazonas" />
                </div>

                <div className="container-login-btn-google">
                    <button className="btn-login-google" onClick={handleGoogle}>Iniciar Sesion con Google</button>
                </div>

                <div className="container-login-btn-google">
                    <button className="btn-login-google">Iniciar Sesion con Facebook</button>
                </div>

                <p className="text-login">Inicia Sesion en tu cuenta</p>

                <div className="container-login-inputs">
                    <input className="input-login" type="text" name="email" placeholder="Email" onChange={handleInputChange} />
                    <input className="input-login" type="password" name="password" placeholder="Contraseña" onChange={handleInputChange} />
                </div>

                <div className="container-login-btn">
                    <button className="btn-login" onClick={()=> handleLogin(email, password)}>Iniciar Sesion</button>
                    <p className="text-login"><a href="/">¿Has olvidado tu contraseña?</a></p>
                </div>

                <div className="container-login-btn-register">
                    <p className="text-login-register">¿Aun no tienes cuenta?</p>
                    <Link to="/register"><button className="btn-login-register">Crear una cuenta</button></Link>
                </div>

            </div>

        </div>
    )
}

export default Login
