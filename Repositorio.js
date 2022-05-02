export class Repositorio{
    #usuarios = [];

    salvar(usuario){
        this.#usuarios.push(usuario);
    }

    consultar(nome){
        const usuario = this.#usuarios.find(usuario => usuario.login === nome);
        return usuario;
    }

    listarTodos(){
        return this.#usuarios;
    }

    remover(nome){
        const index = this.#usuarios.findIndex(usuario => usuario.login === nome);
        if(index >= 0){
            this.#usuarios.splice(index,1);
        }
    }
}