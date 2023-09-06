const mdlPedidos = require("../model/mdlPedidos");

const getAllPedidos = (req, res) =>
    (async () => {
        let registro = await mdlPedidos.getAllPedidos();
        res.json({ status: "ok", registro: registro });
    })();

const getPedidoByID = (req, res) =>
    (async () => {
        const pedidoID = parseInt(req.body.pedidoid);
        let registro = await mdlPedidos.getPedidoByID(pedidoID);

        res.json({ status: "ok", registro: registro });
    })();

const insertPedidos = (request, res) =>
    (async () => {
        //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
        const pedidoREG = request.body;
        let { msg, linhasAfetadas } = await mdlPedidos.insertPedidos(pedidoREG);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const updatePedidos = (request, res) =>
    (async () => {
        const pedidoREG = request.body;
        let { msg, linhasAfetadas } = await mdlPedidos.UpdatePedidos(pedidoREG);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

const DeletePedidos = (request, res) =>
    (async () => {
        const pedidoREG = request.body;
        let { msg, linhasAfetadas } = await mdlPedidos.DeletePedidos(pedidoREG);
        res.json({ status: msg, linhasAfetadas: linhasAfetadas });
    })();

module.exports = {
    getAllPedidos,
    getPedidoByID,
    insertPedidos,
    updatePedidos,
    DeletePedidos,
};
