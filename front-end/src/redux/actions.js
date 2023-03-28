import {toast} from 'react-toastify'
import axios from 'axios'
export const ADD_EMPLOYEE='ADD_EMPLOYEE'
export const EDIT_EMPLOYEE='EDIT_EMPLOYEE'
export const FETCH_EMPLOYEES='FETCH_EMPLOYEES'
export const addemployee = (EmployeeData)=>{    
    return async dispatch=>{        
        await axios.post('/Employee/addemployee',EmployeeData)
        .then(response=>{            
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                theme: "colored",
            })
            return dispatch({
                type:ADD_EMPLOYEE,
                payload:response.data.payload
            })
        })
        .catch(err=>console.log(err))
    }
}
export const allemployees=()=>{
    return async dispatch=>{
        await axios.get('/Employee/allemployees')
        .then(response=>{            
            return dispatch({
                type:FETCH_EMPLOYEES,
                payload:response.data.payload
            })
        })
    }
}
export const editemployee=(EditedEmployeedata)=>{
    return async dispatch=>[
        await axios.put('/Employee/editemployee',EditedEmployeedata)
        .then(response=>{
            toast.success(response.data.message, {
                position: "top-center",
                autoClose: 2000,
                pauseOnHover: false,
                closeOnClick: true,
                draggable: true,
                theme: "colored",
            })            
            return dispatch({
                type:EDIT_EMPLOYEE,
                payload:response.data.payload
            })
        })
        .catch(err=>console.log(err))
    ]
}