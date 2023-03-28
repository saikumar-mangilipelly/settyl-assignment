import {useState} from 'react'
import './Emppage.css'
import Addemp from './Addemp'
import Emplist from './Emplist'
import Editemp from './Editemp'
function Emppage() {  
  let [Add,setAdd]=useState(false)
  let [Edit,setEdit]=useState(false)  
  let [EmployeeId,setEmployeeId]=useState(null)  
  return (
    <div>
      {!Add && !Edit && (<Emplist setAdd={setAdd} setEdit={setEdit} setEmployeeId={setEmployeeId}/>)}
      {Add && (<Addemp setAdd={setAdd}/>)}
      {Edit && (<Editemp setEdit={setEdit} EmployeeId={EmployeeId} setEmployeeId={setEmployeeId}/>)}
    </div>
  )
}
export default Emppage
