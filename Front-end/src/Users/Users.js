import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3005/Users/findAll');
                const jsonData = await response.json();
                setUsers(jsonData)
            } catch (error) {
                console.log('Error al obtener los datos:', error);
            }
        };

        fetchData();
    }, [])

    return (
        <React.Fragment>
            <div class="contenidoProductList">

                <div class="contenedorTarjetas">
                    {users.map((item, i) => (
                        <Link to={`/usuario/${item.usuario_id}`}>
                            <div class="product" >

                                <div class="img-prod arriba">
                                    {item.img !== '' ? (
                                        <img src={require("./imgUsers/" + item.img)} alt="<%= producto.titulo %>" />
                                    ) : <img src={require("./imgUsers/imgDefault.png")} alt="<%= producto.titulo %>" />}
                                </div>
                                <div class="abajo">
                                    <div class="descrip-prod">
                                        <p className='nombre texto'>{item.nombre + ' ' + item.apellido}</p>
                                        <p class="cuotas">{item.email}</p>
                                        <p class="precio texto">{item.telefono}</p>
                                        <div class="disc">
                                            <p>{item.categoria}</p>
                                        </div>
                                    </div>
                                </div>

                            </div></Link>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}


export default Users;