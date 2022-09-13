const QuestionBank = require('../modal/questionbank.modal');

class Questions{
    static addQueation = async (req,res)=>{
        try {
            const newQuestion = new QuestionBank(req.body);
            const saveQuestion= await newQuestion.save();
            res.send(saveQuestion);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };
}

module.exports= Questions;