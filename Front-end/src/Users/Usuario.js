import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Usuario.css';

function Usuario() {
    let { id } = useParams();
    const [usuario, setUsuario] = useState([])


    useEffect(() => {
        const uno = async () => {
            try {
                const response = await fetch('http://localhost:3005/Users/findOne/' + id);
                const jsonData = await response.json();
                setUsuario(jsonData)
                console.log("Hola", jsonData)
            } catch (error) {
                console.log('Error al obtener los datos:', error);
            }
        };
        uno()
    }, [])
    return (
        <React.Fragment>
            <div class="card">
                <div class="basic-info">
                    <div class="profile">
                        {usuario.img = '' ? (<img src={require("./imgUsers/" + usuario.img)} alt="<%= producto.titulo %>" />
                        ) : (<img src={require("./imgUsers/imgDefault.png")} alt="<%= producto.titulo %>" />)}
                    </div>
                    <div class="categoriaUs">
                        {usuario.categoria}
                    </div>
                    <p class="nombreU">
                        {usuario.nombre + ' ' + usuario.apellido}
                    </p>
                    <p class="emailU"><u>Correo: {usuario.email}</u>
                    </p>
                    <p class="Ubicacion">Ushuaia, Tierra del Fuego, Argentina</p>
                    <div class="acercaDe">
                        <p class="titulo">Acerca de</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima fuga expedita reprehenderit et
                            numquam nam consequatur dolore, provident alias, veritatis possimus ipsa deleniti officia aut
                            cupiditate cum tenetur vero rerum.</p>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}


export default Usuario;
