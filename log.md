# 100 Days of Code - Log

## Day 1: Phase 2 — MongoDB + Mongoose Integration

### 🎯 Goal
Replace the temporary in-memory array (`const expenses = []`) with a persistent database using Express, Mongoose, and MongoDB Atlas.

---

### 🧠 Concepts Mastered
1. **Database Architecture**: Understood MongoDB databases, collections, documents, and 24-character `ObjectId` primary keys.
2. **Mongoose Connection**: Connected Express server asynchronously to MongoDB Atlas via `mongoose.connect()`.
3. **Schemas & Models**: Created `ExpenseSchema` with strict validation rules (`required`, `trim`, `min: 0`, `maxlength`) and `default: Date.now`.
4. **`async/await` CRUD Operations**:
   - `GET /expenses` $\rightarrow$ `Expense.find()`
   - `POST /expenses` $\rightarrow$ `new Expense(...).save()`
   - `GET /expenses/:id` $\rightarrow$ `Expense.findById(id)`
   - `PUT /expenses/:id` $\rightarrow$ `Expense.findByIdAndUpdate(id, data, { new: true, runValidators: true })`
   - `DELETE /expenses/:id` $\rightarrow$ `Expense.findByIdAndDelete(id)`
5. **Database Error Handling**: Handled Mongoose `CastError` (invalid `ObjectId` format) and `ValidationError` (schema violations) returning HTTP status `400`.

---

### ✅ Testing & Verification
- Tested all 5 REST API routes in Postman.
- Verified document persistence in MongoDB Atlas.
