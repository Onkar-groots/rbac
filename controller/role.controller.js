var connection=require('../connection/connection');

module.exports={
    getAllRole:(req,res)=>{
        
        connection.query(`select * from cn_user_role`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"get All role Data",data:{result}})
            }
        })
    },

    getOnlyRole:(req,res)=>{
        connection.query(`select role_name from cn_user_role`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"get Only roles",data:{result}})
            } 
        })
    }
}