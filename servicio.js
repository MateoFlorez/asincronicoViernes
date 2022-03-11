let url = "https://api.spotify.com/v1/artists/6nvMHST6D3nERFTOoCDqby/top-tracks?market=US"

let token = "Bearer BQAJOQyVjhaqa1OLmAv5eAlUUGbEWsinuUG8oJnly8Bzwc2Da3cO5VyH7nMlDkrHhPVtnPBSXztDqFd9ufkzk8BxJ1Q7dpun2S5hzEdMPHcm2MzpFqw-0sqgt106vPRFCmwfPtIwurt0aTZL7tIEmEPdfj_YuDI"

let parametros = {
    method:"GET",
    head:{Authorization:token}
}

fetch(url,parametros)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})