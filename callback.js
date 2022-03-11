// Funcion principal
function principal(callback){
    setTimeout(function(){
        console.log(`Soy el proceso principal`)
        callback()
    },2000)
}



// Llamando funcion principal
principal(secundaria)

// Declarando el callback
function secundaria(){
    console.log(`Soy el proceso del callback`)
}