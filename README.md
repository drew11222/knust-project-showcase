# KNUST Student Project Showcase

A lightweight single-page web application for KNUST students to showcase projects, share qualifications, and collaborate. Built with React (CDN), Tailwind CSS, and JSON/Firebase, using a DevOps lifecycle.

## Purpose
- Allow students to create profiles (name, matric number, skills, certifications).
- Upload projects (code, images, videos, documents) with tags (e.g., "web development," "help").
- Search/filter projects by tags, keywords, or department.
- Comment on projects for feedback.
- Public viewing (no login to view), authenticated posting (matric number/email login).

## Project Structure#knust-project-showcase/
├── index.html          # Main HTML with React entry
├── src/
│   ├── components/    # React components (e.g., Header.jsx, Profile.jsx)
│   ├── pages/        # Main pages (e.g., Home.jsx, ProfilePage.jsx)
│   ├── lib/          # Utilities (auth.js, api.js, tags.js)
│   ├── styles/       # Tailwind CSS
│   └── App.jsx       # Main React component
├── data/             # Data schema
│   └── schema.json   # JSON structure for users, projects, tags
├── README.md         # This file
└── package.json      # Optional dev dependencies

## Setup Instructions
1. Clone the repository: `git clone <repo-url>`
2. Open `index.html` in a browser (uses CDNs for React, Tailwind).
3. (Later) Install Node.js for local dev tools: `npm install`

## DevOps Lifecycle
- **Plan**: Defined requirements, tools (React, Firebase, GitHub Actions), and tasks (GitHub Issues).
- **Code**: Writing React components and utilities in `src/`.
- **Build**: Bundle with Vite, automate via GitHub Actions.
- **Test**: Unit/component tests with Jest, manual testing for responsiveness.
- **Release**: Tag versions (e.g., v1.0.0), automate releases.
- **Deploy**: Deploy to Firebase Hosting (staging/production).
- **Operate**: Manage Firebase (database, storage, auth).
- **Monitor**: Track usage (Firebase Analytics), errors (Sentry).

## Next Steps
- Create GitHub Issues for tasks (e.g., "Build index.html").
- Start coding `index.html` and `App.jsx`.

## Scaling
- Switch from JSON (`data/schema.json`) to Firebase for production.
- Add features like notifications or advanced search.
