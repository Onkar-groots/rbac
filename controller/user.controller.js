var connection=require('../connection/connection');

module.exports={
    getAllusers:(req,res)=>{
        
        connection.query(`select CU.user_id,CU.username, CU.email,CUR.role_name,CO.org_name from cn_users as CU join cn_user_role as CUR on CU.role_id=CUR.role_id join cn_org_mapping as COM on CU.user_id=COM.user_id join cn_org as CO on COM.org_id=CO.org_id`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"get all users",data:{result}})
            }
        })
    },

    getUsersById:(req,res)=>{

        user_id=req.params.id;
        connection.query(`select CU.username, CU.email,CUR.role_name,CO.org_name from cn_users as CU join cn_user_role as CUR on CU.role_id=CUR.role_id join cn_org_mapping as COM on CU.user_id=COM.user_id join cn_org as CO on COM.org_id=CO.org_id where CU.user_id='${user_id}'`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"fetch data by user Id",data:{result}})
            }
        })
    },

    createUser:(req,res)=>{
        var {username,email,password}=req.body;
        connection.query(`SELECT role_id FROM cn_user_role where role_name='user'`,(err,result)=>{
            // console.log(result[0].role_id)
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                const {
                    v1: uuidv1
                } = require('uuid');
                var UID = uuidv1();
                console.log(UID);
                connection.query(`INSERT INTO cn_users( user_id,username, email, password, role_id) VALUES ('${UID}','${username}','${email}','${password}','${result[0].role_id}')`,(err,result)=>{
                    if(err){
                        res.send({error:true,message:err.message,data:{}})
                    }else{
                        res.send({error:false,message:"save user data succesfully..",data:{result}})
                    }
                })
            }
        })
    }
}