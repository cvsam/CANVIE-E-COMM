# 🛒Mini E-Commerce Application

A modern e-commerce web application built with **React** and **Vite**, styled with **Tailwind CSS**, and integrated with **Firebase** for authentication and database management. This project aims to provide a smooth shopping experience, featuring responsive design, user authentication, and product management.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Firebase Configuration](#firebase-configuration)
5. [Available Scripts](#available-scripts)
6. [ESLint Configuration](#eslint-configuration)
7. [Contributing](#contributing)
8. [Setup Instructions](#setup-instructions)
9. [Creating Issues](#creating-issues)
10. [Acknowledgments](#acknowledgments)

## Features

- **Vite**: Fast build tool with HMR for seamless development.
- **React 18**: Modern component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework for responsive designs.
- **Firebase**: Integrated authentication and Firestore database.
- **ESLint**: Pre-configured for React with best practices and hooks rules.

## Project Structure

```plaintext
.
└── cvsam-canvie-e-comm/
    ├── README.md                   # Project documentation
    ├── SETUP.md                    # Project setup guide
    ├── eslint.config.js            # ESLint configuration file
    ├── index.html                  # Main HTML file
    ├── package.json                # Project metadata and dependencies
    ├── vite.config.mjs             # Vite configuration file
    └── src/                        # Source code directory
        ├── App.jsx                 # Main React component
        ├── main.jsx                # Entry point for the React application
        ├── components/             # React components (Navbar, Footer, etc.)
        ├── context/                # Context API for authentication
        ├── pages/                  # Page components (Home, ShoppingCart, etc.)
        └── services/               # Firebase configuration and services
```

## Getting Started

### Prerequisites

- **Node.js** ≥ 16.x
- **Yarn** ≥ 1.22.x (recommended)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cvsam/CANVIE-E-COMM.git
   cd cvsam-canvie-e-comm
   ```

2. Install Yarn globally if you haven't already:

   ```bash
   npm install -g yarn
   ```

3. Install project dependencies:

   ```bash
   yarn install
   ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## Firebase Configuration

1. Create a `.env` file in the root directory:

   ```env
   VITE_API_KEY=your_api_key
   VITE_AUTH_DOMAIN=your_auth_domain
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_storage_bucket
   VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   ```

2. Initialize Firebase services in `src/services/firebase.js`:

   ```javascript
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";
   import { getFirestore } from "firebase/firestore";

   const firebaseConfig = {
     apiKey: import.meta.env.VITE_API_KEY,
     authDomain: import.meta.env.VITE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   ```

## Available Scripts

- `yarn dev` → Runs the app in development mode with HMR.
- `yarn build` → Builds the app for production.
- `yarn preview` → Serves the production build locally.
- `yarn lint` → Runs ESLint for code quality checks.

## ESLint Configuration

This project uses ESLint for maintaining code quality. The configuration includes the following rules:

- React-specific linting rules (`eslint-plugin-react`)
- React hooks linting (`eslint-plugin-react-hooks`)
- Prettier integration (`eslint-plugin-prettier`)

To run the linter:

```bash
yarn lint
```

## Contributing

1. Fork the repository.
2. Create your feature branch:

   ```bash
   git checkout -b feature/awesome-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add awesome feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/awesome-feature
   ```

5. Open a pull request.

## Setup Instructions

For developers interested in creating or setting up a similar environment or project from scratch, we provide comprehensive documentation in our [Setup Guide](./SETUP.md).
The setup guide includes detailed instructions for:

- Project initialization steps
- Required dependencies installation
- Configuration file setup
- Project structure creation
- Development server instructions
- Troubleshooting common issues

## Creating Issues

If you encounter any bugs or have feature requests, please create an issue on the [GitHub Issues](https://github.com/cvsam/CANVIE-E-COMM.git/issues) page.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

[🔝 Back to top](#mini-e-commerce-application)
