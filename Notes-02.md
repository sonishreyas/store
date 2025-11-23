# 📘 Day 2 Notes — Forms, Controlled Inputs & Validation

This document explains the form handling concepts from Day 2 including controlled form inputs, real-time validation, regex rules, and reusable validation logic.

---

## ✍️ 1. Controlled vs Uncontrolled Inputs

| Type | Who controls the value? | Suitable for validation? |
|------|--------------------------|--------------------------|
| Uncontrolled Input | Browser manages value (default HTML behavior) | ❌ Hard to validate |
| Controlled Input | React controls value using `useState()` | ✔ Yes |

Controlled input example:

```jsx
<input value={name} onChange={(e) => setName(e.target.value)} />
```

This keeps React and the UI in sync.

---

## 🧠 2. Using useState for Form Data

Each input connects to state so React always knows the current value.

Example:

```jsx
const [email, setEmail] = useState("");
```

Updating the input automatically updates React state.

---

## 🧪 3. Validation Fundamentals

Validation ensures users enter correct information before submitting.

Types used today:

| Field | Rule |
|-------|------|
| Name | 3 to 50 characters |
| Email | Must be valid + end with `@infosys.com` |
| Mobile | 10 digits |
| Pin Code | 6 digits |

React validates **while typing**, not just on submit.

---

## 🔍 4. Regex (Regular Expressions)

Regex helps match patterns.

Examples:

| Purpose | Regex Used |
|---------|------------|
| Email format | `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Mobile (10 digits) | `/^[0-9]{10}$/` |
| Pin code | `/^[0-9]{6}$/` |

React checks input against regex and shows/hides error messages.

---

## 🚦 5. Conditional Rendering for Errors

Errors appear only when the value is invalid:

```jsx
{error && <p className="error-text">Invalid Input</p>}
```

---

## 🧰 6. Reusable Validators

Validation is moved into a separate utility file:

```jsx
validateEmail(email);
validateMobile(mobile);
```

Keeps code organized and scalable.

---

## 🪝 7. Custom Form Hook

A custom hook (`useFormValidation`) centralizes:

- Form Values  
- Validation Logic  
- Error States  
- `isFormValid` (used to disable submit button)

This avoids repeating code for every form.

---

## 🚫 8. Disabling submit until valid

Submit button is disabled until all rules pass:

```jsx
<button disabled={!isFormValid}>Submit</button>
```

This prevents invalid submissions.

---

## 📌 Summary of What You Built Today

✔ A working registration form  
✔ Live validation messages  
✔ Controlled inputs using `useState`  
✔ Reusable validation utilities  
✔ Custom hook managing form state and errors  
✔ Submit button disabled until everything is valid  

---

## 👀 What You Should Be Able to Explain

- What makes an input controlled  
- How validation works in real-time  
- Why reusable validators are better than inline checks  
- How custom hooks reduce repetitive code  

---

## ✅ Checklist Before Moving On

- [ ] I can build a form without copying code  
- [ ] I can add a new field with validation myself  
- [ ] I understand conditional rendering for errors  
- [ ] I know how to check form validity before submission  

---

## 🧠 One-Sentence Summary

**Day 2 teaches how to handle form data using controlled inputs, validate it with reusable logic, and restrict submission until all conditions are met.**

---
