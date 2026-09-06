const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please enter a valid title'],
        trim: true,
        maxlength: [100, 'title cannot be more than 100 characters']
    },
    amount: {
        type: Number,
        required: [true, 'please enter a valid amount'],
        min: [0, 'amount cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'please enter a valid category'],
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;