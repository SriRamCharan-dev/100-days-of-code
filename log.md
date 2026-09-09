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

---

## Day 2: Phase 3 — Validation + Centralized Error Handling

### 🎯 Goal
Build a robust, centralized error handling system and custom error classes to handle client validation errors, database errors, and unmatched routes cleanly.

---

### 🧠 Concepts Mastered
1. **Centralized Error Middleware**: Built Express error middleware `(err, req, res, next)` to handle all application errors in one unified place.
2. **Custom Error Class (`AppError`)**: Created an operational error class extending JavaScript `Error` with HTTP `statusCode`, `status` ('fail' / 'error'), and `isOperational = true`.
3. **Mongoose Error Handling**:
   - `CastError`: Transformed invalid 24-character `ObjectId` errors into user-friendly `400 Bad Request`.
   - `ValidationError`: Captured schema validation failures and returned `400 Bad Request`.
4. **Unmatched 404 Route Handler**: Handled invalid request URLs gracefully before passing to error middleware.
5. **Error Delegation via `next(err)`**: Passed asynchronous errors to the centralized error handler without repeating manual `res.status().json()` responses across controllers.

---

## Day 3: Authentication & Password Hashing Architecture

### 🎯 Goal
Implement secure user authentication architecture using User schemas, one-way password hashing with `bcryptjs`, and clean Signup/Login API endpoints.

---

### 🧠 Concepts Mastered
1. **User Schema & Data Guards**:
   - Built `UserSchema` in `models/user.js` with `username`, `email` (unique constraint), `password`, and timestamp fields.
   - Configured `select: false` on the password field to prevent sensitive hash leaks in API responses.
2. **Password Hashing Mechanics (`bcryptjs`)**:
   - Understood one-way password salting and hashing with 10 salt rounds (`bcrypt.hash(password, 10)`).
   - Understood secure hash verification on login (`bcrypt.compare(enteredPassword, user.password)`).
3. **Authentication Endpoints**:
   - Created `POST /auth/register` for user creation with hashed passwords.
   - Created `POST /auth/login` using `.select('+password')` to compare credentials and authenticate users securely.
4. **System Architecture Visualizations**:
   - Modeled the authentication and hashing pipeline using C4 architecture diagrams in draw.io.

---

## Day 4: Solved Easy Level DSA Problems

### 🎯 Goal
Practice array manipulation, two-pointer techniques, and mathematical range counting algorithms by solving 4 LeetCode Easy problems.

---

### 💡 Problems Solved & Key Learnings
1. **Sort Array By Parity II**:
   - Organized arrays such that even indices contain even numbers and odd indices contain odd numbers using two pointers (`even = 0`, `odd = 1`).
2. **Squares of a Sorted Array**:
   - Transformed a sorted array containing negative numbers into a sorted array of their squares in $O(N)$ time using two pointers at both ends (`left` & `right`).
3. **Sort Array By Parity**:
   - Partitioned an array to move all even integers to the beginning followed by all odd integers using in-place swaps.
4. **Count Commas in Range**:
   - Calculated the total number of commas required when writing out all numbers within a given numerical range $[L, R]$ using mathematical digit group boundaries.
