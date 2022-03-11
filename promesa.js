// Funcion principal
function principal(callback){
    
    let promesa = new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log(`Soy el proceso principal`)
            let numero = 2

            if (numero >= 5){
                resolve(`Soy el proceso del callback (POSITIVO)`)
            }
            else {
                reject(`Soy el proceso del callback (NEGATIVO)`)
            }
        },2000)
        
    })

    return promesa
    
}


// Llamando funcion principal
principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})