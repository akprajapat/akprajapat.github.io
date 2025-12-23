import { Project } from '../../lib/types';

export const projects: Project[] = [
    {
    name: "Skribble",
    duration: "Oct 2025 - Nov 2025 ", // add actual duration if available, e.g., "Jan 2024 – Mar 2024"
    tech_stack: [
      "Node.js",
      "Express",
      "Socket.IO",
      "React",
      "Vite",
      "CSS Modules",
      "Perplexity AI API"
    ],
    details: [
      "Real-time multiplayer drawing and guessing game built with Node.js, Socket.IO, and React",
      "Supports public and private rooms, real-time canvas drawing, and in-game chat system",
      "Implements score tracking, round timer, and AI-powered word generation using Perplexity AI",
      "Backend developed with Express and Socket.IO, handling room management, gameplay, and event broadcasting",
      "Frontend built with React and Vite, featuring responsive UI, live drawing updates, and player interaction components",
      "Includes game services, constants, event handlers, and modularized architecture for scalable gameplay",
      "MIT licensed open-source project with full test coverage and structured contribution guidelines"
    ],
    sourceCode: "https://github.com/akprajapat/SKRIBBLE",
    liveUrl: "https://scribble-fun.vercel.app/",
    liveName: "Play-Now",
  },
  {
    name: "Discussion Forum",
    duration: "Nov 2025 – Dec 2025",
    tech_stack: ["Golang", "Gin", "MongoDB", "React", "Node.js"],
    details: [
      "Full-stack discussion platform with authentication, Q&A, comments, and voting.",
      "Backend built with Golang (Gin) and MongoDB, featuring JWT-based authentication and RESTful APIs.",
      "Frontend built with React, supporting responsive UI and keyword-based search.",
      "Implemented user registration, login, question/answer posting, commenting, and upvote/downvote functionality.",
      "Configured with proxy for API routing and environment-based MongoDB setup."
    ],
    sourceCode: "https://github.com/akprajapat/discussion-forum",
    liveUrl: "http://localhost:3000", // replace with deployed link if applicable
    liveName: "View Live"
  },
  {
    name: "Secure Personal Cloud",
    duration: "Oct 2025 – Nov 2025", // adjust if actual duration differs
    tech_stack: ["Django", "Django REST Framework", "Bootstrap", "Python", "OpenSSL", "CryptoJS", "JWT", "Linux CLI"],
    details: [
      "Full-stack encrypted personal cloud storage system with web and Linux clients.",
      "Web server built using Django and Django REST Framework for secure user registration, authentication, and encrypted file storage.",
      "Client-side AES and DES encryption implemented using OpenSSL and CryptoJS before upload; keys managed locally by users.",
      "Linux command-line client enables login, upload/download, file viewing, and bidirectional sync with lock-based concurrency control.",
      "Web client supports registration, encryption scheme selection, file browsing, and media viewing in the browser.",
      "JWT-based authentication for secure API communication between clients and server.",
      "Database schema stores encrypted files (Base64) along with metadata — filename, type, md5sum, and owner foreign key."
    ],
    sourceCode: "https://github.com/akprajapat/secure-cloud", // replace with your repo URL if different
    liveUrl: "" ,// optional, leave empty if not hosted
    liveName: ""
  },


];
