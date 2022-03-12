import React from 'react';
import {Outlet} from 'react-router-dom';

function Todos() {
    return (
        <div>
            Todos Page
            <Outlet></Outlet>
        </div>
    )
}

export default Todos;