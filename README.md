🛒 TechStore – Modern React E-Commerce Application

🚀 TechStore is a fully responsive e-commerce frontend built with React.js that delivers a seamless and realistic online shopping experience. The application focuses on scalable component architecture, efficient state management, and production-style UI behavior — including persistent user data across sessions.

Designed as a strong portfolio project, TechStore demonstrates the ability to build real-world front-end applications using modern React practices.

---


🌐 Live Demo

🔗 View the Application:
(https://tech-store-project-using-react-eight.vercel.app/)

---


📌 Project Overview

TechStore allows users to:

Browse products in a responsive grid

Search and filter items instantly

Sort products intelligently

Manage a wishlist

Control a dynamic shopping cart

Toggle dark/light theme

Retain data even after refreshing the browser

The project highlights clean design patterns and user-focused functionality similar to production e-commerce platforms.

---


✨ Core Features

🧩 Component-Based Architecture

Reusable ProductCard component

Modular folder structure

Dedicated CSS for maintainability

Scalable design for future expansion

---


🛍️ Product Browsing

Responsive product layout

Detailed product cards displaying:

Image

Pricing

Discount

Rating

Best Seller badge

---


🔎 Search, Filter & Sort

Real-time search

Brand-based filtering

Smart sorting options:

Price: Low → High

Price: High → Low

Rating

Provides a smooth, modern shopping flow.

---


❤️ Wishlist System

Add/remove items instantly

Navbar wishlist counter

Move products directly to cart

---


🛒 Dynamic Shopping Cart

Add and remove products

Update quantities

Automatic price calculation

Dropdown cart panel

Empty cart state UI

---

🔄 Persistent State Management (Advanced Feature)

One of the biggest upgrades to TechStore is state persistence, allowing the application to behave like a real-world product instead of a temporary demo.

✅ What This Solves

Most beginner React apps lose all data on refresh.

TechStore remembers user activity, dramatically improving UX.

⚙️ How It Works

✔ useEffect for Synchronization

Automatically updates storage whenever cart or wishlist changes.

✔ LocalStorage Integration

Cart items persist across sessions

Wishlist selections remain saved

Theme preference is remembered

✔ JSON Serialization

JSON.stringify() stores structured data

JSON.parse() restores application state safely

---



🌗 Dark / Light Mode

Global theme toggle

Implemented using data-theme

User preference persists after reload

---


🎨 Modern UI Experience

Hero landing section

Clean typography

Balanced spacing

Dropdown panels

Empty-state illustrations

Strong visual hierarchy

Built with usability as the priority.

---


🧠 Skills Demonstrated

This project showcases strong proficiency in:

React

Hooks (useState, useEffect, useRef)

Component communication via props

Conditional rendering

Event handling

JavaScript Mastery

Array methods (map, filter, reduce, find)

Immutable state updates

JSON handling

Frontend Engineering

Persistent UI state

Modular CSS architecture

Responsive layout principles

Production-style UX patterns

---



📁 Project Structure
```
src/
│
├── assets/
│   ├── logo.png
│   └── react.svg
│
├── components/
│   ├── HERO-SECTION/
│   │   └── Hero.jsx
│   │
│   ├── NAV-BAR/
│   │   ├── Buttons.jsx
│   │   ├── Cart.jsx
│   │   ├── NavLinks.jsx
│   │   ├── NavLogo.jsx
│   │   ├── Toggle.jsx
│   │   └── Wishlist.jsx
│   │
│   └── SECTIONS/
│       ├── BestSeller.jsx
│       ├── Footer.jsx
│       ├── ProductCard.jsx
│       └── ProductCard.css
│
├── data.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```


🔥 Future Enhancements

To evolve TechStore into a full-scale production app:

✅ Context API / Redux for global state

✅ LocalStorage abstraction hook

✅ Product details page

✅ Authentication & user accounts

✅ Backend integration

✅ Payment gateway

✅ Framer Motion animations

✅ Skeleton loaders

✅ Performance optimization

---


🎯 Learning Outcome

Through building TechStore, I strengthened my ability to:

Architect scalable React applications

Implement persistent frontend state

Design clean and reusable components

Deliver modern, user-friendly interfaces

Apply real-world engineering practices

This project marks a major step toward professional front-end development.
