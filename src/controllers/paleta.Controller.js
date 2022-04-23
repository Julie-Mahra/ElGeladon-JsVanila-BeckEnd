/*Controladores de busca (todas as paletas/por Id), que dá acesso ao Service  */
const { default: mongoose } = require('mongoose');
const paletasService = require('../services/paleta.Service');

/*Busca lista completa de paletas disponíveis (retornando objetos em json) */
const findAllPaletasController = async (req, res) => {
  const paletas = await paletasService.findAllPaletasService();
  res.send(paletas);
};
/*Busca paletas pelo id de acordo com a pesquisa por parâmetro (retornando objetos em json)*/
const findByIdPaletaController = async (req, res) => {
  const parametroId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id Inválido' });
  }
  const escolhaPaleta = await paletasService.findByIdPaletaService(parametroId);
  res.send(escolhaPaleta);
};
/*criação de um novo item*/
const createPaletaController = async (req, res) => {
  const paleta = req.body;
  if (
    !paleta ||
    !paleta.sabor ||
    !paleta.descricao ||
    !paleta.foto ||
    !paleta.preco
  ) {
    return res
      .status(400)
      .send({ message: 'Faltam dados para a incluir nova paleta ao cardápio!' });
  }
  
    const newPaleta = await paletasService.createPaletaService(paleta);  
  res.status(201)
    .send(newPaleta);
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
