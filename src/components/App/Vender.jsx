//Dependencias
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
//Componentes y funciones
import Navbar from './Navbar'
import { fileUpload } from '../../helpers/fileUpload'
import { firebasePost } from '../../actions/actionFirebase'
import AddItem from './AddItem'
//Estilos
import '../../styles/vender.css'


const Vender = () => {
    const [description, setDescription] = useState([])
    const [cloudImg, setCloudImg] = useState([])
    const itemEdit = useSelector(state => state.detail.detail)

    let timeout = null
    const dispatch = useDispatch();
    const history = useHistory()

    const [preview, setPreview] = useState({
        title: 'Producto',
        price: '10.00',
        description: description,
        image: cloudImg
    })

    const formik = useFormik({
        initialValues: {
            title: itemEdit?.title,
            price: itemEdit?.price,
            categorie: itemEdit?.categorie
        },
        onSubmit: async(data)=> {
            // console.log(data.title);
            dispatch(firebasePost('productos', {
                title: data.title,
                price: data.price,
                categorie: data.categorie,
                description: description,
                image: cloudImg
            }, history))
        }
    })
    useEffect(() => {
        if (itemEdit.image.length) {
            setCloudImg(itemEdit.image)
        }

        if (itemEdit.description.length) {
            setDescription(itemEdit.description)
        }
    }, [itemEdit])

    useEffect(() => {
        setPreview({
            title: formik.values.title,
            price: formik.values.price,
            description: description,
            image: cloudImg
        })
    }, [description,cloudImg, formik.values])

    const descriptionGet = ({target})=> {
        clearTimeout(timeout)
        timeout = setTimeout(()=> setDescription([...description, target.value]), 1000)
    }

    const handleFileChange = (e)=> {
        const file = e.target.files[0]
        fileUpload(file)
        .then(resp=> {
            setCloudImg([...cloudImg, resp])
        }).catch(error=> (console.log(error)))
    }

    return (
        <>
            <Navbar />
            <div className="container-vender">
                <div>
                    <form className="form-vender" onSubmit={formik.handleSubmit}>
                        <div className="container-vender-info">
                            <h1 className="title-vender">Agregar un producto</h1>
                            <label className="label-vender title">Titulo</label>
                            <input
                                className="input-vender title"
                                type="text"
                                name="title"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                />
                            <label className="label-vender price">Precio</label>
                            <input
                            className="input-vender price"
                            type="number"
                            name="price"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            />
                            <select onChange={formik.handleChange} name="categorie" defaultValue={(formik.values.categorie !== undefined)?formik.values.categorie:'null'} className="select-vender">
                                <option value="null" disabled>Categoria</option>
                                <option value="computadores">Computadores</option>
                                <option value="accesorios">Accesorios</option>
                                <option value="laptop">Laptop</option>
                            </select>
                            <label className="label-vender description">Descripcion 1</label>
                            <input
                            className="input-vender description"
                            type="text"
                            value={itemEdit.description[0]}
                            onBlur={descriptionGet}
                            />
                            <label className="label-vender description">Descripcion 2</label>
                            <input
                            className="input-vender description"
                            type="text"
                            onBlur={descriptionGet}
                            />
                            <label className="label-vender description">Descripcion 3</label>
                            <input
                            className="input-vender description"
                            type="text"
                            onBlur={descriptionGet}
                            />
                            <label className="label-vender description">Descripcion 4</label>
                            <input
                            className="input-vender description"
                            type="text"
                            onBlur={descriptionGet}
                            />
                            <label className="label-vender description">Descripcion 5</label>
                            <input
                            className="input-vender description"
                            type="text"
                            onBlur={descriptionGet}
                            />
                        </div>
                        <div className="container-vender-image">
                            <h3 className="title-vender">Imagenes del producto</h3>
                            <input className="input-vender image" type="file" onChange={handleFileChange} />
                            <input className="input-vender image" type="file" onChange={handleFileChange} />
                            <input className="input-vender image" type="file" onChange={handleFileChange} />
                            <input className="input-vender image" type="file" onChange={handleFileChange} />
                            <input className="input-vender image" type="file" onChange={handleFileChange} />
                        </div>
                        <button className="btn-vender add" type="submit">Agregar</button>
                    </form>
                    <button className="btn-vender inicio">Inicio</button>
                </div>
                <AddItem preview={preview} event={description} />
            </div>

        </>
    )
}

export default Vender
