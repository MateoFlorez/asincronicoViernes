function principal(callback){
    
    let promesa = new Promise(function(resolve,reject){

        setTimeout(function(){
            console.log(`Soy el proceso principal`)
            let numero = 10

            if (numero >= 5){
                resolve(`Terminé (POSITIVO)`)
            }
            else {
                reject(`Terminé (NEGATIVO)`)
            }
        },2000)
        
    })
    return promesa
}

async function secundaria(){
    try {
        await principal()
        console.log(`Soy el proceso del callback`)
    }catch(error){
        console.log(`error`)
    }
}

// Llamo a la funcion secundaria ya que esta SOLO SE EJECUTA SI Y SOLO SI la principal termina
secundaria()