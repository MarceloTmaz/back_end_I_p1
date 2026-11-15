const notas = require('../gerenciamento/oficinaMemoria')
exports.tela_principal = async function (req, res) {

    const oficinas = await notas.lista()
    let total = oficinas.length;
    let abertas = 0;
    let horas = 0;
    let encerrados = 0;
    for (let index = 0; index < oficinas.length; index++) {
        horas += oficinas[index].duracao;
        if (oficinas[index].abertas) {
            abertas++;
        } else {
            encerrados++;
        }


    }
    const contexto = {
        titulo_pagina: "Gerenciador de Oficinas",
        oficinas: oficinas,
        index: true,
        total: total,
        abertas: abertas,
        horas: horas,
        encerrados: encerrados,
    }

    res.render('indexx', contexto);

    //console.log(oficinas)

}

exports.tela_sobre = function (req, res) {
    const contexto = {
        titulo_pagina: "Sobre",
        Sobre: true,
    }
    res.render('sobre', contexto)
}

exports.abertas = async function (req, res) {

    const oficinas = await notas.lista()
    let total = oficinas.length;
    let horas = 0;
    let encerrados = 0;
    for (let index = 0; index < oficinas.length; index++) {
        horas += oficinas[index].duracao;
        if (oficinas[index].abertas) {
           
        } else {
            encerrados++;
        }


    }
    let abertas = []
    for (let index = 0; index < oficinas.length; index++) {
        if (oficinas[index].abertas) {
            abertas.push(oficinas[index]);
        }

    }

    const contexto = {
        titulo_pagina: "Gerenciador de Oficinas",
        oficinas: abertas,
        filtroAbertas: true,
        index: true,
        total: total,
        abertas: abertas.length,
        horas: horas,
        encerrados: encerrados,
    }

    res.render('indexx', contexto);

    //console.log(oficinas)

}