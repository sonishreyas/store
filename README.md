# 📍 Day 1 — React Fundamentals & Components

This branch introduces the basic building blocks of React.  
By the end of Day 1, you should understand how React renders UI, how components work, and how data flows using **props and state**.

---

## 🎯 Learning Objectives

| Topic | Status |
|-------|--------|
| What is React and why it’s used | ✔ |
| JSX and rendering | ✔ |
| Functional components | ✔ |
| Props (passing data into components) | ✔ |
| State (useState hook) | ✔ |
| useEffect basics (load data once) | ✔ |
| Basic CSS using className | ✔ |

---

## 🧠 Key Concepts

- React uses a **Virtual DOM** for fast UI updates.
- Components return **JSX**, which looks like HTML but is actually JavaScript.
- **Props = external input** passed to a component (read-only).
- **State = internal value** that can change using `useState()`.
- `useEffect()` is used for side effects like fetching data from backend.

---

## 📂 Files Added or Updated in This Branch

```
src/
 ├─ components/
 │   └─ ProductCard.jsx
 ├─ pages/
 │   └─ Products.jsx
 ├─ App.jsx
 ├─ App.css
```

---

## 🧩 Component Built Today: `ProductCard`

This component:

- Displays a product (title, price, image)
- Accepts values using props
- Uses `useState()` to toggle button text (Add → Remove From Cart)
- Implements reusable styling

---

## 🎨 CSS Class Names Used

| Purpose | Class Name |
|---------|------------|
| Card wrapper | `product-card` |
| Product image | `product-image` |
| Product title | `product-title` |
| Price text | `product-price` |
| Button section | `action-section` |
| Button | `action-btn` |

---

## 📌 Expected Output Today

✔ A page showing multiple product cards  
✔ Initially: static data  
✔ Then: dynamic data fetched from backend using `fetch()` + `useEffect()`  
✔ Functional Add/Remove button using state

---

## ⚡ Before Moving to Day 2 — Complete This Checklist

- [ ] Explain props vs state in your own words  
- [ ] Change the product card design or text and observe React update  
- [ ] Add a new mock component using props  
- [ ] Try breaking and fixing the fetch logic  
- [ ] Understand when `useEffect()` runs

If all above are done, you're ready for the next branch.

---

## ❓ Quick Knowledge Check

- What are props used for?
- When do you use state instead of props?
- What does `useEffect(() => {}, [])` mean?
- Why does React need the Virtual DOM?

If you can answer confidently, move forward.

---

## ▶️ Next Step

Once finished with Day 1 learning and testing:

```
git checkout -b 02-forms-validation
```

---

Good job finishing Day 1 — the foundation is now set for forms and validation in Day 2.
