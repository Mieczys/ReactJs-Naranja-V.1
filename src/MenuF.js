import React from 'react';

function MenuF(props){
    return(
        <div>
            {props.titulo}
            {props.data.map(opcion=><div>{opcion}</div>)}
        </div>
    )
}

export default MenuF;