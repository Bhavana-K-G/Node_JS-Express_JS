//read emp.json file from below path
const fs = require('fs')
fs.readFile("E:\Front-End Basics\nodejs\json\empdata\emp.json", 'utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})
