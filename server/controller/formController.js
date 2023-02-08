const FormSchema = require('../model/formModel');


// const formSchema = require('../model/form.model')

class FormController {

    static addData=async(req,res)=>{
        
        try{
            const form=new FormSchema(req.body);
            const savedForm=await form.save();
            res.send(savedForm);
        } catch (error) {
            console.log(error.message);
        }
    };
}

module.exports=FormController;

// export default FormController
