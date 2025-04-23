# Stripe Modular Checkout Demo

This project showcases a **modular Stripe Checkout integration** built with **Express (backend)** and **React (frontend)**.

The goal of this app is to provide a **reusable donation/payment component** that can be easily imported into future full-stack applications.

---

## Features

- Stripe Checkout Sessions with dynamic `price_id`
- Three selectable donation tiers (0.50€, 0.51€, 0.52€)
- Fully functional integration using live Stripe API keys
- Modular backend design ready to be exported as a `stripe.service.js` and `stripe.routes.js`
- Clean Bootstrap UI with React + Axios + Stripe.js
- Deployed demo via Render

---

## Tech Stack

**Frontend**
- React
- Bootstrap
- Stripe.js
- Axios

**Backend**
- Express.js
- Stripe Node SDK
- dotenv
- CORS
- Render deployment

---

## Live Demo

[**Visit Stripe Basic Checkout Demo**](https://stripebasic.onrender.com)

---

## Project Structure

stripe-checkout/ 
├── backend/ 
│  └──server.js 
└── frontend/ 
    ├── components/ 
    │   └── Checkout.jsx 
    └── main.jsx