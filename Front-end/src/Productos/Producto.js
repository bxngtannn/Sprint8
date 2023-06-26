import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './producto.css';


function Producto() {
    let { idProd } = useParams();
    const [producto, setProductos] = useState([])

    useEffect(() => {
        const productDetail = async () => {
            try {
                const response = await fetch('http://localhost:3005/products/api/detail/' + idProd);
                const jsonData = await response.json();
                setProductos(jsonData)
            } catch (error) {
                console.log('Error al obtener los datos:', error);
            }
        };
        productDetail()
    }, [])
    return (
        <React.Fragment>
            <div class="contenido">
                <div class="infoproducto">
                    <div class="izquierda">
                        <div class="titulo">


                            <h1>
                                {producto.titulo}

                            </h1>
                            <h3 style={{color:'rgb(22, 157, 43)', textalign: 'center'}}>
                                {producto.cuotas} Cuotas sin interes
                            </h3>
                        </div>
                        <div class="precio">
                            {/* {producto.descuento > 0 ? (
                                <div class="precio">
                                    <span style="text-decoration: line-through; color: rgb(227, 59, 59);">
                                        ${producto.precio}
                                    </span>
                                    <span style="color: rgb(59, 227, 73);">
                                        {producto.descuento}%OFF
                                    </span>
                                    <h2>${producto.precio - ((producto.precio * producto.descuento) / 100)) }%>
                                    </h2>
                                </div>
                            ) : ( */}
                            <h2 style={{textalign: 'center'}}>${producto.precio}
                            </h2>
                            {/* )} */}
                        </div>
                        <div class="botones">
                            <a href="/products/carrito/<%=producto.producto_id%>"><span class="botom"> Agregar al carrito <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQlJREFUSEvNlMEVATEQhr+tgBKoAB1QAR3gygEdUAEXrqgAHVABKkAFqIA33mbf2pVNWPHMNZP55s8/Ew/H4Tmuz08BN1/NBZgBvW+oCytQAFW3AqzTQl49URcYAiug5gKQBc5+4TxwTAPRmSwe1FMU3gElua8DFIFtCsAJyCUB5Ey6KGggqrHoYKj0AdA3ARrA9ENA4J1p0WQnMiGILj+sZAOU1R0TYAR03gQ0/UV9XDMBxKjDi2fSeXD1zRXlVgBJWgLVCEQHmAPiXRAmBZIo27ywHNnY92IDMI2sYu8B2Z+nsAVYCoin2QLGQAuYAO1ImaQz4xSpWuE5jzaVdGYNcK7AuQf/C7gDNOwuGTttIPQAAAAASUVORK5CYII=" /></span></a>
                            <div class="bot-carrito delet">
                                <form action="/products/delete/<%=producto.producto_id %>?_method=DELETE" method="POST"
                                    class="form-delete">
                                    <button type="submit" class="action-button delete botom">ELIMINAR</button>
                                </form>
                                <button class="mueble botom editar" onclick="mostrarPopup()">Editar</button>
                            </div>
                        </div>
                        <h2>Descripcion</h2>
                        <div class="descripcion">

                            <p>
                                {producto.descripcion}
                            </p>
                        </div>
                        {producto.img == '' ? (
                            <img src={require("./img/" + producto.img)} alt="<%= producto.titulo %>" />
                        ) : <img src={require("./img/notFound.png")} alt="<%= producto.titulo %>" />}
                    </div>
                </div >

            </div >
        </React.Fragment >
    )
}

export default Producto;