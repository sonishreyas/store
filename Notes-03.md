# 📘 Day 3 Notes — Routing, Dynamic UI & Server Communication

This document explains the core concepts learned in Day 3 in a simple and beginner-friendly format. These notes cover routing, navigation, dynamic URL handling, lazy loading, and using backend data based on route parameters.

---

## 🚦 1. What is React Router?

React Router allows us to build **Single Page Applications (SPAs)** where the page doesn't reload, but the content changes based on the URL.

Without routing → Everything loads on one screen.  
With routing → We can have multiple logical pages like:

- `/products`
- `/products/5`
- `/form`

---

## 🧱 2. BrowserRouter, Routes & Route

These three are essential to enable routing:

| Component | Purpose |
|----------|---------|
| `<BrowserRouter>` | Wraps the entire app and enables routing |
| `<Routes>` | Container holding multiple routes |
| `<Route>` | Defines a specific path and which component should load |

Example:

```jsx
<Routes>
  <Route path="/products" element={<Products />} />
  <Route path="/form" element={<RegistrationForm />} />
</Routes>
```

---

## 🔗 3. Navigation using NavLink and useNavigate

### NavLink  
Used in the UI for user-click navigation (like a menu).

Example:

```jsx
<NavLink to="/products">Products</NavLink>
```

### useNavigate  
Used to navigate **programmatically**, usually after a button click.

Example:

```jsx
const navigate = useNavigate();
navigate(`/products/${id}`);
```

---

## 🧭 4. Route Parameters (`:id`)

A **route parameter** allows dynamic paths such as:

```
/products/1
/products/2
/products/10
```

To read the value (`1`, `2`, etc.), we use:

```js
const { id } = useParams();
```

Then we can fetch that specific product from the backend like:

```js
fetch(`/products/${id}`);
```

This is what makes pages like Product Detail dynamic.

---

## 💤 5. Lazy Loading (React.lazy + Suspense)

Lazy loading means:  
**Only load a component when the user visits that route** → improves performance.

Example:

```js
const Products = React.lazy(() => import("./pages/Products"));
```

We must wrap lazy-loaded components inside `Suspense`:

```jsx
<Suspense fallback={<p>Loading...</p>}>
  <Products />
</Suspense>
```

---

## 🔍 6. Search Filter (Optional Improvement)

Instead of showing all products, the user can type into a search bar and filter results.

Example logic:

```js
products.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
```

This behaves like Angular pipes but is controlled manually in React.

---

## 🧪 Summary of What Changed Today

✔ Added routing to move between pages without page reload  
✔ Created a navbar for navigation  
✔ Enabled dynamic paths like `products/:id`  
✔ Fetched backend data based on the selected product  
✔ Added lazy loading to optimize performance  
✔ Implemented optional search filtering

---

## 👀 What You Should Be Able to Explain

- What is a SPA and how React Router supports it
- What route parameters (`:id`) are used for
- When to use `NavLink` vs `useNavigate`
- How and why lazy loading improves performance
- How to load data based on URL parameters

---

## ✅ Checklist Before Moving On

- [ ] I can navigate between multiple pages without refreshing
- [ ] I understand how clicking a product opens a detail page
- [ ] I know how to extract a route parameter using `useParams()`
- [ ] I can perform a fetch request based on a route ID
- [ ] I understand how lazy loading works and why we use it

---

## 📌 One-Sentence Summary

**Day 3 teaches how to move between pages, load data based on the URL, and create an interactive navigation system just like real modern web apps.**

---
