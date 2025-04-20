# ✅ TaskMaster Pro

![TaskMaster Pro Banner](https://img.shields.io/badge/TaskMaster-Pro-blue?style=for-the-badge&logo=react)

A modern, feature-rich task management application built with React and Context API.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-latest-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-latest-646CFF?logo=vite)

## 🌟 Features

- **🎨 Beautiful Modern UI** with sleek design and smooth transitions
- **🌓 Dark/Light Theme** for comfortable day and night usage
- **🔄 Context API** for efficient state management
- **💾 Local Storage Integration** to persist tasks between sessions
- **🎯 Priority Management** with color-coded task prioritization (Low/Medium/High)
- **🎭 Customizable Task States** (completed/incomplete)
- **🧩 Component-Based Architecture** for better code organization

## 📸 Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="Screenshots/light.png" alt="Light Theme" width="400"/>
  <img src="Screenshots/dark.png" alt="Dark Theme" width="400"/>
</div>

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/VishalSh-Dev/TodowithContext.git
   cd Todowithcontext
   ```
2. Install dependencies

```bash
npm install
# or
yarn
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to http://localhost:5173

## 📋 Project Structure

```
src/
├── components/         # UI components
│   ├── TodoForm.jsx    # Task creation form
│   ├── TodoItem.jsx    # Individual task component
│   └── ThemeBtn.jsx    # Theme toggle button
├── context/            # Context providers
│   ├── TodoContext.js  # Task management context
│   └── Theme.js        # Theme context
└── App.jsx             # Main application component
```

## 🎯 Core Features

### Task Management

- Create, edit, and delete tasks
- Mark tasks as complete/incomplete

### Priority Levels

- Set priority levels for tasks (Low, Medium, High)
- Color-coded visual indicators for different priority levels

### Theme Switching

- Toggle between light and dark themes
- Persistent theme preference

### Data Persistence

- Tasks automatically saved to localStorage
- Tasks persist between browser sessions

## 🔜 Upcoming Features

- Due dates & reminders
- Categories/tags for task organization
- Subtasks for breaking down complex tasks
- Task filtering and sorting
- Cloud sync

<hr /> 
Made with ❤️ by Vishal Shaw
