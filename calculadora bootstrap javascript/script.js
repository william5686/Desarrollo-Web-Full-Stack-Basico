function MostrarElemento(value){
    document.getElementById("display").value += value;
}

function borrarPantalla() {

    document.getElementById("display").value = "";  
}

function calcular(){
    const display = document.getElementById("display");
    try{
        display.value = eval(display.value);
    } catch{
        display.value ="Error";
    }

}

function oops(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "debes colocar un numero",
        footer: '<a href="#">Why do I have this issue?</a>'
    });

}




