
var connection=require('../connection/connection');

module.exports={
    getAllurls:(req,res)=>{
        
        connection.query(`select url from cn_url`,(err,result)=>{
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"get All urls",data:{result}})
            }
        })
    },

    getroleUrls:(req,res)=>{

        connection.query(`select CUR.role_name,CRU.urls from cn_user_role as CUR join cn_role_urls as CRU on CUR.role_id=CRU.role_id`,(err,result)=>{
    
            TotalData = [];
            for (let j in result) {
                let url= JSON.parse(result[j].urls);
                TotalData.push({
                    'role_name ': result[j].role_name,
                    'urls': url
                })
            }        
            console.log(TotalData);
            if(err){
                res.send({error:true,message:err.message,data:{}})
            }else{
                res.send({error:false,message:"fetch Role and urls",data:TotalData})
            }
        })
    },


}