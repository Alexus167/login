let moduloUsuarios = require('./usuarios')
const process = require('process');

let comando = process.argv[2]

switch (comando) {
    case 'registro':
        let nombre = process.argv[3];
        let mail = process.argv[4];
        let password = process.argv[5];

        if (typeof nombre == "undefined" || mail == "undefined" || password == "undefined"){
            console.log("-----TE FALTO INGRESAR UN DATO-----");
        }else{ 
        moduloUsuarios.nuevoUsuario(nombre,mail,password)
        console.log( "-----USUARIO CREADO-----");
        }
        moduloUsuarios.registro(nombre,mail,password)

        break;

    case 'login': 
    let usuarios = moduloUsuarios.leerJSON();
    let mail = process.argv[3];
    let password = process.argv[4];
    if (usuarios.includes(mail && password == true)){
        return "-----USUARIO LOGUEADO-----";
        }else{
            return "----- MAIL O PASSWORD INCORRECTOS -----";
        }

    break;

    case 'eliminar' :
        let mail = process.argv[3];
        let password = process.argv[4];
    usuarios.map(function(nombre,mail,password){ 
    if (nombre = NaN && mail == NaN && password == NaN){
    return('-----Usuario Eliminado-----');
    }else{
        return "----- MAIL O PASSWORD INCORRECTOS -----"
    }
