//Dependencias
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
//Componestes y funciones
import { productDetail } from '../../actions/actionFirebase'

const Items = ({products,ident}) => {
    const [ctg, setCtg] = useState(products)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        if (ident === 'comp') {
            const item = products.filter((i)=> i.categorie === 'computadores' )
            setCtg(item)
        }else if(ident === 'acc'){
            const item = products.filter((i)=> i.categorie === 'accesorios' )
            setCtg(item)
        }else if(ident === 'lap'){
            const item = products.filter((i)=> i.categorie === 'laptop' )
            setCtg(item)
        }else{
            setCtg(products)
        }
    }, [ident, products])

    const details = (item)=> {
        dispatch(productDetail(item))
        history.push("/details")
    }

    return (
        ctg.map(item => (
                <div className="container-products-container" key={item.id} onClick={()=> details(item)}>
                    <div className="container-products-img">
                        <img src={item.image[0]} alt="" />
                    </div>
                    <div className="container-products-details">
                        <h2 className="title-products">{item.title}</h2>
                        <span className="text-products-price">{`USD: ${item.price}`}</span>
                    </div>
                </div>
            ))
    )
}

export default Items
