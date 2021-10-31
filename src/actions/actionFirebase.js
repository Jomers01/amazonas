//Dependencias
import { addDoc, collection, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import Swal from "sweetalert2";
//Componentes y funciones
import { typesFirebase } from "../types/types";
import { getProduct } from "../helpers/loadProduc";
import { db } from "../firebase/firebaseConfig";

export const firebaseGet = (coleccion) => {
  return async (dispatch) => {
    const data = await getProduct(coleccion);
    dispatch(typeGet(data));
  };
};

export const typeGet = (product) => {
  return {
    type: typesFirebase.get,
    payload: product,
  };
};

export const firebasePost = (coleccion, data, history) => {
  return async (dispatch) => {
    if (
      data.title !== "" &&
      data.price !== "" &&
      data.image.length > 4 &&
      data.description.length > 4
    ) {
      await addDoc(collection(db, coleccion), data)
      .then((resp) => {
        dispatch(typePOST(data));
        Swal.fire({
          icon: "success",
          title: "Producto subido con exito",
          confirmButtonText: "Ir al inicio",
          showCancelButton: true,
          backdrop: false,
          cancelButtonText: "Agregar otro producto",
          cancelButtonColor: "#00F",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await dispatch(firebaseGet("productos"))
            .then((resp) => {
              history.push("/");
            });
          } else {
            history.push("/vender");
          }
        });
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Debe llenar todos los campos",
        showConfirmButton: false,
        backdrop: false,
        timer: 2000,
      });
    }
  };
};

export const typePOST = (product) => {
  return {
    type: typesFirebase.post,
    payload: product,
  };
};

export const productDetail = (product) => {
  return {
    type: typesFirebase.detail,
    payload: product,
  };
};

export const firebaseDelete = (item, history) => {
  return async (dispatch) => {
    await deleteDoc(doc(db, "productos", item.id)).then((resp) => {
      dispatch(typeDelete(item));
      Swal.fire({
        icon: "success",
        title: "Producto eliminado con exito",
        showConfirmButton: false,
        backdrop: false,
        timer: 2000,
      }).then(async (result) => {
        await dispatch(firebaseGet("productos"))
        .then((resp) => {
          history.push("/");
        });
      });
    });
  };
};

export const typeDelete = (item) => {
  return {
    type: typesFirebase.delete,
    payload: item.id,
  };
};

export const firbasePut = (item)=> {
  return async(dispatch)=> {
    const docRef = doc(db, "productos", item.id)
    await updateDoc(docRef, item)
  }
}
