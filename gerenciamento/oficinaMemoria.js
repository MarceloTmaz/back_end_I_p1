const Oficina = require("../models/Oficina")
let lista_oficinas = []
let proximo_id=1;
class OficinaMemoria {
    async atualiza(chave, titulo,nome,descricao,duracao) {
        lista_oficinas[chave] = new Oficina(chave, titulo,nome,descricao,duracao,lista_oficinas[chave].abertas)
        return lista_oficinas[chave];
    }
    async cria( titulo, nome,descricao,duracao) {
        lista_oficinas[proximo_id] = new Oficina(proximo_id,titulo, nome,descricao,duracao,true)
        proximo_id=proximo_id+1;
        return lista_oficinas[proximo_id-1]
    }
    async condicao(chave) {
        lista_oficinas[chave].abertas = !lista_oficinas[chave].abertas;
        return lista_oficinas[chave];
    }
    async consulta(chave) {
        if (lista_oficinas[chave]) return lista_oficinas[chave];
        else throw new Error(`Nota com a chave ${chave} não existe`);
    }
    async deleta(chave) {
        if (lista_oficinas[chave]) {
            delete lista_oficinas[chave]
        } else throw new Error(`Nota com a chave ${chave} não existe`);
    }
    async lista() {
        return Object.values(lista_oficinas)
    }
}
let oficinas = new OficinaMemoria()
module.exports = oficinas