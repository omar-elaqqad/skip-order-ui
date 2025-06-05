# Skip Order App – Eco-Friendly Themed UI

This project is a React-based user interface for a skip hire service, with a clean and responsive design. The main focus was to create an **eco-friendly experience** using a **blue and green color scheme**, responsive layout, and clear visual indicators of user progress.

## 🌱 Project Goals

- Deliver an **eco-conscious** UI using calming **green and blue** tones.
- Provide a **step-based ordering process** (Postcode → Payment) with clear progress indicators.
- Ensure a **fully responsive** design optimized for both **mobile and desktop**.
- Keep the code **clean, modular, and maintainable** with reusable components.
- Avoid custom CSS by using **Tailwind CSS utility classes** for consistency and scalability.

---

## 🧩 Components

The UI is broken into 4 key components:

### 1. `Header`
- Displays a **fixed step-based progress bar** with icons and labels.
- Highlights the **current and completed steps** in blue.
- Fully scrollable and responsive on mobile with `overflow-x-auto`.

### 2. `Footer`
- Shows **selected skip summary** (size, hire duration, total cost).
- Includes **Back** and **Continue** buttons with hover effects.
- Displays a **disclaimer** for skip image accuracy.

### 3. `SkipList`
- Renders a collection of skip options based on fetched data.
- Highlights the selected skip and handles selection state.

### 4. `SkipOption`
- Represents a single skip option card with an image, title, and price.
- Displays the selected skip using Tailwind styling cues.

---

## 📦 Tech Stack

- **React**
- **Tailwind CSS** – all styles are defined using utility classes (no custom CSS).
- **Responsive Design** – adapts gracefully from mobile to desktop.
- **Component-Driven Architecture** – clean separation of logic and UI.

---

## 🔄 Data & App Structure

- Data is fetched from an external API or mock JSON in `App.jsx`.
- State is managed at the App level and passed to child components.
