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

---

## Day 5: JWT Generation & Authentication Middleware

### 🎯 Goal
Implement stateless JWT authentication by issuing signed tokens upon signup/login and protecting API endpoints with token verification middleware.

---

### 🧠 Concepts & Roadmap
1. **JSON Web Token (JWT) Generation 🔑**:
   - Installed `jsonwebtoken` package.
   - Generated a signed JWT token on successful Signup and Login (`jwt.sign({ id: user._id }, SECRET, { expiresIn: '30d' })`).
   - Returned the signed token back in the JSON response payload.
2. **Authentication Middleware (`protect` middleware) 🛡️**:
   - Created a `protect` middleware function in `middleware/authMiddleware.js`.
   - Extracted and verified the JWT token from the `Authorization: Bearer <token>` request header.
   - Decoded the payload and attached the logged-in user (`req.user`) to the request object for protected routes.

---

## Day 6: Bug Fixes & DSA Problem Solving

### 🧠 Summary
- **DSA**: Solved a LeetCode problem.
- **Dev**: Fixed bugs in the User Schema related to date default functions and relative path URLs. Completed college assignments and records.

---

## Day 7: Computer Networks, Security Cleanup & DSA Milestone

### 🎯 Goal
Master core Computer Networking concepts, secure application secrets with environment variables, and achieve a 100-Day DSA badge milestone.

---

### 🧠 Summary
- **DSA**: Solved a LeetCode problem and earned the **100 Days Badge for 2026** 🏅.
- **Core Subjects (Computer Networks)**:
  - Studied Ethernet Switching, Virtual LANs (VLANs), and the key differences between Layer 2 Switching and Layer 3 Routing.
- **Dev & Security**:
  - Cleaned up project security by setting up environment variables (`.env`).
  - Added `.env` and `.gitignore` entries to prevent sensitive database URIs, API keys, and JWT secrets from being committed.
  - Reviewed password hashing and JWT security fundamentals.

---

## Day 8: Backtracking, DSA Medium & Computer Networks Quiz

### 🎯 Goal
Strengthen backtracking & recursion problem-solving skills, tackle medium-level algorithmic challenges, and reinforce Computer Networks fundamentals.

---

### 🧠 Summary & Key Learnings
- **DSA & Problem Solving**:
  - Solved a **LeetCode Medium** problem.
  - Solved the standard **Rat in a Maze** problem using **Recursion & Backtracking** (exploring path matrices with boundary checks, visited state tracking, and state resets).
- **Core Subjects (Computer Networks)**:
  - Revised core networking concepts including network **Topologies** (Star, Mesh, Bus, Ring, Hybrid) and **VLANs** (Virtual LANs, traffic isolation, and broadcast domain separation).
  - Completed the module quiz with a score of **13/14** 🎯.

---

## Day 11: VLAN Traffic Tagging (Access vs. Trunk Ports), MVC Refactoring & DSA

### 🎯 Goal
Deep dive into VLAN port tagging mechanisms in Computer Networks, continue daily algorithmic practice, and refactor the backend project structure toward MVC architecture.

---

### 🧠 Summary & Key Learnings
- **DSA**:
  - Solved a LeetCode problem.
- **Core Subjects (Computer Networks)**:
  - Deep-dived into **Access Ports vs. Trunk Ports** in VLANs to understand how frame and traffic tagging (IEEE 802.1Q) works in practice across switches.
- **Dev (Web Development)**:
  - Refactoring code and transitioning the project structure toward **MVC (Model-View-Controller)** architecture for clean separation of concerns and maintainability.
- **Note**: Late-night session pushing past midnight / toward 2 AM.
