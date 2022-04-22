import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import tareasActions from "../redux/actions/tareasActions";

function Tarea(props) {
  useEffect(() => {
    props.fetchTareas();
  }, []);

  return(
      <>
        {console.log(props)}


      </>
  )
}

const mapStateToProps = (state) => {
  return {
    tareas: state.tareasReducer.tareas,
  };
};

const mapDispatchToProps = {
  fetchTareas: tareasActions.fetchTareas,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tarea);
