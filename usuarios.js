const fs = require('fs');


let ModuloUsuarios = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let usuariosJson = fs.readFileSync(this.archivo,'utf-8');
        let usuarios = JSON.parse(usuariosJson)

        return usuarios
        },
        guardarJSON : function(info){
            let registrosActualizados = JSON.stringify(info);
            fs.writeFileSync(this.archivo, registrosActualizados, 'utf-8');
        
        },
    nuevoUsuario : function(nombre,mail,password){
        let usuarios = this.leerJSON();
        
        let agregarUsuario = {
            nombre : nombre,
            mail : mail,
            password : password,
        }

        usuarios.push(agregarUsuario)

        this.guardarJSON(usuarios)
        },
    
    eliminarUsuario : function(){
        let usuarios = this.leerJSON()
        usuarios.pop();
        this.guardarJSON(usuarios)
    }    


    }    
    


module.exports = ModuloUsuarios;