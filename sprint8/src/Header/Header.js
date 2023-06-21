import React from 'react';
import './headerStyle.css';

function Header() {
    return (
        <React.Fragment>
            <div class="header">
                <div class="logo">
                    <a href="/">
                        <img src={require("./img/logo.png")} alt="logo TMT" width="100px"/>
                    </a>
                </div>
                <div class="contentheader">
                    <div class="izqHead content">
                        <div class="dropdown">
                            <a class="hover-line" href="/products/productos">
                                <span>Productos</span>
                            </a>
                            <span class="flecha-despl"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKxJREFUSEvtk9ENwjAMRF83YJN2BJiIEUo36EYwAmzCCOgkkEIax85HJZDirza63rMv7sDONezsTwe4CfeIfj+iC7ACT6PVA3AGFmuU2iXLfAbuwKkAkfkVmN4A6TdVA8jgBowFSGr+AI7WlN6aliDq8tN51VxCDyBNDtGZYnHNo4AcoveQeQsghejZzDy/5UhE6TeKS2WtbdMWuX9pRNA6QcTzS9MBbmT/H9ELPngdGfgDn7kAAAAASUVORK5CYII=" alt="flecha abajo" /></span>
                            <div class="dd-content Alldd-content">
                                <div class="minidd">
                                    <span class="categoriadd">Muebles <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'rgba(0, 0, 0, 1)'}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
                                    <div class="minidd-content Alldd-content">
                                        <a href="/products/filtrar/1"><span>Mesas</span></a>
                                        <a href="/products/filtrar/2"><span>Camas</span></a>
                                        <a href="/products/filtrar/3"><span>Escritorios</span></a>
                                        <a href="/products/filtrar/4"><span>Sillones</span></a>
                                    </div>
                                </div>
                                <div class="minidd">
                                    <span class="categoriadd">Electronicos <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg></span>
                                    <div class="minidd-content Alldd-content">
                                        <a href="/products/filtrar/5"><span>Microondas</span></a>
                                        <a href="/products/filtrar/6"><span>Televisores</span></a>
                                        <a href="/products/filtrar/7"><span>Lavarropas</span></a>
                                        <a href="/products/filtrar/8"><span>Cafeteras</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cont"><a class="hover-line" href="#contacto">Contacto</a></div>
                    </div>
                    <div class="barraDbusq">
                        <form action="/products/filtroTitulo" method="post" class="search-bar">
                            <input type="text" name="search" placeholder="Buscar..." required/>
                                <a href="/productList">
                                    <button class="search-btn" type="submit">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></span>
                                    </button>
                                </a>
                        </form>
                    </div>
                    <div class="derHead content">
                        <a href="/productcart"><div class="carrito">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                        </div></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;