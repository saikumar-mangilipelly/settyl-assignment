const exp = require('express')
const employeeapi = exp.Router()
const expressAsyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb')
employeeapi.use(exp.json())
employeeapi.get('/allemployees', expressAsyncHandler(async (request, response) => {
    let EmployeeCollection = request.app.get('EmployeeCollection')
    try {
        let AllEmployeesData = await EmployeeCollection.find().toArray()
        response.send({message:"Fetched Successfully",payload:AllEmployeesData})
    }
    catch (err) { console.log(err) }
}))
employeeapi.post('/addemployee', expressAsyncHandler(async (request, response) => {
    let EmployeeCollection = request.app.get('EmployeeCollection')
    let EmployeeData = request.body
    EmployeeData._id = new ObjectId()
    try {
        await EmployeeCollection.insertOne(EmployeeData)
        response.send({ message: "Data Added Successfully", payload: EmployeeData })
    }
    catch (err) { console.log(err) }
}))
employeeapi.put('/editemployee',expressAsyncHandler(async(request,response)=>{
    let EmployeeCollection=request.app.get('EmployeeCollection')
    let editEmployeeData=request.body     
    let id=new ObjectId(editEmployeeData._id)  
    editEmployeeData._id=id      
    try{
        await EmployeeCollection.replaceOne({"_id":id},editEmployeeData)        
        response.send({message:"Data Edited Successfully",payload:editEmployeeData})
    }
    catch(err){console.log(err)}
}))
module.exports = employeeapi;