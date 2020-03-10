'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
    Route.get('/convenios', 'ConvenioController.all')
    .middleware(['auth:jwt']);
    Route.get('/convenios/:id', 'ConvenioController.get')
    .middleware(['auth:jwt']);
    Route.post('/convenios', 'ConvenioController.store')
    .middleware(['auth:jwt']);
    Route.put('/convenios/:id', 'ConvenioController.update')
    .middleware(['auth:jwt']);
    Route.delete('/convenios/:id', 'ConvenioController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.get('/especialidades', 'EspecialidadeController.all')
    .middleware(['auth:jwt']);
    Route.get('/especialidades/:id', 'EspecialidadeController.get')
    .middleware(['auth:jwt']);
    Route.post('/especialidades', 'EspecialidadeController.store')
    .middleware(['auth:jwt']);
    Route.put('/especialidades/:id', 'EspecialidadeController.update')
    .middleware(['auth:jwt']);
    Route.delete('/especialidades/:id', 'EspecialidadeController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.get('/estabelecimentos', 'EstabelecimentoController.all')
    .middleware(['auth:jwt']);
    Route.get('/estabelecimentos/:id', 'EstabelecimentoController.get')
    .middleware(['auth:jwt']);
    Route.post('/estabelecimentos', 'EstabelecimentoController.store')
    .middleware(['auth:jwt']);
    Route.put('/estabelecimentos/:id', 'EstabelecimentoController.update')
    .middleware(['auth:jwt']);
    Route.delete('/estabelecimentos/:id', 'EstabelecimentoController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.get('/guias', 'GuiaController.all')
    .middleware(['auth:jwt']);
    Route.get('/guias/:id', 'GuiaController.get')
    .middleware(['auth:jwt']);
    Route.post('/guias', 'GuiaController.store')
    .middleware(['auth:jwt']);
    Route.put('/guias/:id', 'GuiaController.update')
    .middleware(['auth:jwt']);
    Route.delete('/guias/:id', 'GuiaController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.get('/perfis', 'PerfilController.all')
    .middleware(['auth:jwt']);
    Route.get('/perfis/:id', 'PerfilController.get')
    .middleware(['auth:jwt']);
    Route.post('/perfis', 'PerfilController.store')
    .middleware(['auth:jwt']);
    Route.put('/perfis/:id', 'PerfilController.update')
    .middleware(['auth:jwt']);
    Route.delete('/perfis/:id', 'PerfilController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.get('/profissionais', 'ProfissionalController.all')
    .middleware(['auth:jwt']);
    Route.get('/profissionais/:id', 'ProfissionalController.get')
    .middleware(['auth:jwt']);
    Route.post('/profissionais', 'ProfissionalController.store')
    .middleware(['auth:jwt']);
    Route.put('/profissionais/:id', 'ProfissionalController.update')
    .middleware(['auth:jwt']);
    Route.delete('/profissionais/:id', 'ProfissionalController.destroy')
    .middleware(['auth:jwt']);
}).prefix('api/v1');

Route.group(() => {
    Route.post('/users', 'UserController.create')
    Route.post('/sessions', 'SessionController.create')
    Route.get('/sessions/me', 'SessionController.me')
    .middleware(['auth:jwt']);

}).prefix('api/v1');
