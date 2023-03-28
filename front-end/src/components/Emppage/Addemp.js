import React from 'react'
import { useForm } from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { addemployee } from '../../redux/actions'
function Addemp({ setAdd }) {
  const dispatch=useDispatch()
  const onformsubmit = (Employeedata) => {
    dispatch(addemployee(Employeedata))
    setAdd(false)
  }
  const oncancelclick = () => setAdd(false)
  const { register, handleSubmit, formState: { errors } } = useForm()
  return (
    <div className='row w-100'>
      <form className='d-block mx-auto col-xl-4 col-lg-5 col-sm-6 col-10' onSubmit={handleSubmit(onformsubmit)}>
        <h4 className="text-center">Employee Details</h4>
        <div>
          <label htmlFor="empname" className="form-label mt-4">Employee Name</label>
          <input type="text" id="empname" className="form-control fw-light" {...register("EmployeeName", { required: true })} />
          {errors.EmployeeName && (<p className='text-danger mt-1'>* Name required</p>)}
        </div>
        <div>
          <label htmlFor="empadd" className="form-label mt-2">Employee Address</label>
          <input type="text" id="empadd" className='form-control fw-light' {...register("EmployeeAddress", { required: true })} />
          {errors.EmployeeAddress && (<p className='text-danger mt-1'>* Address required</p>)}
        </div>
        <div>
          <label htmlFor="empdis" className="form-label mt-2">Employee District</label>
          <input type="text" id="empdis" className='form-control fw-light' {...register("EmployeeDistrict", { required: true })} />
          {errors.EmployeeDistrict && (<p className='text-danger mt-1'>* District required</p>)}
        </div>
        <div>
          <label htmlFor="empstate" className="form-label mt-2">Employee State</label>
          <input type="text" id="empstate" className='form-control fw-light' {...register("EmployeeState", { required: true })} />
          {errors.EmployeeState && (<p className='text-danger mt-1'>* State required</p>)}
        </div>
        <div>
          <label htmlFor="emppin" className="form-label mt-2">Employee Pincode</label>
          <input type="number" id="emppin" className='form-control fw-light' {...register("EmployeePincode", { required: true })} />
          {errors.EmployeePincode && (<p className='text-danger mt-1'>* Pincode required</p>)}
        </div>
        <div>
          <label htmlFor="empcountry" className="form-label mt-2">Employee Country</label>
          <input type="text" id="empcountry" className='form-control fw-light' {...register("EmployeeCountry", { required: true })} />
          {errors.EmployeeCountry && (<p className='text-danger mt-1'>* Country required</p>)}
        </div>
        <div>
          <label htmlFor="empage" className="form-label mt-2">Employee Age</label>
          <input type="number" id='empage' className='form-control fw-light' {...register("EmployeeAge", { required: true })} />
          {errors.EmployeeAge && (<p className='text-danger mt-1'>* Age required</p>)}
        </div>
        <div>
          <label htmlFor="empdep" className='form-label mt-2'>Department</label>
          <input type="text" id='empdep' className="form-control fw-light" {...register("EmployeeDepartment", { required: true })} />
          {errors.EmployeeDepartment && (<p className='text-danger mt-1'>* Department required</p>)}
        </div>
        <div>
          <label htmlFor="empstatus" className="form-label mt-2">Employee Status</label>
          <select id="empstatus" className='form-select fw-light' defaultValue="" {...register("EmployeeStatus", { required: "required" })}>
            <option disabled value="">Select Status</option>
            <option value="Remote Location">Remote Location</option>
            <option value="Contract Employee">Contract Employee</option>
            <option value="Full-Time Employee">Full-Time Employee</option>
          </select>
          {errors.EmployeeStatus && (<p className='text-danger mt-2'>* Status required</p>)}
        </div>
        <div className='d-flex mt-4 mb-4 justify-content-between'>
          <button className='btn btn-outline-danger' onClick={() => oncancelclick()}>Cancel</button>
          <button type='submit' className="btn btn-outline-dark">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Addemp
