# Shopping App Dashboard

A responsive admin dashboard for a shopping application built with React, Syncfusion components, and Tailwind CSS. Use this dashboard to visualize and manage orders, employees, products, and customers with interactive charts and data tables.


Skills: React.js · Syncfusion React UI Components · Tailwind CSS

## Features

- Orders management and summaries
- Employee performance overview
- Customer list and details
- Interactive charts (line, area, stacked, sparkline)
- Responsive layout with sidebar and top navigation
- Theme settings and user profile panel

## Tech Stack

- React 17
- Syncfusion React components (Charts, Grids, Kanban, Calendars)
- Tailwind CSS
- React Router
- react-icons

## Screenshots

<div align="center">
  <img src="./shopping/Capture d'écran 2025-04-29 113233.png" width="360" alt="Dashboard preview 1" />
  <img src="./shopping/Capture d'écran 2025-04-29 113246.png" width="360" alt="Dashboard preview 2" />
  <img src="./shopping/Capture d'écran 2025-04-29 113333.png" width="360" alt="Dashboard preview 3" />
  <img src="./shopping/Capture d'écran 2025-04-29 113350.png" width="360" alt="Dashboard preview 4" />
  <img src="./shopping/Capture d'écran 2025-04-29 113412.png" width="360" alt="Dashboard preview 5" />
</div>

## Installation

Prerequisites: Node.js (>= 14) and npm

1. Install dependencies

```powershell
npm install
```

2. Start the development server

```powershell
npm start
```

The app will open at http://localhost:3000 by default.

## Project Structure

Key folders and files:

- `src/` - React source code
  - `components/` - UI components (Sidebar, Navbar, Charts, etc.)
  - `pages/` - Dashboard pages (Ecommerce, Orders, Customers...)
  - `data/` - images and sample data used by the app
- `shopping/` - project screenshots used in this README
- `package.json` - project scripts and dependencies

## Scripts

- `npm start` - start development server (react-scripts start)
- `npm run build` - build production bundle
- `npm test` - run tests

## Usage

This project is a frontend template. To connect real data or APIs:

1. Replace the sample data files in `src/data` with your API calls or data adapters.
2. Swap mock handlers with your REST or GraphQL endpoints in the components that fetch data.
3. Configure authentication and role-based access as needed.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a feature branch
3. Make changes and add tests
4. Open a pull request

## License

This project is provided under the MIT License.
