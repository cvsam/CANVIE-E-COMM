# Project Setup Guide

This document provides step-by-step instructions for setting up the development environment for this project.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Initialization](#project-initialization)
- [Installing Dependencies](#installing-dependencies)
- [Configuration](#configuration)
- [Creating Project Structure](#creating-project-structure)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or higher)
- Yarn package manager

## Project Initialization

Initialize a new Yarn project with default settings:

```bash
yarn init -y
```

## Installing Dependencies

### Development Dependencies

Add Vite and related development dependencies:

```bash
# Add Vite for building the project
yarn add vite --dev

# Add the Vite React plugin
yarn add @vitejs/plugin-react --dev

# Add ESLint for code linting
yarn add eslint --dev
```

### Production Dependencies

Add React and ReactDOM:

```bash
yarn add react react-dom
```

## Configuration

### Vite Configuration

Create a Vite configuration file:

```bash
# Create a Vite configuration file
touch vite.config.js

# Configure Vite to use the React plugin
cat > vite.config.js << EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
plugins: [react()],
});
EOL
```

### Eslint Configuration

Initialize ESLint with your preferred settings:

```bash
yarn run eslint --init
```

Follow the prompts to configure ESLint according to your project's needs.

### Package.json Scripts

Update your package.json to include the following scripts:

```bash
# Using jq to update package.json (if available)
# If jq is not available, manually edit your package.json file

# Manually add the following to the "scripts" section:
# "dev": "vite"
# "build": "vite build"
# "serve": "vite preview"
```

Your scripts section should look like this:

```json
"scripts": {
"dev": "vite",
"build": "vite build",
"serve": "vite preview"
}
```

### Git Configuration

Create a .gitignore file to exclude unnecessary files:

```bash
touch .gitignore

# Add common Node.js entries to .gitignore
cat > .gitignore << EOL
node_modules/
dist/
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOL
```

## Creating Project Structure

### HTML Entry Point

Create the HTML entry file:

```bash
# Create an HTML file for the project
touch ./index.html

# Add basic HTML structure
cat > ./index.html << EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite + React</title>
</head>
<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>
</html>
EOL
```

### React Components

Create the source directory and component files:

```bash
# Create the source directory
mkdir -p ./src/styles

# Create CSS file
touch ./src/styles/index.css

# Add basic styling
cat > ./src/styles/index.css << EOL
body {
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}

code {
font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
EOL

# Create the main entry file
touch ./src/main.jsx

# Set up React rendering
cat > ./src/main.jsx << EOL
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>,
)
EOL

# Create the main App component
touch ./src/App.jsx

# Define the App component
cat > ./src/App.jsx << EOL
import React from 'react'

function App() {
return (
    <div>
    <h1>Hello World</h1>
    </div>
)
}

export default App
EOL
```

### Running the Application

Start the development server:

```bash
yarn dev
```

This will start the Vite development server, typically at `http://localhost:5173`.

## Troubleshooting

### Missing Styles

If you encounter issues with missing styles, ensure the `./src/styles/index.css` file exists and is properly imported in `main.jsx`.

### ESLint Configuration Issues

If ESLint is not working properly, try running:

```bash
yarn add eslint-plugin-react --dev
```

### Vite Plugin Issues

If you encounter issues related to the Vite React plugin, ensure you have properly configured vite.config.js and installed the required dependencies.

[Back to Top](#project-setup-guide)
