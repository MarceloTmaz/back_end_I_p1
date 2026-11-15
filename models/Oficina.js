class Oficina {
    constructor(chave, titulo,nome,descricao,duracao,abertas) {
        this._ID = chave;
        this._titulo = titulo;
        this._nome=nome;
        this._descricao=descricao;
        this._duracao=duracao;
        this._abertas=abertas;
    }
    get nome() {
        return this._nome;
    }
     get duracao() {
        return this._duracao;
    }
     get abertas() {
        return this._abertas;
    }
    get id() {
        return this._ID;
    }
    get titulo() {
        return this._titulo;
    }
    get descricao() {
        return this._descricao;
    }


    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }
    set duracao(duracao) {
        this._duracao = duracao;
    } set abertas(abertas) {
        this._abertas = abertas;
    } set id(chave) {
        this._id = chave;
    } set titulo(titulo) {
        this._titulo = titulo;
    } set descricao(descricao) {
        this._descricao = descricao;
    }
    set nome(nome) {
        this._nome= nome;
    }
}
module.exports = Oficina;