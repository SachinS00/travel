Vigovia - Travel Itinerary Planner

This is a React-based web application for creating and previewing travel itineraries. The application fetches itinerary data from a backend server and displays it in a user-friendly format, with an option to generate a PDF of the itinerary.

Features

    Dynamic Itinerary Display: Fetches and displays travel itinerary data from a backend API.

    PDF Generation: Generates a downloadable PDF of the itinerary.

    Component-Based Architecture: Built with reusable React components for different sections of the itinerary.

    Styling with Tailwind CSS: Utilizes Tailwind CSS for a modern and responsive design.

Prerequisites

Before you begin, ensure you have the following installed on your system:

    Node.js (version 14 or higher)

    npm (Node Package Manager)

Getting Started

1. Clone the repository

Bash

git clone <repository-url>
cd travel-24d2d3b01f5792745b25f6853d04d2a1e783d823

2. Set up the Frontend

In the project's root directory, install the necessary dependencies:
Bash

npm install

3. Set up the Backend

Navigate to the backend directory and install its dependencies:
Bash

cd backend
npm install

4. Running the Application

You will need to run both the frontend and backend servers simultaneously in separate terminals.

    Terminal 1: Start the Backend Server

    Navigate to the backend directory and run:
    Bash

npm start

The backend server will start on http://localhost:3001.

Terminal 2: Start the Frontend Development Server

In the project's root directory, run:
Bash

    npm run dev

    The frontend development server will start on http://localhost:5173. Open this URL in your browser to view the application.

Project Structure

    public/: Contains static assets like index.html, vite.svg and tailwind-pdf.css.

    src/: Contains the main source code for the React application.

        assets/: Images and other assets used in the application.

        components/: Reusable React components.

            common/: Common components like Header and Footer.

            pdf/: Components used for generating the PDF.

        pages/: Main pages of the application.

        utils/: Utility functions, such as the PDF generator.

        App.jsx: The main application component.

        main.jsx: The entry point of the React application.

    backend/: Contains the backend server code.

        data.json: The data source for the itinerary.

        server.js: The Express server.

    tailwind.config.js: Configuration file for Tailwind CSS.

    vite.config.js: Configuration file for Vite.

Available Scripts

Frontend (/)

    npm run dev: Starts the frontend development server.

    npm run build: Builds the application for production.

    npm run lint: Lints the source code using ESLint.

    npm run preview: Serves the production build locally for preview.

Backend (/backend)

    npm start: Starts the backend server.