import React from "react";

import { connect } from "react-redux";
import tareasActions from "../redux/actions/tareasActions";


function PostTarea(props) {
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const tareaData = {
      creador: event.target[0].value,
      fecha: event.target[1].value,
      tarea: event.target[2].value,
      estado: event.target[3].value,
    };
    {console.log(tareaData)};

    props.postData(tareaData);
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="formUp">
          <div class="input-container ic1Up">
            <input id="creador" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="creador" class="placeholderSignUp">
              creador
            </label>
          </div>
          <div class="input-container ic1Up">
            <input id="fecha" class="input" type="date" placeholder=" " />
            <div class="cut"></div>
            <label for="fecha" class="placeholderSignUp">
              fecha
            </label>
          </div>
          <div class="input-container ic1Up">
            <input id="tarea" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="tarea" class="placeholderSignUp">
              tarea
            </label>
          </div>
          <div class="input-container ic1Up">
            <input id="estado" class="input" type="text" placeholder=" " />
            <div class="cut cut-short"></div>
            <label for="estado" class="placeholderSignUp">
              estado
            </label>
          </div>

          <button type="text" class="submit">
            Crear tarea
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      tareas: state.tareasReducer.tareas,
    };
  };
  
  const mapDispatchToProps = {
    postData: tareasActions.postData,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PostTarea);
