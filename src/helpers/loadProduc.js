import { collection, getDocs } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const getProduct = async(coleccion)=> {
    const data = await getDocs(collection(db, coleccion))

    let prod = []
    data.forEach(item => {
        prod.push({
            id: item.id,
            ...item.data()
        })
    });
    
    return prod
}