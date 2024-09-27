# Pinkie Promise?

![Pinkie Promise Logo](./public/pinkie-promise.svg)

<!-- TOC --->

- [Pinkie Promise?](#pinkie-promise)
  - [🎀 Overview](#-overview)
    - [Features](#features)
  - [🎀 Technologies Used](#-technologies-used)
  - [🎀 Prerequisites](#-prerequisites)
  - [🎀 Installation](#-installation)
  - [🎀 Available Scripts](#-available-scripts)
  - [🎀 Usage](#-usage)
  - [🎀 Code Structure](#-code-structure)
  - [🎀 Customisation](#-customisation)
  - [🎀 Dependencies](#-dependencies)
  - [🎀 Contributing](#-contributing)
  - [🎀 Acknowledgements](#-acknowledgements)

## 🎀 Overview

Welcome to the **Pinkie Promise** app! This application allows users to make virtual pinkie-promises, using a drag-and-drop mechanic. With cute animations and a vibrant, pink design, it’s perfect for binding agreements with friends, family or even yourself!

### Features

- **Interactive Drag-and-Drop**: Drag your pinkie to the left to complete your promise!
- **Dynamic Form**: Input names and promises with an intuitive step-by-step process.
- **Celebratory Confetti**: Enjoy a burst of confetti when a promise is made!
- **Customisable Styles**: Built with Tailwind CSS for a clean and modern UI.

## 🎀 Technologies Used

- **React**: For building the user interface.
- **Framer Motion**: For animations and smooth transitions.
- **Next.js**: For server-side rendering and static site generation.
- **Tailwind CSS**: For styling components with utility-first CSS.
- **react-hot-toast**: For toast notifications.

## 🎀 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version 14.x or later).

## 🎀 Installation

To get started with the Pinkie Promise app, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/jediahjireh/pinkie-promise.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd pinkie-promise
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and go to the [default localhost](http://localhost:3000) to see the app in action!

## 🎀 Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the project files for code quality.

## 🎀 Usage

1. **Step 1**: Enter the names of the two promise-makers (or just yourself).
2. **Step 2**: Describe the promise you're making.
3. **Step 3**: Confirm the promise by dragging the right pinkie to the left pinkie!
4. Upon successful promise completion, enjoy a celebratory confetti animation and a toast notification confirming your Pinkie Promise!

## 🎀 Code Structure

The main component of the app is `PinkiePromise.tsx`, which handles the entire promise-making process. Below is a brief overview of its main features:

- **State Management**: Utilises `useState` to manage user input and the promise status.
- **Animations**: Utilises `framer-motion` for the pinkie promise hand animations.
- **Drag-and-Drop Functionality**: Includes event handlers for drag start, drag over and drop actions.
- **Screenshot Capture**: Uses `html2canvas` to take and download a screenshot of the promise once completed.

## 🎀 Customisation

Feel free to customise the app by modifying:

- **Styles**: Change the colours and styles in the Tailwind configuration.
- **Animations**: Adjust the motion settings in the `framer-motion` components for different effects.

## 🎀 Dependencies

Installed packages:

```bash
npm install framer-motion react-hot-toast tailwindcss react-icons html2canvas
```

## 🎀 Contributing

Contributions are welcome! If you have suggestions or features you'd like to see, please open an issue or submit a pull request.

## 🎀 Acknowledgements

Don't forget: **A Pinkie Promise is _forever_!**
