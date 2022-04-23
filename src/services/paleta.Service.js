/* local de armazenamento dos dados que serão exibidos de acordo com a busca (todas as paletas/por Id)  */



/*get all*/
const Paletas = require('../model/Paleta');

const findAllPaletasService = async () => {
  const paletas = await Paletas.find();
    return paletas;
  }


/*get by id*/
const findByIdPaletaService = async (parametroId) => {
  const paleta = await Paletas.findById(parametroId);
    return paleta;
};

/* create (PUSH)*/
const createPaletaService = (newPaleta) => {
  const newId = paletas.length + 1;
  newPaleta.id = newId;
  paletas.push(newPaleta);
  return newPaleta;
};

const updatePaletaService = (id, paletaEdited) => {
  paletaEdited['id'] = id;
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  paletas[paletaIndex] = paletaEdited;
  return paletaEdited;
};

const deletePaletaService = (id) => {
  const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
  return paletas.splice(paletaIndex, 1);
};

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = {
  findAllPaletasService,
  findByIdPaletaService,
  createPaletaService,
  updatePaletaService,
  deletePaletaService,
};
