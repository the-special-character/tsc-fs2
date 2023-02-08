const mongoose = require('mongoose');

const{ Schema, model } = mongoose;

 const formSchema=new Schema(    
    {
        name:{
            type:String,
        },
        email:{
            type:String,
            required:true,
        },
        message:{
            type:String,
        }
    },    
    {
        timestamps:true,   
    },
);

 const Db=model('cvReq',formSchema);

module.exports =Db;

// export default Db;