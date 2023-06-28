let express = require("express")
let router = express.Router();
let Expense = require("../models/expense");


// Add routes 
router.get('/expense/get',async (req,res) => {
    const data = await Expense.find()
    res.send(data);
})
router.post('/expense/post',async(req,res) => {

    let body = req.body;
    const newExpense = new Expense({
        name : body.name,
        amount : body.amount,
        date : body.date
    });
    await newExpense.save()
    .then(()=>{
        console.log("Successful insertion")
    })
    .catch((err)=>{
        console.log("Error in insertion ")
    })
    res.send("Post API call Done!!")
})
router.patch('/expense/patch/id',(req,res) => {
    res.send("Patch API call Done!!")
})
router.delete('/expense/delete/id',(req,res) => {
    res.send("Delete API call Done!!")
})

module.exports = router;
