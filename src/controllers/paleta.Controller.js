/*Controladores de busca (todas as paletas/por Id), que dá acesso ao Service  */
const paletasService = require('../services/paleta.Service');

/*Busca lista completa de paletas disponíveis (retornando objetos em json) */
const findAllPaletasController = (req, res) => {
  const paletas = paletasService.findAllPaletasService();
  res.send(paletas);
};
/*Busca paletas pelo id de acordo com a pesquisa por parâmetro (retornando objetos em json)*/
const findByIdPaletaController = (req, res) => {
  const parametroId = Number(req.params.id);
  const escolhaPaleta = paletasService.findByIdPaletaService(parametroId);
  res.send(escolhaPaleta);
};
/*criação de um novo item*/
const createPaletaController = (req, res) => {
  const paleta = req.body;
  const newPaleta = paletasService.createPaletaService(paleta);
  res.send(newPaleta);
};

/*atualização dos itens, uma a um*/
const updatePaletaController = (req, res) => {
  const idParam = Number(req.params.id);
  const paletaEdit = req.body;
  const updatedPaleta = paletasService.updatePaletaService(idParam, paletaEdit);
  res.send(updatedPaleta);
};

/*exclusão de itens um a um (respostas em chave"key{}"/retorna msg em formato json)*/
const deletePaletaController = (req, res) => {
  const idParam = req.params.id;
  paletasService.deletePaletaService(idParam);
  res.send({ message: 'Paleta deletada com sucesso!' });
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
