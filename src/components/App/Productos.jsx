//Dependencias
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Items from './Items';

const Productos = ({ctg, busqueda}) => {
    const product = useSelector(state => state.products.products)
    const [search, setSearch] = useState(product)

    useEffect(() => {
        setSearch(product.filter(resp=> resp.title.toLowerCase().includes(busqueda)))
    }, [busqueda, product])

    return (
        <div className="containet-products">
            <Items key="items" products={search} ident={ctg} />
        </div>
    )
}

export default Productos
