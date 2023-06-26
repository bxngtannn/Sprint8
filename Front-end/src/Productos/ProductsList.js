import React,{ useState,useEffect } from 'react';
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
const [productosApi,setProductos] = useState([])
useEffect(()=>{
    const productsAll= async () => {
        try {
        const response = await fetch('http://localhost:3005/products/api/productos');
        const jsonData = await response.json();
        console.log(jsonData.data)
        setProductos(jsonData.data)
    } catch (error) {
        console.log('Error al obtener los datos:', error);
        }
    };
    const productFilter= async (cat) => {
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
    // const productDetail= async () => {
    //     try {
    //     const response = await fetch(`http://localhost:3005/products/api/detail/3`);
    //     const jsonData = await response.json();
    //     setProductos()
    //     console.log(jsonData)
    //     console.log(productosApi)
    // } catch (error) {
    //     console.log('Error al obtener los datos:', error);
    //     }
    // };
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
},[])

    return (
        <React.Fragment>
            <div class="contenidoProductList">

                <div class="contenedorTarjetas">

                    {productosApi.map((item, i) => (
                        <div class="product"><a href="/products/detail/<%=producto.producto_id%>">
                            <div class="img-prod arriba">
                            <img src={require("./img/"+ item.img)} alt="<%= producto.titulo %>"/>
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
                        </a>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}
export default ProductsList;