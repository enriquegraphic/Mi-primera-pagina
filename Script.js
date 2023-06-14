function showAlert (){
    alert("¡Hola, este es una alerta desde JavaScrit!")
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})