//Dependencias
import { typesLogin } from "../types/types";
import { getAuth, signInWithPopup, signOut } from "@firebase/auth";
//Componentes
import { google } from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincronoGoogle(user.email, user.displayName));
        Swal.fire({
          icon: "success",
          title: `Bienvenido ${user.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const loginSincronoGoogle = (email, displayName) => {
  return {
    type: typesLogin.loginGoogle,
    payload: {
      email,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
  };
};

export const logout = () => ({
  type: typesLogin.logout,
});
