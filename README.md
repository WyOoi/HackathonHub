# 🚀 Hackathon Hub - Remix Edition

A modern, responsive web application showcasing the world's top hackathon platforms. Discover where innovators gather to build the future!

## 🏆 Featured Hackathon Platforms

- **HackerEarth** - Enterprise hackathon platform with 7.6M+ developers
- **Devpost** - Home of the world's best online and in-person hackathons
- **DoraHacks** - Global hackathon organizer with blockchain focus
- **Superteam Earn** - Find high-paying crypto gigs and bounties
- **HackQuest** - Manage projects and track your hackathon journey

## 💻 Technologies Used

- **Remix** - Full-stack web framework
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **CSS3** - Modern features like CSS Variables, Flexbox, and Grid
- **Font Awesome** - Beautiful icons

## ✨ Features

- **Multi-Page Navigation** - Separate routes for Home, About, Platforms, and FAQ sections
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **Modern UI** - Clean and visually appealing interface with smooth animations
- **Platform Showcase** - Detailed information about leading hackathon platforms
- **Interactive Elements** - Dynamic navigation, FAQ accordions, and platform cards
- **Mobile-Friendly Navigation** - Hamburger menu for mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js version 18 or later

### Installation

1. Clone this repository or download the files
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser to `http://localhost:3000`

### Quick Start

For Windows users, you can simply run the `start.bat` file to install dependencies and start the development server.

### Troubleshooting

If you encounter issues with ESM/CommonJS module compatibility, check:

1. In `package.json`, ensure that `"type": "commonjs"` is set
2. Verify that `remix.config.js` includes `serverModuleFormat: "cjs"`
3. For any import issues with Response objects, consider using the web standard Response constructor with type assertions as needed

## 📁 Project Structure

```
app/
├── components/         # React components
│   ├── About.tsx
│   ├── Faq.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Platforms.tsx
├── routes/             # Remix route components
│   ├── _index.tsx      # Homepage route
│   ├── about.tsx       # About page route
│   ├── platforms.tsx   # Platforms page route
│   └── faq.tsx         # FAQ page route
├── styles/             # CSS styles
│   └── global.css      # Global styles
├── entry.client.tsx    # Client entry point
├── entry.server.tsx    # Server entry point
└── root.tsx           # App root component
```

## 🚀 Deployment

To create a production build:

```
npm run build
```

Then serve the application:

```
npm start
```

## 📜 License

This project is available for personal and commercial use. Feel free to modify and customize it for your own needs.

## 🙏 Acknowledgements

- Background images from Unsplash
- Icons from Font Awesome
- Platform information sourced from official websites of:
  - HackerEarth
  - Devpost
  - DoraHacks
  - Superteam Earn
  - HackQuest 