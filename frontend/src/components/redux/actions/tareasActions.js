import axios from 'axios'

const tareasActions = {
    fetchTareas: () => {
        
    return async (dispatch, getState) => {
        
      const res = await axios.get(' http://localhost:4000/api/alltareas')

      dispatch({ type: 'tareas/fetch', payload: res.data.content.tarea })
    }
  },
  postData: (tareaData) => {
    return async (dispatch, getState) => {
        {console.log(tareaData)}
        const res = await axios.post(' http://localhost:4000/api/alltareas',{tareaData})
        {console.log(res)}
        dispatch({
            type: 'tarea/data',
            payload: {
                view: true,
                message: res.data.message,
                success: res.data.success
            }
        });
    }
},
}
export default tareasActions;