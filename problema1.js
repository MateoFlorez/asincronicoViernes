// Funcion principal
function actividades(name,planet,age,est,callback){
    setTimeout(function(){
        let padawan = [
            {nombre:name,
            planeta:planet,
            edad:age,
            estatura:est},
        ]
        callback(padawan)
    },1000)
}


// Llamando a la funcion principal
filtrarPadawan("Mateo","Yavin",23,"1.72",function(objeto){
    if(objeto.edad > 15){
        console.log(`Manejo del sable de luz.`)
    }
    else{
        console.log(``)
    }
})