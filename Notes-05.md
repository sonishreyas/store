# 📍 Day 5 — Final Revision + Missing Topics Patch

This day fills the remaining exam gaps and reinforces everything learned so far. The goal is not to build new features, but to finalize missing requirements and review critical concepts.

---

## 🎯 Focus Topics Today

| Topic | Status |
|-------|--------|
| Lifecycle Methods (Mapped to Hooks) | ✔ Today |
| Custom Pipe Equivalent in React | ✔ Today |
| Redux Middleware Understanding | ✔ Today |
| Full Project Review Checklist | ✔ Today |
| Final Practice Tasks | ✔ Today |

---

## 🧠 1️⃣ Lifecycle Methods in React (Hook Equivalents)

React no longer uses class components in modern development, but the exam might ask mapping.

| Class Lifecycle Method | Purpose | Hook Equivalent |
|------------------------|---------|----------------|
| `componentDidMount` | Runs once when component loads | `useEffect(() => {}, [])` |
| `componentDidUpdate` | Runs when state/props change | `useEffect(() => {})` |
| `componentWillUnmount` | Cleanup before component removal | `return () => { cleanup }` inside `useEffect` |

**Example Code:**

```jsx
useEffect(() => {
  console.log("Mounted or Updated");

  return () => {
    console.log("Cleanup before unmount");
  };
}, []);
```

---

## 🧮 2️⃣ Custom "Pipe" Equivalent (Utility Function)

Angular uses pipes. React does **not** — instead we use:

- Utility helper functions  
- Custom hooks  
- Reusable components  

Example from exam requirement: *Convert GB → MB*

```js
// src/utils/conversions.js
export const convertGBtoMB = (value) => value * 1024;
```

Usage inside component:

```jsx
import { convertGBtoMB } from "../utils/conversions";

<p>Size: {convertGBtoMB(2)} MB</p> // Output: 2048 MB
```

If you want this reusable across UI formatting, you can also write:

```jsx
{ products.map(p => <p>{convertGBtoMB(p.storage)} MB</p>) }
```

---

## 🧵 3️⃣ Redux Middleware Understanding

Middleware sits **between dispatching an action and reducer execution**.

It allows:

- Logging
- Debugging
- Async calls (ex: Redux Thunk)
- Authentication checks

Example visual flow:

```
Component → dispatch(action) → middleware → reducer → updated state
```

In your project:

- **Redux Thunk** is middleware.
- It allows async API calls by returning functions instead of plain objects.

Example:

```js
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    return response.json();
  }
);
```

---

## 🛠 4️⃣ Final Project Feature Patch Checklist

Make sure your project now includes:

| Feature | Included? |
|---------|-----------|
| Home UI with navbar links | ✔ |
| Product listing UI | ✔ |
| Card component with props | ✔ |
| Search filter | ✔ |
| Routing + dynamic `:id` | ✔ |
| Lazy loading | ✔ |
| Registration form | ✔ |
| Validation (pattern + custom + regex) | ✔ |
| Custom utils (pipe equivalent) | ✔ |
| Redux store | ✔ |
| Middleware usage explanation | ✔ |
| Cart stored globally | ✔ |
| Server-side fetch using thunk | ✔ |

---

## 🧪 Final Revision Tasks (Do These Without Help)

### Task 1 — Explain These in One Line Each:

- Props  
- State  
- Redux  
- `useEffect`  
- Middleware  
- Controlled input  
- Thunk  

### Task 2 — Modify Code

- Add new form field (ex: Country dropdown with validation).
- Add new Redux slice (ex: theme or wishlist).
- Add a new route (`/about`) with lazy loading.

### Task 3 — Debug Thinking

Be able to answer:

> “Why should cart count be in Redux instead of component state?”

Expected reasoning:

- Used across navbar, product card, product detail → shared global state → Redux is appropriate.

---

## 🧠 One-Sentence Summary

**Day 5 ensures you understand lifecycle equivalents, middleware, reusable logic patterns, and can confidently explain and modify your application — all required for certification readiness.**

---

## 🎉 You Are Ready

Once you complete this day, you’ll have:

- A working real-world project
- Every exam topic implemented
- Written theory for revision
- Hands-on logic understanding

Use the last 30–60 mins to test everything slowly — no guessing.

---
