# 📍 Day 3 — Routing, Dynamic UI & Server Integration

Today’s goal is to make the application navigable, dynamic, and connected to backend data using **React Router** and **data-fetching patterns**.

This day covers the largest chunk of real development skills — routing, navigation, dynamic rendering, and reading values from the URL.

---

## 🎯 Learning Objectives

| Concept | Status |
|---------|--------|
| Setting up routing using `react-router-dom` | ✔ |
| Creating multiple pages | ✔ |
| Route Parameters (`/products/:id`) | ✔ |
| Navigation using `Link` and `useNavigate()` | ✔ |
| Lazy loading pages (`React.lazy` + `Suspense`) | ✔ |
| Fetch product details dynamically based on route param | ✔ |
| Optional: Search filter for product listing | ✔ |

---

## 🧠 Key Concepts Explained

### 1️⃣ **React Router**

React Router allows SPA apps to change UI without refreshing the page.

Core components used today:

| API | Purpose |
|------|--------|
| `<BrowserRouter>` | Enables routing |
| `<Routes>` / `<Route>` | Defines pages and paths |
| `NavLink` | Creates navigation links with active styling |
| `useNavigate()` | Navigate programmatically (ex: button click) |
| `useParams()` | Read dynamic values from the URL (`:id`) |

---

### 2️⃣ **Dynamic Routes (`:id`)**

When a URL contains a placeholder, e.g.:

```
/products/5
```

React extracts the number (`5`) using:

```js
const { id } = useParams();
```

Then we fetch the correct product:

```js
fetch(`/products/${id}`)
```

This enables dynamic detail pages.

---

### 3️⃣ **Lazy Loading & Suspense**

Instead of loading all pages at once, we load them **only when needed**.

Example:

```js
const Products = React.lazy(() => import("./pages/Products"));
```

This improves performance and matches modern React patterns.

---

### 4️⃣ **Search Filter Logic**

The page reads the search text and filters products:

```js
product.title.toLowerCase().includes(searchTerm.toLowerCase())
```

This mimics Angular pipes but React does it manually.

---

## 📂 Files Added or Updated Today

```
src/
 ├─ components/
 │   └─ Navbar.jsx
 ├─ pages/
 │   ├─ Products.jsx  (updated)
 │   └─ ProductDetail.jsx
 ├─ App.jsx
 └─ index.js
```

---

## 🎨 CSS Class Names Used

| Purpose | Class Name |
|---------|------------|
| Navigation bar | `navbar`, `nav-link`, `active` |
| Search bar | `search-input` |
| Detail layout | `product-detail-card` |
| Loading text | `loading-text` |
| Error message | `error-text` |

---

## 📌 Expected Output Today

✔ A working navbar with active style  
✔ Product list accessible via `/products`  
✔ Clicking a product opens `/products/:id`  
✔ Product detail page fetches data from backend  
✔ Registration form accessible via `/form`  
✔ Search works dynamically without page reload  
✔ Lazy loading improves performance  

---

## ⚡ Before Moving to Day 4 — Self-Check

- [ ] Can you explain `useParams()`?
- [ ] Can you navigate using `useNavigate()`?
- [ ] Can you add another route if needed?
- [ ] Can you modify the product detail layout confidently?

If yes → proceed to the final stage.

---

## ▶️ Next Step

Once everything works smoothly, move to the next branch:

```
git checkout -b 04-redux-final
```

---

Routing is now complete — the app finally behaves like a real multi-page web application.  
Day 4 will introduce **Redux and global state management.**
