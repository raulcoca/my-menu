import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h2>Error 404</h2>
            <h2>La página no existe</h2>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}

export default NotFound;
