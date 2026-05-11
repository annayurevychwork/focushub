<div align="center">
  <h1>🎯 FocusHub</h1>
  
  <p>A modular productivity web application featuring ToDo management, Habit tracking, Budgeting, and a Pomodoro Timer—all in one place.</p>

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)]()
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)]()
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://focus-hub-ten.vercel.app)

  <br/>

  ### 🚀 [View Live Demo](https://my-focus-hub.vercel.app/) 🚀
</div>

---

## ✨ Key Features

- 📊 **Overview Dashboard:** Instant insights into your daily productivity, including active tasks, habits, and current budget balance.
- ✅ **Smart ToDo List:** Full CRUD functionality (Create, Read, Update, Delete) for tasks with completion status toggling.
- 🔄 **Habit Tracker:** Build long-term routines with a daily habit tracker that automatically resets every new day.
- 💰 **Budget Manager:** Track your income and expenses with real-time balance calculation and transaction history.
- ⏱️ **Pomodoro Timer:** A classic 25-minute productivity timer to help you stay focused using the Pomodoro technique.

## 🛠️ Technical Implementation & Deployment

This project was built without external frameworks to demonstrate a strong grasp of core web technologies:

- **Frontend:** Semantic HTML5 and responsive CSS3 (Flexbox/Sticky layouts).
- **Logic:** Vanilla JavaScript (ES6+) with a **Modular Architecture** to keep the code clean and maintainable.
- **State Management:** Implementation of a custom global store using **LocalStorage** for data persistence (data remains after page refresh).
- **Hosting:** Deployed via **Vercel** with automated **CI/CD** pipelines from GitHub.

## 📂 Project Structure

- `index.html` — Main entry point and application structure.
- `styles/layout.css` — Custom styling and UI components.
- `js/store.js` — Global state logic and LocalStorage integration.
- `js/tasks.js`, `habits.js`, `budget.js`, `timer.js` — Modular components handling specific business logic.

## 📸 Screenshots

<details>
  <summary><b>Click to expand screenshots</b></summary>
  
  <br/>
  
  **Dashboard & ToDo Section:**
  ![Overview and Todo](screenshots/overview_todo.png)

  **Habits & Budgeting:**
  ![Habits and Budget](screenshots/habits_budget.png)

  **Pomodoro Timer:**
  ![Pomodoro](screenshots/pomodoro.png)
</details>
