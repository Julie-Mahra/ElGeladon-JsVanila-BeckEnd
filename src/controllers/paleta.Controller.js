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
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido' });
  }
  const escolhaPaleta = await paletasService.findByIdPaletaService(idParam);
  res.send(escolhaPaleta);
};

/*criação de um novo item em conjunto com Mongo DB*/
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
const updatePaletaController = async (req, res) => {
  const idParam = req.params.id;
  const paletaEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id Inválido' });
  }

  const escolhaPaleta = await paletasService.findByIdPaletaService(idParam);

  if (!escolhaPaleta) {
    return res.status(404).send({ message: 'Paleta não encontrada!' });
  }

  if (
    !paletaEdit ||
    !paletaEdit.sabor ||
    !paletaEdit.descricao ||
    !paletaEdit.foto ||
    !paletaEdit.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar a paleta!',
    });
  }

  const updatedPaleta = await paletasService.updatePaletaService(
    idParam,
    paletaEdit,
  );
    
  res.send(updatedPaleta);
};

/*exclusão de itens um a um (respostas em chave"key{}"/retorna msg em formato json)*/
const deletePaletaController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400)
      .send({ message: 'Id Inválido' });
  }
   await paletasService.deletePaletaService(idParam)
  res.send({message: "Paleta deletada com sucesso!"})
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasController,
  findByIdPaletaController,
  createPaletaController,
  updatePaletaController,
  deletePaletaController,
};
