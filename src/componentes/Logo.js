import React from "react";
import freeCodeCamp from "../imagenes/FreeCodeCamp_logo.png";
import "../hojas-de-estilo/Logo.css"

function Logo () {

   return(
        <div className='freecodecamp-logo-contenedor'>
          <img 
              src={freeCodeCamp}
              alt='Logo de freeCodeCamp'
              className='freecodecamp-logo'
          />
        </div>
    );

}

export default Logo; 

