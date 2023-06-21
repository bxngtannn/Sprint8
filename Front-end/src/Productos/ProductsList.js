import React from 'react';
import './productList.css';


function ProductsList() {
    return (
        <React.Fragment>
            <body>
                <nav class="navbar bg-body-tertiary ">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">TMT</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close" />
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">Volver
                                            al Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Muebles
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Mesas</a></li>
                                            <li><a class="dropdown-item" href="#">Camas</a></li>
                                            <li><a class="dropdown-item" href="#">Escritorios</a></li>
                                            <li><a class="dropdown-item" href="#">Sillones</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Electrodomésticos
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Microondas</a></li>
                                            <li><a class="dropdown-item" href="#">Televisores</a></li>
                                            <li><a class="dropdown-item" href="#">Cafeteras</a></li>
                                            <li><a class="dropdown-item" href="#">Lavaropas</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3" role="search">
                                    <input class="form-control me-2" type="search"
                                        placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
                <Productos />
            </body>
        </React.Fragment>
    )
}

function Productos() {
    const productos = [1, 2, 2, 3, 34, 45, 6, 6, 4, 2, 2, 3]
    return (
        <React.Fragment>
            <div class="contenidoProductList">

                <div class="contenedorTarjetas">

                    {productos.map((item, i) => (
                        <div class="product"><a href="/products/detail/<%=producto.producto_id%>">
                            <div class="img-prod arriba">
                                {/* <img src="/images/<%= producto.img %>"
                        alt="<%= producto.titulo %>"> */}
                            </div>
                            <div class="abajo">
                                <div class="descrip-prod">
                                    <p className='nombre texto'>Holaa, {item}</p>
                                    {/* <p class="nombre texto"><%=producto.titulo%></p>
                                <p class="cuotas"><%= producto.cuotas %> cuotas sin interés.</p>
                                <p class="precio texto">$<%=toThousand(producto.precio) %></p> */}
                                    {/* <% if (producto.descuento>0) { %> */}
                                    <div class="disc">
                                        {/* <p><%=producto.descuento %>%</p> */}
                                    </div>

                                    {/*  <% } %> */}
                                </div>
                                <div class="bot-carrito">
                                    <a href="/productCart"><span
                                        class="boton">Añadir al
                                        carrito</span></a>
                                </div>
                            </div>
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsList;