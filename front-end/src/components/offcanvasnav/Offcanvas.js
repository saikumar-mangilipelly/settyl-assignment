import React from 'react'
import './Offcanvas.css'
import { HiUserGroup } from "react-icons/hi2";
import { MdSpaceDashboard } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";
import {NavLink} from 'react-router-dom'
function Offcanvas() {
    return (
        <div>
            <i className='fs-2 ms-3 offtog' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><GoThreeBars/></i>
            <div className="offcanvas offcanvas-start w-25" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header d-flex flex-row justify-content-end mt-3">                    
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body text-center ">
                    <div data-bs-dismiss="offcanvas">
                    <NavLink to='/' className="offitem"><i className='fs-4'><HiUserGroup/></i> Employees List</NavLink><hr/>
                    <NavLink to='/dashboard' className="offitem"><i className='fs-4'><MdSpaceDashboard/></i> Dashboard</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offcanvas
