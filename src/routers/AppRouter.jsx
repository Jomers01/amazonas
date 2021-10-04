//Dependencias
import { 
    BrowserRouter as Router,
    Switch,
    Redirect
 } from "react-router-dom";
 import { useState, useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { onAuthStateChanged, getAuth } from 'firebase/auth'

 //Componentes
import PublicRouter from "./PublicRouter";
// import PrivateRouter from "./PrivateRouter";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import Amazonas from "../components/App/Amazonas";
import { firebaseGet } from "../actions/actionFirebase";
import Vender from "../components/App/Vender";
import Detalles from "../components/App/Detalles";

const AppRouter = () => {
    const [auth, setAuth] = useState(false)
    const dispatch = useDispatch()
    const authh = getAuth()

    useEffect(() => {
        dispatch(firebaseGet('productos'))

        onAuthStateChanged(authh, async(user) => {
          if (user?.uid) {
            setAuth(true)
            // dispatch(loginSincrono(user.uid,user.displayName))
            // dispatch(Listar(user.uid))
          }else{
            setAuth(false)
          }
        //   setCheckin(false)
        })
      }, [authh, dispatch])

    return (
        <Router>
            <Switch>
                <PublicRouter exact path="/login" component={Login} isAuthenticated={auth} />
                <PublicRouter exact path="/register" component={Register} isAuthenticated={auth} />
                <PublicRouter exact path="/" component={Amazonas} isAuthenticated={auth} />
                <PublicRouter exact path="/vender" component={Vender} isAuthenticated={auth} />
                <PublicRouter exact path="/details" component={Detalles} isAuthenticated={auth} />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}

export default AppRouter;