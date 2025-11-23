# 📍 Day 4 — Redux State Management & API Integration

This branch introduces **global state management using Redux Toolkit** and improves the application by keeping shared UI state consistent across multiple components.

By the end of Day 4, the app becomes a real mini-store with cart logic connected globally instead of component-level state.

---

## 🎯 Learning Objectives

| Concept | Status |
|---------|--------|
| Setting up Redux store using Redux Toolkit | ✔ |
| Creating slices (reducers + actions) | ✔ |
| Using selectors to access global state | ✔ |
| Dispatching actions from components | ✔ |
| Using `createAsyncThunk` for API calls | ✔ |
| Replacing component state with shared global store values | ✔ |

---

## 🧠 Key Concepts

### 1️⃣ Global State

Unlike component state (`useState`) which belongs to a single component, **Redux global state** is shared across the application.

Redux solves:

- Prop drilling (passing props through multiple components unnecessarily)
- Multiple components needing access to the same data
- Syncing UI elements (like cart count + product card buttons)

---

### 2️⃣ Redux Toolkit (RTK)

RTK is the recommended way to use Redux because it:

- Reduces boilerplate
- Automatically generates actions
- Supports async logic cleanly

Core APIs used:

| API | Purpose |
|------|--------|
| `configureStore()` | Creates the Redux store |
| `createSlice()` | Generates actions + reducer |
| `createAsyncThunk()` | Handles async calls (API fetching) |
| `useDispatch()` | Send actions |
| `useSelector()` | Read global state |

---

### 3️⃣ Slices Used Today

| Slice | Responsibility |
|-------|---------------|
| `cartSlice` | Stores items and cart count |
| `productsSlice` | Stores product list from backend |


---

### 4️⃣ Async Thunks for API Calls

The `productsSlice` uses `createAsyncThunk()` to fetch backend product data and automatically manages:

- Loading state
- Success state
- Error state

---

### 5️⃣ Updating UI via Redux Instead of Local State

Cart button logic from earlier days was rewritten to use Redux:

- Clicking “Add to Cart” → `dispatch(addToCart(product))`
- Navbar reads total cart count using `useSelector(selectCartCount)`

This ensures UI stays consistent everywhere.

---

## 📌 Output of Day 4

✔ Cart uses global Redux store  
✔ Products loaded via Redux async thunk  
✔ Navbar displays live cart count  
✔ ProductCard button correctly toggles using global state  
✔ App feels consistent and scalable  

---

## 👀 What You Should Be Able to Explain

- Why Redux is needed when apps grow
- Difference between local state vs global state
- How async thunks simplify API calls
- How UI reacts when Redux state updates

---

## 🧪 Checklist Before Finishing

- [ ] You can create a new slice without help  
- [ ] You can dispatch actions from a component  
- [ ] You can retrieve data using selectors  
- [ ] You understand where Redux is better than `useState`  
- [ ] You verified cart logic works across multiple screens  

---

## ▶️ Final Step

This is the last technical milestone.  
You now have:

- Routing  
- Forms  
- API communication  
- Redux global state  

Your app now matches real-world architecture standards.

---
