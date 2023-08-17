import { validarFormulario, Toast } from "../funciones";
// Deshabilita la funcionalidad de retroceso del navegador
history.pushState(null, null, location.href);
window.onpopstate = function(event) {
    history.go(1);
};