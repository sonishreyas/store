# 📍 Day 2 — Forms, Validation & Data Binding

This branch focuses on handling user input in React using **controlled components** and applying **validation rules** using both simple conditions and reusable utilities.

By the end of Day 2, the form should validate in real time and prevent submission until all conditions are met.

---

## 🎯 Learning Objectives

| Topic | Status |
|-------|--------|
| Controlled vs uncontrolled inputs | ✔ |
| Managing form state using `useState()` | ✔ |
| Live validation with conditional rendering | ✔ |
| Regex-based validation (email, phone, pincode) | ✔ |
| Custom validation utility functions | ✔ |
| Creating and using a custom hook | ✔ |
| Disabling button until form is valid | ✔ |

---

## 🧠 Key Concepts

### Controlled Input
A controlled input is where **React manages the value** of the input through state.

Example:

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

### Validation Rules Implemented

| Field | Requirement |
|-------|------------|
| Name | 3–50 characters |
| Email | Valid format + must end with `@infosys.com` |
| Mobile | Exactly 10 digits |
| Pin Code | Exactly 6 digits |
| Gender | Required (radio button) |
| Role | Required (dropdown select) |

---

## 📂 Files Added or Updated in This Branch

```
src/
 ├─ pages/
 │   └─ RegistrationForm.jsx
