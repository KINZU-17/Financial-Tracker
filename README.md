# Financial Tracker Dashboard

A modern, responsive React-based financial management tool designed to help users track transactions, manage categories, and monitor their spending habits. Inspired by high-performance dashboard layouts.

## Features

- **Dynamic Dashboard:** Real-time overview of all financial transactions.
- **Instant Search:** Filter through transactions by description instantly as you type.
- **Transaction Management:** Add new expenses with date, category, and amount.
- **Delete Functionality:** Remove old or incorrect entries with a single click.
- **Responsive Design:** Optimized for both Desktop and Mobile using Tailwind CSS.
- **Clean UI:** Styled with a professional, minimalist aesthetic inspired by Vercel's design language.

## Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Deployment:** [Vercel](https://vercel.com/) (Recommended)

## Project Structure

```text
src/
├── components/
│   ├── Sidebar.jsx       # Navigation and Branding
│   ├── ExpenseForm.jsx   # Input for new transactions
│   ├── ExpenseTable.jsx  # Display list of data
│   └── Search.jsx        # Filtering logic
├── data/
│   └── content.js        # Initial mock data
├── App.jsx               # Main Logic and State Controller
└── main.jsx              # Entry point
```


## Installation & Setup

1. Clone the repository:

```Bash
git clone [https://github.com/YOUR_USERNAME/Financial-Tracker.git](https://github.com/YOUR_USERNAME/Financial-Tracker.git)
```
2. Navigate to the project directory:

```Bash
cd Financial-Tracker
```

3. Install dependencies:

```Bash
npm install
```

4. Start the development server:

```Bash
npm run dev
```


# Collaboration
This project was built as a collaborative effort by the following team members:

1. James (Github @KINZU-17) — Project Lead & Integrator

- Responsible for App.jsx, ExpenseForm.jsx, and overall State Management.

2. Crystal (Github @crystalmu23) — Data Architect

- Responsible for ExpenseTable.jsx and data rendering logic.

3. Louis (Github @s-irlui) — UI & Navigation

- Responsible for Sidebar.jsx and the global dashboard layout.

4. Robby (Github @robbykagema) — Search & Filtering

- Responsible for Search.jsx and real-time filtering functionality.

## Team & Responsibilities

To ensure a smooth workflow and modular code architecture, the team has divided the components as follows:

| Contributor | Component Ownership | Primary Responsibility |
| :--- | :--- | :--- |
| **James** | `App.jsx` & `ExpenseForm.jsx` | Project Lead, State Management & Form Logic |
| **Crystal** | `ExpenseTable.jsx` | Data Mapping, UI Layout for Lists |
| **Louis** | `Sidebar.jsx` | Navigation, Branding & Global Layout |
| **Robby** | `Search.jsx` | Filter Logic & Input Styling |

## Workflow Strategy

To avoid merge conflicts and "code headaches," the team follows these rules:
1. **Feature Branching:** Each member works on a branch named after their component (e.g., `feature-sidebar`).
2. **Pull Requests:** No one merges directly to `main`. Changes are reviewed by the Project Lead (James).
3. **Sync Daily:** Always run `git pull origin main` before starting a coding session to stay updated with the team's progress.