import React, { useEffect, useState } from 'react'
import './Emplist.css'
import { useSelector, useDispatch } from 'react-redux'
import { HiUserPlus } from "react-icons/hi2";
import { allemployees } from '../../redux/actions';
import userimg from '../../assests/user.png'
import EmpMap from '../Empmap/EmpMap';
import axios from 'axios';
function Emplist({ setAdd, setEdit, setEmployeeId }) {
    let { employees } = useSelector(state => state.employeeReducer)
    let [selectedEmployee, setselectedEmployee] = useState()  
    let [location,setlocation] = useState([0,0])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(allemployees())
    })
    const onaddreviewclick = () => {
        setAdd(true)
    }
    const oneditclick = (empId) => {
        setEmployeeId(empId)
        setEdit(true)
    }
    const oncardClick = async(EmployeeId) => {
        let empdata = employees.find(e => e._id === EmployeeId)        
        setselectedEmployee(empdata)             
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${empdata.EmployeeDistrict},${empdata.EmployeeState},${empdata.EmployeeCountry}&appid=c03c0b373724ac8d9b5c5a92a2b35bce`)
            .then(response => setlocation([response.data[0].lat, response.data[0].lon]))
        .catch(err=>console.log(err))
    }    
    return (
        <>
            <div className='d-flex justify-content-end'>
                <h4 className="text-center w-75">Employees List</h4>
                <button className='btn btn-outline-dark me-4 addreviewbtn' onClick={() => onaddreviewclick()}><i className='fs-6'><HiUserPlus /></i> Add Employee</button>
            </div>
            <div className="row empmain">
                <div className="d-flex flex-wrap gap-4">
                    {employees.map(e => (
                        <div className="card ecard" key={e._id} onClick={() => { oncardClick(e._id) }} data-bs-toggle="offcanvas" data-bs-target="#EmpData" aria-controls="EmpOffcavas">
                            <img src={userimg} className='d-block mx-auto mb-4' alt="" width="150px" height="150px" />
                            <p><b>Name : </b>{e.EmployeeName}</p>
                            <p><b>Age : </b>{e.EmployeeAge}</p>
                            <p className='empdata'><b>Address : </b>{e.EmployeeAddress}, {e.EmployeeDistrict}, {e.EmployeeState} - {e.EmployeePincode}, {e.EmployeeCountry}</p>
                            <p className='empdata'><b>Department : </b>{e.EmployeeDepartment}</p>
                            <p><b>Status : </b>{e.EmployeeStatus}</p>
                            <button className='w-auto btn btn-outline-dark' onClick={() => { oneditclick(e._id) }}>Edit</button>
                        </div>
                    ))}
                </div>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="EmpData" aria-labelledby="EmpOffcanvas">
                    <div className="offcanvas-header d-flex flex-row justify-content-end mt-3">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body offprofile">
                        <h4 className="text-center mb-5">Profile</h4>
                        {selectedEmployee && (
                            <div className='ms-4'>
                                <p><b>Employee Name :  </b>{selectedEmployee.EmployeeName}</p>
                                <p><b>Employee Age :  </b>{selectedEmployee.EmployeeAge}</p>
                                <p><b>Employee Address :  </b>{selectedEmployee.EmployeeAddress}</p>
                                <p><b>Employee District :  </b>{selectedEmployee.EmployeeDistrict}</p>
                                <p><b>Employee State :  </b>{selectedEmployee.EmployeeState}</p>
                                <p><b>Employee Pincode :  </b>{selectedEmployee.EmployeePincode}</p>
                                <p><b>Employee Country :  </b>{selectedEmployee.EmployeeCountry}</p>
                                <p><b>Employee Department :  </b>{selectedEmployee.EmployeeDepartment}</p>
                                <p><b>Employee Status :  </b>{selectedEmployee.EmployeeStatus}</p>
                            </div>
                        )}
                        <div className='mt-4 mb-4'>
                            <EmpMap location={location}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Emplist
