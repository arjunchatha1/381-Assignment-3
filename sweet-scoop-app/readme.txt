Sweet Scoop Ice Cream Shop - Dependencies and Installation

PROJECT SETUP INSTRUCTIONS:

1. Navigate to the project directory:
   cd sweet-scoop-app

2. Install project dependencies:
   npm install

REQUIRED DEPENDENCIES:

The following packages are installed with npm install:

Core React Packages:
- react@^19.2.4
- react-dom@^19.2.4
- react-router-dom@^7.13.2
- react-scripts@5.0.1

Testing Libraries:
- @testing-library/react@^16.3.2
- @testing-library/jest-dom@^6.9.1
- @testing-library/dom@^10.4.1
- @testing-library/user-event@^13.5.0

Utilities:
- web-vitals@^2.1.4

RUNNING THE APPLICATION:

To start the development server:
npm start

To build the application for production:
npm build

To run tests:
npm test

INSTALLATION COMMAND SUMMARY:

npm install react-router-dom

All other dependencies are installed automatically with npm install.

PROJECT STRUCTURE:

src/
  ├── components/
  ├── data/
  │   ├── flavors.js (10 ice cream flavors)
  │   └── reviews.js (4 customer reviews)
  ├── App.js (main routing component)
  ├── Homepage.js (header, main section, footer)
  ├── FlavorsPage.js (flavor catalog and order management)
  ├── LoginPage.js (login form with API validation)
  ├── index.js (entry point)
  ├── style.css (global styles)
  └── other configuration files

public/
  ├── index.html
  ├── images/
  │   ├── vanilla.jpg
  │   ├── chocolate.jpg
  │   ├── strawberry.jpg
  │   ├── mint.jpg
  │   └── logo.webp

FEATURES IMPLEMENTED:

- Homepage with featured flavors and customer reviews
- Flavors page with hover effects and flavor descriptions
- Shopping cart with local storage persistence
- Login form with API validation (jsonplaceholder.typicode.com)
- Responsive design with Sweet Scoop themed styling
- React Router navigation between pages
