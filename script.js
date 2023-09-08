let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("spring");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("net");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("node");
        habilidades[6].classList.add("javascript");
        habilidades[7].classList.add("react");
        habilidades[8].classList.add("python");
        habilidades[9].classList.add("htmlcss");
        habilidades[10].classList.add("excel");
        habilidades[11].classList.add("photoshop");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 