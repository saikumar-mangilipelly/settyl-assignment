import React, { useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from 'react-redux'
import { allemployees } from '../../redux/actions'
import './Dashboard.css'
function Dashboard() {
  const {employees}=useSelector(state=>state.employeeReducer)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(allemployees())
  })
  let RLcount=0,CEcount=0,FTcount=0;
  for(let i=0;i<employees.length;i++){
    if (employees[i].EmployeeStatus ==="Remote Location")
      RLcount=RLcount+1;
    else if (employees[i].EmployeeStatus ==="Contract Employee")
      CEcount=CEcount+1;
    else
      FTcount=FTcount+1;
  }  
  
  return (
    <div className='w-100'>
      <h4 className="text-center">Employee Dashboard</h4>
      <div className="w-50">
      <Chart className='dashpiechart'
      type='pie'
      width={1000}
      height={400}
      series={[RLcount,CEcount,FTcount]}
      options={{
        title:{ text:"Employees Status"},
        noData:{text: "No Data Found"},
        labels: ['Remote Locations', 'Contract Employees','Full-Time Employees']
      }}
      >

      </Chart>
      </div>
    </div>
  )
}

export default Dashboard
