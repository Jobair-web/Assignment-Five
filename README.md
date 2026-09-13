# ⚡ TechStack Explorer

An interactive web application designed to showcase modern web technologies and allow users to dynamically curate and manage their tech stack.

---

## 📝 Description

**TechStack Explorer** is a responsive React application built with Vite. It features an intuitive user interface where users can browse various frontend and backend technologies, filter through features, and add/remove items to a custom tech stack sidebar in real-time.

---

## 🛠️ Technologies Used

- **Frontend Library:** React (Vite setup)
- **Styling:** CSS3 / Modern Utility-first styling
- **Icons & Assets:** Custom PNGs & SVG Icons
- **State Management:** Custom React Hooks (`useTechnologyStack`)
- **Code Quality:** Oxlint / VSCode settings

---

## ✨ Key Features

1. **Dynamic Tech Stack Sidebar:** Add or remove technologies to/from your personal stack dynamically with real-time UI updates.
2. **Interactive Technology Cards:** View detail-oriented cards for each technology with add/remove state toggles.
3. **Custom Hook Architecture:** Clean separation of business logic and presentation using custom hooks (`useTechnologyStack`).

---

## ❓ React Questions & Answers

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like markup directly inside JavaScript files. It is used in React because it makes writing component UI intuitive, readable, and enables seamlessly combining logic with visual structure.

---

### 2. What is the difference between props and state?
**Answer:** 
- **Props (Properties):** Read-only data passed from a parent component down to a child component to customize it.
- **State:** Mutable data managed locally inside a component that can change over time based on user actions or lifecycle events.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to store and manage local state. In this project, it was used inside `useTechnologyStack` to maintain the array of selected technologies in the stack sidebar.

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** The `useEffect` hook handles side effects in functional components, such as fetching data or setting up timers. In this project, it was used to fetch the initial technology data from `technologies.json` when the component first mounts.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React uses the `key` prop to identify which list items have changed, been added, or removed. It helps React perform fast and efficient Virtual DOM diffing during re-renders.

---

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying different UI components or elements based on a boolean condition or state. 
*Example from project:* Displaying an empty stack placeholder message when `stack.length === 0`:
```jsx
{stack.length === 0 ? (
  <p className="empty-msg">No technologies added to your stack yet.</p>
) : (
  stack.map((item) => <StackItem item="{item}" key="{item.id}"/>)
)}

---

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:

Parent to Child: Data is passed down via props.

Child to Parent: The parent passes a callback function as a prop to the child, and the child calls that function with data as arguments.


