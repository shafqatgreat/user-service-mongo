# Node.js Microservice with MongoDB (Full Setup + CRUD)

This repository demonstrates how to **integrate MongoDB into a Node.js microservice**, covering **full database setup, schema modeling, and complete CRUD operations** following real-world microservices best practices.

---

## 📌 What This Service Covers

✔ MongoDB integration in a Node.js microservice
✔ Clean project structure for scalability
✔ Environment-based configuration
✔ CRUD operations (Create, Read, Update, Delete)
✔ Production-ready database connection handling
✔ RESTful API design

---

## 🧠 Who This Project Is For

* Backend developers learning **microservices architecture**
* Developers transitioning from **monoliths to microservices**
* Node.js engineers adding **MongoDB persistence**
* Students preparing for **real-world backend roles**
* Anyone following the **Node.js Microservices from Zero to Cloud** series

---

## 🧱 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **dotenv**
* **REST APIs**

---

## 📁 Project Structure

```
account-service/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── user.model.js
│   │
│   ├── controllers/
│   │   └── user.controller.js
│   │
│   ├── routes/
│   │   └── user.routes.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

* **Node.js** (v18+ recommended)
* **MongoDB**

  * Local MongoDB **OR**
  * MongoDB Atlas (Cloud)
* **npm** or **yarn**

---

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/microservices_db
SERVICE_NAME=account-service
```

> ⚠️ Never commit `.env` files to GitHub.

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/account-service.git
cd account-service
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start MongoDB

Local MongoDB:

```bash
mongod
```

OR use **MongoDB Atlas** connection string in `.env`.

### 4️⃣ Run the Service

```bash
npm run dev
```

Service will start on:

```
http://localhost:3000
```

---

## 🔄 CRUD API Endpoints

### ➕ Create Record

```http
POST /api/users
```

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

### 📄 Get All Records

```http
GET /api/users
```

### 🔍 Get Record by ID

```http
GET /api/users/:id
```

### ✏ Update Record

```http
PUT /api/users/:id
```

### ❌ Delete Record

```http
DELETE /api/users/:id
```

---

## 🛡 MongoDB Best Practices Used

* Centralized DB connection
* Graceful connection error handling
* Schema-based validation using Mongoose
* Async/Await with proper error handling
* Separation of concerns (routes, controllers, models)

---

## 📈 How This Fits in the Microservices Series

| Episode | Topic                              |
| ------- | ---------------------------------- |
| 1       | Node.js Development Environment    |
| 2       | Microservice with JSON Persistence |
| **3**   | **MongoDB Integration + CRUD**     |
| 4       | Prisma + PostgreSQL                |
| 5       | Service-to-Service Communication   |
| 6       | Docker & Cloud Deployment          |

---

## 🧪 Testing (Optional)

You can test APIs using:

* Postman
* Thunder Client
* curl

---

## 🧩 What’s Coming Next

➡ Database migrations
➡ Indexing & performance optimization
➡ Dockerizing MongoDB services
➡ Secure microservices communication
➡ Cloud deployment

---

## 📺 Video Reference

🎬 **Episode 3: How to Use MongoDB in Node.js Microservices (Full Setup + CRUD)**
Part of **Node.js Microservices from Zero to Cloud on CodingMavrick**

---

## 🤝 Contributing

Pull requests are welcome.
For major changes, please open an issue first.

---

## 📜 License

MIT License

---

## ⭐ Support

If this project helps you:

* ⭐ Star the repo
* 🔔 Subscribe to the YouTube series
* 💬 Share feedback on LinkedIn

---

### 👨‍💻 Author

**Shafqat Altaf**
Backend | Microservices | Cloud | Node.js
