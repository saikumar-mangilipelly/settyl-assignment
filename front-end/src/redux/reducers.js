import { ADD_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEES } from "./actions"
const initialState={
    employees:[]
}
function employeeReducer(state=initialState,action){
    switch(action.type){
        case ADD_EMPLOYEE:            
            return{...state,employees:[...state.employees,action.payload]}
        case FETCH_EMPLOYEES:                
            return{...state,employees:action.payload}            
        case EDIT_EMPLOYEE:
            let idx = state.employees.findIndex(e => e._id === action.payload._id)  
            return{...state,employees:state.employees.splice(idx,1,action.payload)}
        default:
            return state
    }
}
export default employeeReducer