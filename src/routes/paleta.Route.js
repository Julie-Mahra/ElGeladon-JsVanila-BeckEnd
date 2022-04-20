/*Rotas de acesso à todas as paletas, enviando para o Controller*/
const route = require('express').Router();
const controllerPaletas = require('../controllers/paleta.Controller');

/*Rota para busca de todas as paletas*/
route.get('/todas-paletas', controllerPaletas.findAllPaletasController);

/*Rota de busca de paletas pelo ID*/
route.get('/paleta/:id', controllerPaletas.findByIdPaletaController);

/*rotas para edição (criar),(atualizar,excluir //seguidos de id, porque será feito em um item de cada vez)*/
route.post('/create', controllerPaletas.createPaletaController);
route.put('/update/:id', controllerPaletas.updatePaletaController);
route.delete('/delete/:id', controllerPaletas.deletePaletaController);

/* Módulo que disponibiliza as rotas para o arquivo Index.js*/
module.exports = route;
