---

# Leamigo eSIM Recharge Platform

This is a **Next.js 15** project.

The platform allows users to:
- Enter their **Booking ID** to access their dashboard
- View their **current eSIM plan details**
- **Recharge** their eSIM by selecting from available plans
- Enjoy a **responsive, mobile-friendly UI** built with **Tailwind CSS**

---

## 🚀 Getting Started

First, clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd frontend1
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

---

## 🛠️ How to Use the App

1. **Home Page**:  
   - Enter your **Booking ID** (example: `esim_12345678`).
   - Click **Submit** to navigate to your personalized **Dashboard**.

2. **Dashboard Page**:
   - View your **Current eSIM Plan** and **Remaining Data**.
   - Click on the **Recharge** button to browse available recharge plans.

3. **Recharge Page**:
   - View all available **Recharge Plans**.
   - Select a plan to **Recharge** your eSIM successfully.

---

## 📋 Features

| Feature | Description |
| :------ | :----------- |
| **Booking ID Entry** | Users enter their Booking ID to personalize their experience |
| **Dashboard View** | Displays user's current eSIM plan and remaining data |
| **Recharge Plans** | Users can browse and select from available recharge plans |
| **Responsive Design** | Fully mobile-friendly using Tailwind CSS |
| **Client-side Routing** | Fast navigation without full page reloads |
| **UsageBar Component** | Visual representation of data usage |

---

## 📂 Project Structure

- `app/` — Contains all Next.js pages (Home, Dashboard, Recharge)
- `components/`  
  - `PlanCard.jsx` — Displays individual recharge plans  
  - `UsageBar.jsx` — Displays data usage progress bar
- `data/esimData.json` — Mock user and plan data
- `public/` — Static assets (if needed)
- `styles/` — Global styles (if needed)

---

## 📄 Implementation Details

- **Booking ID** is captured from URL parameters to personalize user experience.
- **Client-side Routing** is handled using `next/navigation`.
- **State Management** is handled locally via `useState` and `useEffect`.
- Fully **responsive** UI using **Tailwind CSS** utility classes.
- Smooth user flow with minimal and clean interface design.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js - Interactive Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🚀 Deployment

You can easily deploy this Next.js app using [Vercel](https://vercel.com/new).

For more info, read the [Next.js Deployment Guide](https://nextjs.org/docs/app/building-your-application/deploying).

---

# ✅ Quick Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

# 🔥 Thank you for checking out the project!

---
