const initialState = {
    tareas:[],
    auxiliar:[], 
    
}

const tareasReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'tareas/fetch':
            return {
                ...state,
                tareas: action.payload,
                auxiliar: action.payload,
                
            }        

        default:
            return state
    }


}
export default tareasReducer