# 📘 Day 4 Notes — Redux & Global State Management

These are simplified Day 4 notes focused on understanding Redux and how it fits into React.

---

## 🔍 What Problem Does Redux Solve?

React’s `useState` works well for single components, but becomes difficult when:

- Many components need the same data
- Data must stay synced across pages
- Passing props becomes messy ("prop drilling")

**Redux solves this by storing shared data in one centralized place → called the store.**

---

## 🧱 Redux Toolkit Basics

Redux Toolkit provides a modern, simplified way to use Redux.

Key building blocks:

| Concept | Explanation |
|--------|-------------|
| **Store** | The container that holds global state |
| **Slice** | A piece of state + the logic to update it |
| **Action** | A named event telling Redux what changed |
| **Reducer** | Function that updates the state |
| **Selector** | Function that reads values from store |
| **Dispatch** | How we tell Redux to update state |

---

## ⚙️ createSlice()

A slice combines reducer + actions.

Example idea:

```js
cartSlice = {
  state: { totalCount: 0 },
  reducers: { addToCart, removeFromCart }
}
```

---

## 🚀 createAsyncThunk()

A helper for API calls.

It automatically tracks:

- `loading`
- `success`
- `error`

Used for fetching products from backend.

---

## 🔁 State Flow in Redux

```
Component → dispatch(action) → reducer updates store → UI updates automatically
```

You never mutate state manually. Redux handles updates cleanly.

---

## 🛒 What We Moved to Redux

| Feature | Before | After |
|--------|--------|-------|
| Cart count | Local state | Global store |
| Product list | Component state | Redux async state |
| Add/Remove logic | Inside component | Redux slice actions |

---

## ✔ Why This Matters

Redux makes the app:

- More scalable
- More predictable
- Easier to debug
- Easier for multiple developers to work on

---

## 🧠 Summary Sentence

**Redux provides a shared global state so multiple components can access and update data without prop drilling or inconsistent UI.**

---
