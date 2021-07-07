const listaServicos = require("../arquivo/listaServicos.json");

exports.retornarLista=  ()=> {
    return listaServicos;
}

exports.adicionarServico = (desc, preco)=>{
    listaServicos.push({ desc, preco});
};