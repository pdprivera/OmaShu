function ventanaSitio(sitio){     /* Dependiendo del sitio oprimido se muestra la información correspondiente */
    document.getElementById("TituloSitio").innerHTML = sitio;   /* Se coloca el nombre del sitio como titulo en la ventana emergente */
    document.getElementById("ventana").title = sitio;        /* Se cambia el atributo titulo de la ventana */
    document.getElementById("ImagenSitio").alt = sitio;         /* Se cambia el atributo alt de la imagen de la ventana */
    switch(sitio){          /* Se revisa cual boton se ha oprimido */

        
        case 'TRIBU AGUA DEL SUR':            
            document.getElementById("ImagenSitio").src = "Imagenes/vent01.jpg";        /* Se cambia la imagen de la ventana emergente */            
            document.getElementById("SubSitio").innerHTML = "Katara y Soka hallan a Aang dentro de un iceberg. "; /* Se agrega la información del reino */   
            document.getElementById("TextoSitio").innerHTML ="La Tribu Agua del Sur es la división sur de las Tribus Agua. Sus habitantes se concentran en una ciudad portuaria grande en la costa del Polo Sur, pero muchos también viven en pequeños asentamientos en todo el polo."
            break
        case 'TEMPLO AIRE DEL SUR':
            document.getElementById("ImagenSitio").src = "Imagenes/vent02.jpg";      /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "Aang vuelve al templo de su niñez."
            document.getElementById("TextoSitio").innerHTML = "El Templo Aire del Sur es uno de los cuatro templos originales que pertenecen a los Nómadas Aire, ubicado en las remotas Montañas Patola, y uno de los dos que alojaba exclusivamente Nómadas Aire masculinos."; /* Se agrega la información del reino */ 
            break
        case 'ISLA KYOSHI':
            document.getElementById("ImagenSitio").src = "Imagenes/vent03.jpg";       /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "Visitan la Isla para montar sobre el Elefante Coi."
            document.getElementById("TextoSitio").innerHTML = "La Isla Kyoshi está situada en el Mar del Sur debajo de la costa sur del Reino Tierra, y poblada en muchas pequeñas aldeas. Predominantemente funcionando como un puerto pesquero, esta pequeña isla es un destino popular entre comerciantes y viajeros."; /* Se agrega la información del reino */ 
            break
        case 'CIUDAD DE OMASHU':
            document.getElementById("ImagenSitio").src = "Imagenes/vent04.jpg";       /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "Aang extraña a su amigo de la infancia Bumi. Pero de regreso, descubren que la ciudad fue conquistada por la Nación del Fuego."
            document.getElementById("TextoSitio").innerHTML = "Omashu es la segunda ciudad más grande del Reino Tierra y la capital de una de sus provincias, también muy conocida por su famoso Sistema de correo de Omashu impulsado por Tierra Control y gravedad."; /* Se agrega la información del reino */ 
            break
        case 'TRIBU AGUA DEL NORTE':
            document.getElementById("ImagenSitio").src = "Imagenes/vent11.jpg";       /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "El equipo llega en busca de un Maestro Agua."
            document.getElementById("TextoSitio").innerHTML = "Ubicada en Polo Norte, construida dentro de altos muros de hielo, y rodeada de tundra y un terreno inhóspito, la ciudad prospera en su aislamiento. Fue la única gran ciudad que no había sido conquistada por la Nación del Fuego, a pesar de grandes ataques fallidos."; /* Se agrega la información del reino */ 
            break
        case 'FORTALEZA DEL OCCIDENTE':
            document.getElementById("ImagenSitio").src = "Imagenes/vent12.jpg";       /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "Aang y su equipo viajan a una base militar."
            document.getElementById("TextoSitio").innerHTML = "Es uno de los bastiones que quedan en el Reino Tierra durante la Guerra de los Cien Años, y está construido como una pequeña ciudad. Ubicada al Noreste del Reino Tierra, tiene cuartel para las tropas, una gran enfermería para atender a los soldados heridos, una sala de guerra, y un templo para orar. "; /* Se agrega la información del reino */ 
            break
        case 'CUEVA DE LOS DOS ENAMORADOS':
            document.getElementById("ImagenSitio").src = "Imagenes/vent13.jpg";       /* Se cambia la imagen de la ventana emergente */   
            document.getElementById("SubSitio").innerHTML = "De regreso a Omashu se pierden en la Cueva de los Dos Enamorados."
            document.getElementById("TextoSitio").innerHTML = "Este lugar es el protagonista de la leyenda y la conformación de la ciudad de OmaShu, un túnel secreto que pasa a través de una sección de la cordillera de Kolau, un laberinto gigante subterráneo habitado por animales peligrosos, incluyendo mucierlagoslobos y tejones."; /* Se agrega la información del reino */ 
            break
    }
    if(self.getComputedStyle(document.getElementById('ventana')).getPropertyValue('display') == "none"){ /* Se revisa que el contenedor de la información no este visible */
        document.getElementById("ventana").style.display = "block"; /* La ventana emergente se muestra */
    }

}
function cerrarVentana(elemento){ /* Función encargada de cerrar los elementos de los mapas interactivos */
    document.getElementById(elemento).style.display = "none"; /* El display del elemento cambia de block a none */
    
}