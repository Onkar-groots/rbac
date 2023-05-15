var mysql=require('mysql');

var connection=mysql.createConnection({
host:"localhost",
user:"gmetricsadmin",
password:"TOFyBmwJziPyzsEp",
database:"cn_rbac",

});

connection.connect((err)=>{
if(err){
    console.log('Error While connecting..')
}else{
    console.log('Connection successfully connected')
}
})

// console.log("hello");
module.exports=connection;