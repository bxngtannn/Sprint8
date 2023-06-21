import React from 'react';
import './homestyle.css';

function Home(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
                    <div id="carouselExampleControls" class="carousel slide propaganda" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require("./img/1.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={require("./img/2.png")} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={require("./img/3.png")} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    <div class="home">
        <div class="categorias">
            <div class="encabezado">
                <p class="titulo">Conoce todo lo que te podemos ofrecer</p>
            </div>
            <div class="categorias-master">
                <div class="muebles categoriaImg">
                    <a href="#muebles"><img src={require("./img/Muebles.png")} alt="Muebles"/></a>
                </div>
                <div class="electros categoriaImg">
                    <a href="#electro"><img src={require("./img/Electrodomésticos.png")} alt="Electro"/></a>
                </div>
            </div>
            <div class="subcategorias">
                    <div class="sub-muebles subC subC-img" id="muebles">
                        <a href="/products/filtrar/1"><img src={require("./img/Mesas.png")} alt="Mesas"></img></a>
                        <a href="/products/filtrar/2"><img src={require("./img/Camas.png")} alt="Camas"></img></a>
                        <a href="/products/filtrar/3"><img src={require("./img/Escritorios.png")} alt="Escritorios"></img></a>
                        <a href="/products/filtrar/4"><img src={require("./img/Sillones.png")} alt="Sillones"></img></a>
                    </div>
                    <div class="sub-electros subC subC-img" id="electro">
                        <a href="/products/filtrar/5"><img src={require("./img/Microondas.png")} alt="Microondas"></img></a>
                        <a href="/products/filtrar/6"><img src={require("./img/Televisores.png")} alt="Televisores"></img></a>
                        <a href="/products/filtrar/7"><img src={require("./img/Lavarropas.png")} alt="Lavarropas"></img></a>
                        <a href="/products/filtrar/8"><img src={require("./img/Cafeteras.png")} alt="Cafeteras"></img></a>
                    </div>
            </div>
            </div>
        </div>
        </React.Fragment>
    )
}
export default Home;