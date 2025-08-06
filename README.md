# Express React Neon Basics 🧪

This is a basic full-stack testing project that includes:

- 📱 A **React Native mobile app**
- 🌐 A **React web frontend (Vite)**
- 🛠️ A **Node.js + Express backend**
- 🗄️ A **Neon PostgreSQL database**

The purpose of this project is to test and demo basic functionality across all platforms — fetching, posting, and deleting orders — using a shared API and database.

---

## 🧰 Tech Stack

### Backend

- **Node.js**
- **Express**
- **Neon PostgreSQL** (via `@neondatabase/serverless`)

### Web Frontend

- **React**
- **Vite**
- **TypeScript**

### Mobile Frontend

- **React Native**
- **Expo**
- **TypeScript**

---

## 🚀 Project Structure

```
express-react-neon-basics/
│
├── backend/  # Express server (Node.js)
├── mobile/   # React Native app using Expo
├── web/      # React + Vite frontend
```

---

## 📝 Notes

- This project is for learning and experimentation only.
- No production-level logic, validation, or authentication is included.
- The backend and both frontends are connected to the same PostgreSQL instance via Neon.

---

## 🗄️ Example API Routes

- `GET /api/orders` – fetch all orders
- `POST /api/orders` – create new order
- `DELETE /api/orders/:id` – delete order by ID
