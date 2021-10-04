//Dependencias
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from '@nextui-org/react'
import { Buy, Edit, Delete } from 'react-iconly'
import ReactImageMagnify from 'react-image-magnify'
import { useHistory } from 'react-router'
//componentes y funciones
import Navbar from './Navbar'
import { firebaseDelete } from '../../actions/actionFirebase'
//Estilos
import '../../styles/detail.css'

const Detalles = () => {
    const item = useSelector(state => state?.detail?.detail)
    const [img, setImg] = useState([item?.image[0]])
    const dispatch = useDispatch()
    const history = useHistory()

    const chageImage = (e)=> {
        setImg([e.target.src])
    }

    const  deleteItem = ()=> {
        dispatch(firebaseDelete(item,history))
    }

    return (
        <div>
            <Navbar />
            <div className="container-detail">
                <div className="container-detail-image">
                    <div className="container-detail-carrusel">
                        <img src={item?.image[0]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[1]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[2]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[3]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[4]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[5]} onClick={(e)=> chageImage(e)} alt="" />
                        <img src={item?.image[6]} onClick={(e)=> chageImage(e)} alt="" />
                    </div>
                    <div className="image-detail-first">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'image',
                                isFluidWidth: true,
                                src: `${img[0]}`,
                                sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                            },
                            largeImage: {
                                src: `${img[0]}`,
                                width: 1200,
                                height: 1800,
                            }
                        }} />
                    </div>
                </div>
                <div className="container-detail-description">
                    <h1 className="title-detail">{item?.title}</h1>
                    <h3 className="title-detail-description">Descripción</h3>
                    <ul>
                        <li>{item?.description[0]}</li>
                        <li>{item?.description[1]}</li>
                        <li>{item?.description[2]}</li>
                        <li>{item?.description[3]}</li>
                    </ul>
                </div>
                <div className="container-detail-buy">
                    <h3 className="title-detail-buy-price">{'USD $'}{item?.price}</h3>
                    <div className="container-detail-envio">
                        <p className="text-detail-envio"><strong>Envío GRATIS</strong></p>
                        <p className="text-detail-time">Llega: <strong>dic 15 - 28</strong></p>
                        <p className="text-detail-time2">Puede que lo recibas después de Navidad</p>
                    </div>
                    <Button className="btn-detail-eraser" icon={<Buy set="bold" primaryColor="white"/>} color="warning">Agregar al carrito</Button>
                    <Button onClick={()=> history.push("/vender")} className="btn-detail-eraser" icon={<Edit set="bold" primaryColor="white"/>} color="primary">Editar Producto</Button>
                    <Button onClick={deleteItem} className="btn-detail-eraser" icon={<Delete set="bold" primaryColor="white"/>} color="error">Eliminar Producto</Button>
                    <p className="text-detail-secure">Transacción segura</p>
                </div>
            </div>
        </div>
    )
}

export default Detalles
