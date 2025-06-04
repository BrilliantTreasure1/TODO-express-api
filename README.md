# 📝 Task Manager API

A simple RESTful API for managing tasks, built with **Express.js**.

---

## 🚀 Features

- Get list of tasks ✅  
- Create a new task 🆕  
- Update a task ✏️  
- Delete a task 🗑️  
- Clean project structure using **Routes**, **Controllers**, and **Data** separation.

---

## 📁 Project Structure

project/
├── app.js # Entry point of the app
├── routes/
│ └── tasks.js # Task routes
├── controllers/
│ └── tasksController.js # Task logic (CRUD)
└── data/
└── tasks.js # In-memory task storage

yaml
Copy
Edit

---

## 📦 Requirements

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
npm install
npm start
Server will start on: http://localhost:3000

📡 API Endpoints
➕ Create Task
POST /tasks
Body (JSON):

json
Copy
Edit
{
  "title": "Buy groceries"
}
📥 Get All Tasks
GET /tasks

✏️ Update Task
PUT /tasks/:id
Body (JSON):

json
Copy
Edit
{
  "title": "Do homework"
}
🗑️ Delete Task
DELETE /tasks/:id

📄 Example Response
json
Copy
Edit
{
  "message": "Task created",
  "task": {
    "id": 1717500000000,
    "title": "Buy groceries"
  }
}
📃 License
This project is licensed under the MIT License.

🤝 Contributing
Feel free to fork the repo and open a pull request with improvements or bug fixes!
