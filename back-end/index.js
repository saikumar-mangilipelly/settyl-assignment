const exp=require('express')
const app=exp()
require('dotenv').config()
app.use(exp.json())
const mongoclient=require('mongodb').MongoClient
mongoclient.connect(process.env.DB_connection_url)
.then((client)=>{
    let db_obj=client.db('Settyl')
    let EmployeeCollection=db_obj.collection('EmployeeCollection')
    app.set('EmployeeCollection',EmployeeCollection)
    console.log("Database Connection Successful")
})
.catch(error=>console.log("Error In Database Connection",error))
let EmployeeApi=require('./APIS/EmployeeApi')
app.use('/Employee',EmployeeApi)
app.use((request,response)=>{    
    response.send({message:"Error Occured",reason:`Invalid URL ${request.url}`})
})
app.use((response)=>{    
    response.send({message:"Error Occured",reason:error.message})
})
app.listen(process.env.Port,()=>console.log(`Server is Running on Port No : ${process.env.Port}`))
