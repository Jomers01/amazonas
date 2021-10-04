//Dependencias
import { collection, addDoc, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";
//Componentes
import { db } from "./firebaseConfig";

export const firebasePOST = async(nombres, telefono, email, password)=> {
    try {
        await addDoc(collection(db, "usuarios"), {
            nombres: nombres,
            telefono: Number(telefono),
            email: email,
            password: password
        });
        return Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            showConfirmButton: false,
            timer: 1500
          })
        } catch (e) {
        return console.error("Error adding document: ", e);
        }
}

export const firebaseGET = async()=> {
    const datos = await getDocs(collection(db, "usuarios"));
    // return datos
    let db2 = []
    datos.forEach((documento)=> {
        db2.push(documento.data())
    })
    return db2
}

export const firebaseGETProducts = async()=> {
    const datos = await getDocs(collection(db, "productos"));
    // return datos
    let products = []
    datos.forEach((documento)=> {
        products.push(documento.data())
    })
    return products
}