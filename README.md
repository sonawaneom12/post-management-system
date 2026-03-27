# 📌 Post Management API

A robust and scalable backend system built to handle **post creation, updating, and management operations**. This project demonstrates RESTful API design, backend architecture, and efficient data handling.

---

## 🚀 Features

- Create new posts  
- Update existing posts  
- Delete posts  
- Fetch all posts / specific posts  
- RESTful API architecture  
- Error handling & validation  
- Modular and scalable code structure  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **API Testing:** Postman  
- **Version Control:** Git, GitHub  

---

## 📂 Project Structure
├── controllers/
├── models/
├── routes/
├── config/
├── middleware/
├── utils/
├── server.js
└── package.json


---

## ⚙️ Installation & Setup

1. Clone the repository:
git clone https://github.com/your-username/post-management-api.git

2. Navigate to the project folder:
cd post-management-api

3. Install dependencies:
npm install

4. Start the server:
npm start

## 📡 API Endpoints

| Method | Endpoint   | Description     |
| ------ | ---------- | --------------- |
| POST   | /posts     | Create a post   |
| GET    | /posts     | Get all posts   |
| GET    | /posts/:id | Get single post |
| PUT    | /posts/:id | Update post     |
| DELETE | /posts/:id | Delete post     |

## 📌 Sample Request

{
  "title": "My First Post",
  "content": "This is a backend project",
  "author": "Om Sonawane"
}

## 🧠 Key Learnings
Implemented RESTful API architecture
Learned CRUD operations in backend development
Improved understanding of routing and middleware
Practiced error handling and validation
Built scalable backend structure



