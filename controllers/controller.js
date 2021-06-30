
const model = require("../models/models")

exports.precosServicos = taxaDesconto => {
    const arquivo = model.retornar();
    return arquivo.map(itemDeServiço)
}
};
