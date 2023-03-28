import React from 'react'
import { useForm } from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import { editemployee } from '../../redux/actions'
function Editemp({ setEdit,EmployeeId, setEmployeeId }) {
  const { register, handleSubmit} = useForm()
  const dispatch=useDispatch()
  const {employees}=useSelector(state=>state.employeeReducer)  
  let Editempdata=employees.find(e=>e._id===EmployeeId)    
  const oneditformsubmit=(EditedEmployeedata)=>{
    setEdit(false)
    setEmployeeId(null)
    EditedEmployeedata._id=EmployeeId
    dispatch(editemployee(EditedEmployeedata))
  }
  const oncancelclick=()=>{
    setEdit(false)
    setEmployeeId(null)
  }
  return (
    <div className='row w-100'>
      <form className='d-block mx-auto col-xl-4 col-lg-5 col-sm-6 col-10' onSubmit={handleSubmit(oneditformsubmit)}>
        <h4 className="text-center">Edit Details</h4>
        <div>
          <label htmlFor="empname" className="form-label mt-4">Employee Name</label>
          <input type="text" id="empname" defaultValue={Editempdata.EmployeeName} className="form-control fw-light" {...register("EmployeeName")} />          
        </div>
        <div>
          <label htmlFor="empadd" className="form-label mt-2">Employee Address</label>
          <input type="text" id="empadd" defaultValue={Editempdata.EmployeeAddress} className='form-control fw-light' {...register("EmployeeAddress")} />          
        </div>
        <div>
          <label htmlFor="empdis" className="form-label mt-2">Employee District</label>
          <input type="text" id="empdis" defaultValue={Editempdata.EmployeeDistrict} className='form-control fw-light' {...register("EmployeeDistrict")} />          
        </div>
        <div>
          <label htmlFor="empstate" className="form-label mt-2">Employee State</label>
          <input type="text" id="empstate" defaultValue={Editempdata.EmployeeState} className='form-control fw-light' {...register("EmployeeState")} />          
        </div>
        <div>
          <label htmlFor="emppin" className="form-label mt-2">Employee Pincode</label>
          <input type="number" id="emppin" defaultValue={Editempdata.EmployeePincode} className='form-control fw-light' {...register("EmployeePincode")} />          
        </div>
        <div>
          <label htmlFor="empcountry" className="form-label mt-2">Employee Country</label>
          <input type="text" id="empcountry" defaultValue={Editempdata.EmployeeCountry} className='form-control fw-light' {...register("EmployeeCountry")} />          
        </div>
        <div>
          <label htmlFor="empage" className="form-label mt-2">Employee Age</label>
          <input type="number" id='empage' defaultValue={Editempdata.EmployeeAge} className='form-control fw-light' {...register("EmployeeAge")} />          
        </div>
        <div>
          <label htmlFor="empdep" className='form-label mt-2'>Department</label>
          <input type="text" id='empdep' defaultValue={Editempdata.EmployeeDepartment} className="form-control fw-light" {...register("EmployeeDepartment")} />          
        </div>
        <div>
          <label htmlFor="empstatus" className="form-label mt-2">Employee Status</label>
          <select id="empstatus" className='form-select fw-light' defaultValue={Editempdata.EmployeeStatus} {...register("EmployeeStatus")}>
            <option disabled value="">Select Status</option>
            <option value="Remote Location">Remote Location</option>
            <option value="Contract Employee">Contract Employee</option>
            <option value="Full-Time Employee">Full-Time Employee</option>
          </select>          
        </div>
        <div className='d-flex mt-4 mb-4 justify-content-between'>
          <button className='btn btn-outline-danger' onClick={() => oncancelclick()}>Cancel</button>
          <button type='submit' className="btn btn-outline-dark">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Editemp
