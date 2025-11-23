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
 ├─ hooks/
 │   └─ useFormValidation.js
 └─ utils/
     └─ validators.js
```

---

## 🧩 New Concepts Implemented Today

### ✓ Utility-Based Validation

Validation logic was moved into:

```
src/utils/validators.js
```

This ensures:

- Cleaner components  
- Reusable logic  
- Easier maintenance  

---

### ✓ Custom Hook for Form Handling

`useFormValidation.js` centralizes state and validation logic:

- Stores form values  
- Stores validation errors  
- Exposes `handleChange` to bind inputs  
- Provides `isFormValid` for disabling submit  

---

## 🎨 Relevant CSS Class Names

| Purpose | Class Name |
|---------|------------|
| Page container | `form-page` |
| Form wrapper | `registration-form` |
| Error text | `error-text` |
| Radio group layout | `radio-group` |
| Submit button | `submit-btn` |

---

## 📌 Expected Output Today

✔ A working registration form  
✔ Validation messages appear only when invalid  
✔ Input values fully controlled by React  
✔ Submit button disabled until all fields are valid  
✔ Custom validation hook + reusable validators implemented  

---

## ⚡ Before Moving to Day 3 — Complete This Checklist

- [ ] You can explain what a **controlled component** is  
- [ ] You can modify/add validation rules yourself  
- [ ] You can add another field (example: age, city) without help  
- [ ] You understand how the custom hook returns state and validation  

If yes → move forward.

---

## ❓ Quick Knowledge Check

- Why do we use controlled components?
- When does `useEffect` belong inside a form?
- What is the benefit of extracting validation into a separate file?
- How does disabling the button improve UX?

---

## ▶️ Next Step

Once comfortable with the form logic and validations:

```
git checkout -b 03-routing-integration
```

---

Well done — now the UI is interactive and intelligent. Day 3 will introduce **routing and navigation**.
