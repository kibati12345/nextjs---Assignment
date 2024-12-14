This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.




# Assignment 3 - Web Development Project

## Overview
This project was part of Assignment 3, focusing on creating a web application using modern web development practices. The project involved developing a multi-page web application with serverless functionality, integrating both frontend and backend features, and ensuring user-friendly design.

---

## Features Implemented

### 1. **Frontend Pages**
#### **Home Page**
- Designed an attractive and responsive homepage.
- Used a combination of HTML, CSS, and Bootstrap to create the layout.
- Included a welcoming message and call-to-action buttons ("Shop Now" and "Learn More").

#### **About Page**
- Created an About Us page that provides details about the web shop.
- Styled the page using Bootstrap components and custom CSS.
- Added a footer with attribution and copyright details.

#### **Contact Page**
- Developed a functional contact form where users can input their name, email, and message.
- The form has validation to ensure required fields are filled.
- Added a serverless API to process form submissions (see Serverless Functionality).

#### **Feedback Page**
- Created a Feedback page for users to submit their thoughts about the application.
- The form includes fields for name, email, and feedback message.
- Integrated a serverless API endpoint (`/api/feedback`) to handle feedback submissions.
- Added success and error notifications for better user experience.

#### **Product Page**
- Initially included as part of the navigation but later removed to focus on the contact page.
- Features included displaying product information fetched via an API.

---

### 2. **Backend Functionality**
#### **Serverless Function: Contact Page**
- Implemented a serverless API endpoint (`/api/sendContactMessage`) to handle form submissions.
- Configured the endpoint to:
  - Accept `POST` requests.
  - Parse JSON data sent from the frontend.
  - Respond with success or failure messages.

#### **Serverless Function: Feedback Page**
- Implemented a serverless API endpoint (`/api/feedback`) to process feedback submissions.
- Configured the endpoint to:
  - Accept `POST` requests.
  - Parse JSON data submitted by the Feedback page.
  - Respond with appropriate status messages.

---

### 3. **Styling and Assets**
- Integrated **Bootstrap** for consistent and responsive UI design.
- Organized assets like custom fonts and animations in the `/assets` directory.
- Updated color schemes and layouts based on assignment requirements.

---

### 4. **Navigation and Routing**
- Implemented a reusable navigation bar using Bootstrap.
- Added navigation links for `Home`, `About`, `Contact`, and `Feedback` pages.
- Ensured seamless routing between pages using Next.js's routing system.

---

### 5. **Configuration and Optimization**
- Set up a `tsconfig.json` file for path aliasing and better project structure.
- Used a `next.config.js` file to manage build settings.
- Included necessary dependencies in the `package.json` file.

---

## Technologies Used

### **Frontend**
- HTML, CSS, JavaScript
- Bootstrap
- React (via Next.js)

### **Backend**
- Node.js (Serverless Functions in Next.js)

### **Tools and Libraries**
- **Dependencies**: Bootstrap, React, Next.js, Node.js
- **Dev Tools**: GitHub for version control, Visual Studio Code for development

---

## Challenges Faced
- **Serverless Functionality**: Understanding how to connect the backend and frontend using serverless APIs.
- **Routing and Navigation**: Implementing smooth navigation between pages with Next.js routing.
- **Styling**: Matching the design requirements while maintaining a responsive layout.

---

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the project in your browser at `http://localhost:3000`.

---

## Folder Structure
```
project-folder
├── pages
│   ├── index.js      # Home Page
│   ├── about.js      # About Page
│   ├── contact.js    # Contact Page
│   ├── feedback.js   # Feedback Page
│   └── api
│       ├── sendContactMessage.js # Serverless API for Contact Page
│       └── feedback.js           # Serverless API for Feedback Page
├── styles
│   ├── globals.css   # Global styles
├── components
│   ├── Header.js     # Navigation Bar
│   ├── Footer.js     # Footer
└── public
    └── assets        # Fonts and other assets
```

---

## Conclusion
This assignment provided a comprehensive understanding of modern web development workflows. It involved integrating frontend and backend components, working with serverless functions, and styling a responsive UI. The completed application fulfills all the assignment requirements and showcases key development skills.

