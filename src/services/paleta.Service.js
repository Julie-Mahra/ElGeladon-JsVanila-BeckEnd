/* local de armazenamento dos dados que serão exibidos de acordo com a busca (todas as paletas/por Id)  */

const Paleta = require('../model/Paleta');
const Paletas = require('../model/Paleta');

/*get all em conjunto com Mongoose DB*/
const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
    return paletas;
  }

/*get by id em conjunto com Mongoose DB*/
const findByIdPaletaService = async (parametroId) => {
  const paleta = await Paletas.findById(parametroId);
    return paleta;
};

/* create (PUSH)em conjunto com Mongoose DB*/
const createPaletaService = async (newPaleta) => {
  const paletaCreated = await Paleta.create(newPaleta)
  return paletaCreated;
};

/* Update (PUT)em conjunto com Mongoose DB*/
const updatePaletaService = async (id, paletaEdited) => {
  const paletaUpdate = await Paletas.findByIdAndUpdate(id, paletaEdited)
  return paletaUpdate;
}

/* Delete em conjunto com Mongoose DB*/

const deletePaletaService = async (id) => {
  return await Paletas.findByIdAndDelete(id);
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
