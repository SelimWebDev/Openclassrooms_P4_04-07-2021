async function reqGetAll() {
  var reponse = await fetch("http://localhost:3000/api/cameras") // requete GET au serveur
  if (reponse.ok) {
    var responseJson = await reponse.json()
    console.log("resultat requete getAll : " + reponse.ok)
    console.log("nombre de caméra recu : " + responseJson.length)
    return responseJson;
  }
}


