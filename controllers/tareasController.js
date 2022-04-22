const Tareas = require("../models/Tareas");

const tareasController = {
  fetchTarea: async (req, res) => {
    let tarea,
      error = null;
    try {
      tarea = await Tareas.find();
    } catch (error) {
      console.error(error);
    }
    res.json({
      content: error ? error : { tarea },
      success: error ? false : true,
    });
    {console.log("hola" + tarea)}
  },


  postTarea: async (req, res) => {


    let savedTarea, error = null;
    const tarea = req.body;
    {console.log(req.body)}
    try {
      savedTarea = await new Tareas(tarea).save();
    } catch (error) {
      console.error(error);
    }
    res.json({
      content: error ? error : { tarea: savedTarea },
      success: error ? false : true}
    );
  }
};

module.exports = tareasController;