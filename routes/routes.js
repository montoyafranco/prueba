const Router = require('express').Router() 

const tareasController = require('../controllers/tareasController')
const { fetchTarea, postTarea} = tareasController

Router.route('/alltareas')
.get(fetchTarea)
.post(postTarea)

module.exports = Router