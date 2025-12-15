# Nrupal Dave Portfolio Website

## Overview
A personal portfolio website for Nrupal Dave, a Web Engineer with 3.5+ years of experience. Built with React, HTML, CSS, and JavaScript featuring a modern, responsive design.

## Project Structure
```
/
├── index.html                 # Main HTML entry point
├── vite.config.js            # Vite configuration
├── package.json              # Dependencies and scripts
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx               # Main App component
│   ├── App.css               # Component-specific styles
│   ├── index.css             # Global styles and CSS variables
│   └── components/
│       ├── Header.jsx        # Navigation bar with mobile hamburger menu
│       ├── Hero.jsx          # Hero section with intro and code block visual
│       ├── About.jsx         # About me section with education
│       ├── Skills.jsx        # Skills section with progress bars
│       ├── Projects.jsx      # Projects section with cards
│       ├── Contact.jsx       # Contact information
│       └── Footer.jsx        # Footer with social links
└── attached_assets/          # Resume and attached files
```

## Features
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **React Functional Components**: All components use hooks and modern React patterns
- **CSS Variables**: Easy customization of colors, spacing, and typography
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Interactive Elements**: Hover effects on buttons, cards, and links

## Sections
1. **Header/Navbar**: Fixed navigation with name/logo and links
2. **Hero**: Introduction with name, role, and CTA buttons
3. **About Me**: Background, experience highlights, and education
4. **Skills**: Categorized skills with visual progress bars
5. **Projects**: Project cards with descriptions and technology tags
6. **Contact**: Email, GitHub, LinkedIn, and phone information
7. **Footer**: Copyright and social links

## Development
- **Run locally**: `npm run dev`
- **Build**: `npm run build`
- **Preview build**: `npm run preview`

## Technologies Used
- React 19
- Vite 7
- CSS3 (Custom Properties, Flexbox, Grid)
- Google Fonts (Inter)

## Customization
- Colors and theme can be modified in `src/index.css` via CSS variables
- Content can be updated in individual component files
- Skills, projects, and contact info are data-driven for easy updates
