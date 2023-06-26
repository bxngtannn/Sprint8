import React from 'react';
import './headerStyle.css';

function Header() {
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src={require("./img/logo.png")} alt="logo TMT" width="100px"/>
                    </a>
                </div>
                <div className="contentheader">
                    <div className="izqHead content">
                        <div>
                            <a className="hover-line" href="/products/productos">
                                <span>Productos</span>
                            </a>
                        </div>
                        <div className="cont"><a className="hover-line" href="#contacto">Contacto</a></div>
                    </div>
                    <div className="barraDbusq">
                        <form action="/products/filtroTitulo" method="post" className="search-bar">
                            <input type="text" name="search" placeholder="Buscar..." required/>
                                <a href="/productList">
                                    <button className="search-btn" type="submit">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)'}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></span>
                                    </button>
                                </a>
                        </form>
                    </div>
                    <div className="derHead content ">
                        <a href="/Users"><div className="hover-line">
                            <span>Listado de usuarios</span>
                        </div></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Header;