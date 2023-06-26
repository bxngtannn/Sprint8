import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './productList.css';


function ProductsList() {
    const [productosApi, setProductos] = useState([])

    const productFilter = async (cat) => {
        try {
            const response = await fetch('http://localhost:3005/products/api/filtrar/' + cat);
            const jsonData = await response.json();
            setProductos(jsonData.data)
            console.log(jsonData)
            console.log(productosApi)
        } catch (error) {
            console.log('Error al obtener los datos:', error);
        }
    };

    useEffect(() => {
        const productsAll = async () => {
            try {
                const response = await fetch('http://localhost:3005/products/api/productos');
                const jsonData = await response.json();
                console.log(jsonData.data)
                setProductos(jsonData.data)
            } catch (error) {
                console.log('Error al obtener los datos:', error);
            }
        };

        // const productTitle= async () => {
        //     try {
        //     const response = await fetch(`http://localhost:3005/products/api/filtroTitulo`);
        //     const jsonData = await response.json();
        //     setProductos()
        //     console.log(jsonData)
        //     console.log(productosApi)
        // } catch (error) {
        //     console.log('Error al obtener los datos:', error);
        //     }
        // };
        productsAll()
        // productFilter(2)
        // productDetail()

        // productTitle()
    }, [])
    return (
        <React.Fragment>
            <body>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><h6 class="dropdown-header">Muebles</h6></li>
                        <li onClick={() => productFilter(1)}><a class="dropdown-item" href="#">Mesas</a></li>
                        <li onClick={() => productFilter(2)}><a class="dropdown-item" href="#">Camas</a></li>
                        <li onClick={() => productFilter(3)}><a class="dropdown-item" href="#">Escritorios</a></li>
                        <li onClick={() => productFilter(4)}><a class="dropdown-item" href="#">Sillones</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><h6 class="dropdown-header">Electronicos</h6></li>
                        <li onClick={() => productFilter(5)}><a class="dropdown-item" href="#">Microondas</a></li>
                        <li onClick={() => productFilter(6)}><a class="dropdown-item" href="#">Televisores</a></li>
                        <li onClick={() => productFilter(7)}><a class="dropdown-item" href="#">Lavarropas</a></li>
                        <li onClick={() => productFilter(8)}><a class="dropdown-item" href="#">Cafeteras</a></li>
                    </ul>
                </div>
                <Productos productosApi={productosApi} />
            </body>
        </React.Fragment>
    )
}

function Productos(props) {


    return (
        <React.Fragment>
            <div class="contenidoProductList">

                <div class="contenedorTarjetas">

                    {props.productosApi.map((item, i) => (
                        <Link to={`/products/productos/${item.producto_id}`}>
                            <div class="product">
                                <div class="img-prod arriba">
                                    <img src={require("./img/" + item.img)} alt="<%= producto.titulo %>" />
                                </div>
                                <div class="abajo">
                                    <div class="descrip-prod">
                                        <p className='nombre texto'>{item.titulo}</p>
                                        <p class="cuotas">{item.cuotas} cuotas sin interés.</p>
                                        <p class="precio texto">${item.precio}</p>
                                        {item.descuento > 0 ? (
                                            <div class="disc">
                                                <p>{item.descuento}%</p>
                                            </div>
                                        ) : null}
                                    </div>
                                    <div class="bot-carrito">
                                        <a href="/productCart"><span
                                            class="boton">Añadir al
                                            carrito</span></a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsList;