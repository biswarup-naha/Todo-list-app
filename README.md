Sure! Here's an updated version of your `README.md` with **Swagger API documentation** section included:

---

# 📝TaskGrid

This project provides a **complete backend API** for managing a To-Do list application using **Express.js**. It supports full **CRUD operations** with data validation using the **Zod** schema validation library.

---

## 🚀 Features

- 🔧 **Create, Read, Update, Delete** todos  
- ✅ **Validation middleware** using [Zod](https://zod.dev/)  
- 📘 **Interactive API Docs** with [Swagger UI](https://swagger.io/tools/swagger-ui/)  
- 🧪 Easy to test using Postman, Thunder Client, or curl  
- 🌱 Built for integration with a React frontend using Vite

---

## 🛠️ Tech Stack

- **Backend**: Express.js, Node.js, MongoDB  
- **Frontend**: React, TailwindCSS, MUI, React Router, Axios  
- 🎞️ Animation: Framer-motion  
- 🔐 **Validation**: Zod  
- ⚙️ **Tooling**: Vite, ESLint

---

## 📦 Backend Setup

### 1. Install dependencies

```bash
bun install
```

### 2. Run the server

```bash
bun run start
```

Server will start at: `http://localhost:5000`

---

## 📘 API Documentation

### 📌 Base URL

```
http://localhost:5000/api/v1/todos
```

### 🔹 Swagger Docs

Access full API documentation via Swagger UI:

👉 `http://localhost:5000/api-docs`

Here you can interactively explore and test the API, including:

- Authentication flow (JWT)
- Todos CRUD endpoints
- Error formats and status codes

> Swagger is auto-generated from a `swagger.yaml` file and served using `swagger-ui-express`.

---

## ✅ Validation Middleware

We use **Zod** to define schemas for validating incoming request data during creation and updating of todos.

### Example Schema

```ts
const todoSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  completed: z.boolean().optional()
});
```

This ensures the data structure is correct and helps prevent invalid/malicious input, improving the app’s **reliability** and **security**.

---

## 🧪 Testing

You can test the API using tools like:

- [Postman](https://www.postman.com/)
- [Thunder Client (VSCode)](https://www.thunderclient.com/)
- `curl` CLI
- 🔍 Swagger UI (`/api-docs`)

---

## 🔗 Frontend (Vite + React)

The frontend is set up with:

- React 19  
- Tailwind CSS 4  
- MUI 7  
- Framer Motion  
- React Router 7  
- Axios (Data Fetching)  
- Sonner (Toasts)

Use the following commands:

```bash
bun run dev      # Start dev server
bun run build    # Build frontend
bun run preview  # Preview production build
```

---

## 📄 License

MIT License © 2025

---

Let me know if you want that `todoController.js` + `todoValidator.js` boilerplate too — I can drop it right in!
