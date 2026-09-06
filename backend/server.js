const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const Expense = require('./models/Expense.js');//./relative paths while / root paths 
const MONGO_URI = 'mongodb+srv://sriramcharannandigam_db_user:Sriram2028@cluster0.s4yrmqa.mongodb.net/?appName=Cluster0';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.log('Database connection error:', err);
    });

app.use(express.json());

//root route
app.get("/", (req, res) => {
    res.send("Expense Tracker Backend Running");
});


//get route display existing data
app.get("/expenses", async (req, res) => {
    try {
        const expenses = await Expense.find();
        return res.status(200).json(expenses);
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' });
    }
});


//post route to add the things 
app.post("/expenses", async (req, res) => {
    try {
        const { title, amount, category } = req.body;

        if (!title || !amount || !category) {
            return res.status(400).json({ message: 'please enter valid title amount and category' });
        }
        const newExpense = new Expense({ title, amount, category });
        await newExpense.save();
        return res.status(201).json(newExpense);
    } catch (err) {
        return res.status(500).json({ message: 'internal server error' });
    }
});
//find the expense by id
app.get("/expenses/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const expense = await Expense.findById(id);
        if (!expense) {
            return res.status(404).json({ message: 'expense not found' });
        }
        return res.status(200).json(expense);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: 'internal server error' });
    }
});
//put route
app.put("/expenses/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(id, req.body,
            {
                new: true,
                runValidators: true
            })
        if (!updatedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        return res.status(200).json(updatedExpense);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: 'internal server error' });
    }
});
//delete route
app.delete("/expenses/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedExpense = await Expense.findByIdAndDelete(id);
        if (!deletedExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        return res.status(200).json(deletedExpense);
    }
    catch (err) {
        console.log(err.message);
        return res.status(500).json({ message: 'internal server error' });
    }

});

app.listen(port, () => {
    console.log(`app is listening on  port http://localhost:${port}`);
});