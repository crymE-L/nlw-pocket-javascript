# 🚀 NLW Pocket : JavaScript - Goals Management Application

This is a full-stack goals management application developed during RocketSeat's NLW Pocket course. It helps users add, track, and manage their goals with an intuitive and modern interface.

## 🖥️ Tech Stack

- **Frontend**: React, TypeScript, Vite, TanStack Query, Tailwind CSS
- **Backend**: Node.js, Drizzle ORM, PostgreSQL
- **Tools**: Docker, Biome, Environment Files (.env), API Calls, Routing

## 📸 Screenshots

![Screenshot from 2024-09-12 16-10-56](https://github.com/user-attachments/assets/bab39027-4d2d-418b-b446-091adb482011)
![Screenshot from 2024-09-12 15-50-31](https://github.com/user-attachments/assets/98c073ad-ad03-4339-aea2-b4871d9c8101)
![Screenshot from 2024-09-12 15-50-36](https://github.com/user-attachments/assets/6ce3dd26-0608-44b3-b333-8831bd5e1d14)

## 🌟 Features

- Add and manage your goals
- Track completion over time
- Weekly goal summaries
- Clean and responsive UI

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [Docker](https://www.docker.com/) (to run PostgreSQL)

## 🛠️ Setup Guide

Follow these steps to set up the application locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/goals-management-app.git
cd goals-management-app
```

### 2. Set Up Environment Variables

Create a .env file in the project root with the following content:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/your-database
REACT_APP_API_URL=http://localhost:3001/api
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 5. Start Docker Services

Run the following command to spin up a PostgreSQL database according to the configuration in the docker-compose.yml file:

```bash
docker-compose up -d
```
### 6. Run Migrations

Navigate to the backend folder and run migrations to set up your database:

```bash
cd backend
npx drizzle-kit sync:push
```

### 7. Start the Backend Server

Inside the backend folder, start the server:

```bash
npm run dev
```

The backend server will start on http://localhost:3001.

### 8. Start the Frontend Server

Open a new terminal, navigate to the frontend directory, and start the frontend:

```bash
cd frontend
npm run dev
```

The frontend will start on http://localhost:5173.

### 9. Access the Application
Visit http://localhost:5173 in your browser to start using the app!

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

## 📝 License
This project is licensed under the MIT License.

## 📧 Contact
For any inquiries, please contact your-email@example.com.
