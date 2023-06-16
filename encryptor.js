//Este método contiene todas las variables a utilizar en las otras funciones
function allVaribles() {

    const boxtextarea_1 = document.getElementById("boxtextarea_1");
    const boxtextarea_2 = document.getElementById("boxtextarea_2");
    const button_3 = document.getElementById("button_3");
    const button_2 = document.getElementById("button_2");
    const button_4 = document.getElementById("button_4");
    const img_muñeco = document.getElementById("img_muñeco");
    const text_below_image = document.getElementById("text_below_image");
    const textToEncrypt = "";

}

//Esta funcion vailda que solo se pueda ingresar minusculas y espaciados
function overallAction() {

    //Se obtiene los elementos de los textareas por medio de esta función
    allVaribles();

    //Se filtra el texto del textarea izquierdo con la valicaion
    const textFilter = boxtextarea_1.value.toLowerCase().replace(/á|Á|é|É|í|Í|ó|Ó|ú|Ú/g, "").replace(/[^a-zA-Z\s]+/g, "");

    //Se muestra el texto filtado en el textarea derecho e izquierdo
    boxtextarea_2.value = textFilter;
    boxtextarea_1.value = textFilter;

    //Se ocultará la imagen del textarea derecho si se ingresa texto y coincide con los requisitos
    var img_muñeco = document.getElementById("img_muñeco");
    var text_below_image = document.getElementById("text_below_image");
    if (textFilter.length > 0 && /^[a-zA-Z\s]*$/.test(textFilter)) {
        img_muñeco.style.display = "none";
        text_below_image.style.display = "none";
        button_3.style.display = "block";
        button_4.style.display = "block";
    } else {
        img_muñeco.style.display = "block";
        text_below_image.style.display = "block";
        button_3.style.display = "none";
        button_4.style.display = "none";
    }
}



//Funcion sirve para limpiar el texto de las textareas
function clearButton() {
    //Se obtiene los varlores de los elementos 
    allVaribles();


    //Cuando se actualiza la pagina se borra automaticamente el contenido de las textarea
    boxtextarea_1.value = "";
    boxtextarea_2.value = "";

    button_3.style.display = "none";
    button_4.style.display = "none";
    img_muñeco.style.display = "block";
    text_below_image.style.display = "block";
    boxtextarea_1.focus();

}


//Funcion para cuando se actualice la pagina se borren el contenido que tenian los textareas
function clearTextarea() {
    //Se obtiene los elementos de los textareas
    allVaribles();

    //Cuando se actualiza la pagina se borra automaticamente el contenido de las textarea
    boxtextarea_1.value = "";
    boxtextarea_2.value = "";

    //Cuando se actualiza la pagina se esconde el boton de limpiar y copiar, y se mantiene el foco para seguir copiando
    button_3.style.display = "none";
    button_4.style.display = "none";
    boxtextarea_1.focus();
}

//Funcion para encriptar el texto ingresado
function encryptorText () {

    //Se obtiene el elemento textToEncrypt
    allVaribles();

    // Obtener el valor del textarea de la izquierda
    var boxtextarea_1 = document.getElementById("boxtextarea_1");
    var text = boxtextarea_1.value.toLowerCase();

    if(text.includes("enter") || text.includes("imes") || text.includes("ai") || text.includes("ober") || text.includes("ufat")) {
        return text.value = '';
    }

    //Reemplazar las vocales por el contenido a encriptar
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    // Guardar el texto encriptado en la variable
    textToEncrypt = text;

    // Mostrar el texto encriptado en el segundo textarea
    var boxtextarea_2 = document.getElementById("boxtextarea_2");
    boxtextarea_2.value = text;
}

function decryptorText() {

    //Se obtiene el elemento textToEncrypt
    allVaribles();

    // Obtener el valor del textarea de la izquierda
    var boxtextarea_1 = document.getElementById("boxtextarea_1");
    var text = boxtextarea_1.value.toLowerCase();

    // Reemplazar las vocales por el contenido a desencriptar
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");

    // Mostrar el texto desencriptado en el segundo textarea
    var boxtextarea_2 = document.getElementById("boxtextarea_2");
    boxtextarea_2.value = text;

    //Guardar el texto encriptado en la variable
    textToEncrypt = text;

}


function copyButton() {

    // Obtener los valores del textarea
    var boxtextarea_1 = document.getElementById("boxtextarea_1");
    var boxtextarea_2 = document.getElementById("boxtextarea_2");

    // Copiar el texto encriptado o desencriptado al primer textarea
    boxtextarea_1.value = textToEncrypt;

    // Limpiar el segundo textarea
    boxtextarea_2.value = "";

}
