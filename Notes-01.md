# 📘 Day 1 Notes — React Fundamentals & Components

This document summarizes the core concepts from Day 1. These fundamentals are the building blocks of every React project including the one you're working on.

---

## ⚛️ 1. What is React?

React is a **JavaScript library** used to build **user interfaces**, especially **Single Page Applications (SPAs)** where the UI updates without full page reload.

Key ideas:

- React creates dynamic user interfaces
- It updates only the part of the UI that changes (thanks to the **Virtual DOM**)
- Uses a **component-based architecture** (reusable UI blocks)

---

## 🧩 2. JSX (JavaScript XML)

JSX lets us write HTML-like syntax inside JavaScript.

Example:

```jsx
<h2>Hello React</h2>
```

JSX rules:

| Rule | Explanation |
|------|------------|
| Must return a single parent element | Wrap elements inside a parent `<div>` or `<>...</>` |
| Use `className` instead of `class` | Because `class` is a JS keyword |
| Use `{}` to write expressions | Example: `<p>{price}</p>` |

---

## 🔹 3. Functional Components

A functional component is just a JS function that returns JSX.

Example:

```jsx
function ProductCard() {
  return <div>Product</div>;
}
```

Modern React uses **functional components + hooks** (not class components).

---

## 📤 4. Props (Component Inputs)

Props allow components to receive data.

Example usage:

```jsx
<ProductCard title="Laptop" price={2000} />
```

Inside component:

```jsx
function ProductCard(props) {
  return <h3>{props.title}</h3>;
}
```

Important: **Props are read-only**.

---

## 🧠 5. State (`useState`)

State stores values that can change over time.

Example:

```jsx
const [added, setAdded] = useState(false);
```

Updating state:

```jsx
setAdded(true);
```

When state changes, the UI automatically updates.

---

## 🔁 6. useEffect (Intro Level)

`useEffect()` runs code after the component renders — useful for:

- Fetching data from backend
- Running side effects

Basic example:

```jsx
useEffect(() => {
  console.log("Component loaded");
}, []);
```

The empty array `[]` means: **run only once when component mounts**.

---

## 🎨 7. Styling with `className`

React does not use HTML `class`. Instead:

```jsx
<div className="product-card"></div>
```

CSS files are still separate just like normal web development.

---

## 📌 Summary of What You Built Today

✔ A `ProductCard` component  
✔ Passed props to display title, price, image  
✔ Used `useState` to toggle "Add to Cart" button  
✔ Displayed product list dynamically  
✔ Loaded product data from backend using `useEffect` and `fetch()`  

---

## 👀 What You Should Be Able to Explain

- What JSX is and why React uses it  
- Difference between **props** and **state**  
- When `useEffect` runs  
- How UI updates when state changes  

---

## ✅ Checklist Before Moving On

- [ ] I can create a new component without copying  
- [ ] I can pass props and display them  
- [ ] I understand how state updates work  
- [ ] I can fetch data using `useEffect`  

---

## 🧠 One-Sentence Summary

**Day 1 teaches how to create components, pass data using props, manage internal state, and load data from a backend using React hooks.**

---
