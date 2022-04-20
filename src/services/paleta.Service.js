/* local de armazenamento dos dados que serão exibidos de acordo com a busca (todas as paletas/por Id)  */

/*Model*/
const paletas = [
  {
    id: 1,
    sabor: 'Açaí com Leite Condensado',
    descricao:
      'Paleta feita com açaí Natural e super nutritivo, com recheio de Leite Condensado.',
    foto: './assets/images/acai-com-leite-condensado.png',
    preco: 8.0,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Paleta de Banana com recheio cremoso de Nutella.',
    foto: './assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Paleta feita com creme de Chocolate Belga à 90%.',
    foto: './assets/images/chocolate-belga.png',
    preco: 10.0,
  },
  {
    id: 4,
    sabor: 'Côco',
    descricao: 'Paleta feita com Côco in natura, sem adição de açúcar',
    foto: './assets/images/coco.png',
    preco: 8.0,
  },
  {
    id: 5,
    sabor: 'Morango com Nutella',
    descricao:
      'Paleta feita com Morangos frescos, com recheio cremoso de Nutella',
    foto: './assets/images/morango-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Ninho com Ovomaltine',
    descricao:
      'Paleta feita com Leite Ninho em creme e recheio crocante de Ovomaltine',
    foto: './assets/images/ninho-com-ovomaltine.png',
    preco: 12.0,
  },
];
/*get all*/
const findAllPaletasService = () => {
  return paletas;
};

/*get by id*/
const findByIdPaletaService = (parametroId) => {
  return paletas.find((paleta) => paleta.id === parametroId);
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
