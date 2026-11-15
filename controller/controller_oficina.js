const notas = require('../gerenciamento/oficinaMemoria')

exports.cadastrar = function (req, res) {

    const contexto = {
        titulo_pagina: "Cadastro oficina",
        cadastro:true,
    }

    res.render('cadastrar', contexto);

    //console.log(oficinas)

}
exports.cadastrar_post = async function (req, res) {
    const titulo = req.body.titulo;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const carga = req.body.carga;
    const carga_horaria = parseInt(carga, 10);
    await notas.cria(titulo, nome, descricao, carga_horaria, true)
    res.redirect('/')
}

exports.buscar = function (req, res) {
     const contexto = {
        titulo_pagina: "Busca de Oficinas",
        pesquisa:true,
    }

    res.render('busca', contexto);
}

exports.buscar_post=async function(req,res){
    const solicitado=req.body.busca;
    const lista=await notas.lista();
    let lista_buscada=[];
    for (let i = 0; i < lista.length; i++) {
        if(lista[i].titulo.toLowerCase().includes(solicitado.toLowerCase())){
            lista_buscada.push(lista[i]);
        }
    }
    const contexto = {
        titulo_pagina: "Busca de Oficinas",
        oficinas: lista_buscada,
        busca:solicitado,
        pesquisa:true
    }
    res.render('busca',contexto)
}
exports.consulta=async function (req,res) {
    const id=req.params.id;

    const oficina=await notas.consulta(id)
    const contexto = {
        titulo_pagina: "Busca de Oficinas",
        oficina: oficina,
       // busca:oficina
    }
    res.render('consulta',contexto)
}

exports.editar=async function (req,res) {
    const id=req.params.id;

    const oficina=await notas.consulta(id)
    const contexto = {
        titulo_pagina: "Editar de Oficinas",
        oficina: oficina,
    }
    res.render('editar',contexto)
}

exports.editar_post=async function (req,res) {
    const id=req.body.id;
    const titulo = req.body.titulo;
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const carga = req.body.carga;
    const carga_horaria = parseInt(carga, 10);

    const oficina=await notas.atualiza(id,titulo,nome,descricao,carga_horaria)

    res.redirect('/')
}

exports.deletar=async function (req,res) {
    const id=req.body.id;
    

    const oficina=await notas.deleta(id)

    res.redirect('/')
}

exports.condicao=async function (req,res) {
    const id=req.body.id;
    

    const oficina=await notas.condicao(id);

    res.redirect('/')
}