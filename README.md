# GDG Chapter Landing Page

A modern, accessible, and performant landing page for Google Developer Groups (GDG) chapters built with React, Firebase, and Tailwind CSS.

## 🌟 Features

- **Modern Tech Stack**: React 19, Vite, Tailwind CSS, Framer Motion
- **Firebase Integration**: Authentication, Firestore, Hosting
- **Internationalization**: Support for English, Hindi, Kannada, and Marathi
- **Accessibility**: WCAG 2.1 AA compliant with screen reader support
- **Performance**: Optimized with code splitting and lazy loading
- **PWA Ready**: Service worker and offline functionality
- **Responsive Design**: Mobile-first approach with beautiful animations

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 
- npm 10+
- Firebase CLI

### Installation

1. **Clone the repository**
git clone https://github.com/your-org/gdg-landing.git
cd gdg-landing

text

2. **Install dependencies**
npm install

text

3. **Set up Firebase**
firebase login
firebase init

text

4. **Configure environment variables**
cp .env.example .env

Edit .env with your Firebase config
text

5. **Start development server**
npm run dev

text

### Development Commands

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run lint # Run ESLint
npm run lint:fix # Fix ESLint issues
npm run deploy # Deploy to Firebase

text

## 🏗️ Project Structure

src/
├── components/ # React components
│ ├── About.jsx # About section
│ ├── Events.jsx # Events listing
│ ├── EventCard.jsx # Individual event card
│ ├── Footer.jsx # Site footer
│ ├── Hero.jsx # Hero section
│ ├── Highlights.jsx # Chapter statistics
│ ├── Navbar.jsx # Navigation
│ └── Projects.jsx # Projects showcase
├── styles/
│ └── global.css # Global styles and utilities
├── App.jsx # Main App component
├── firebase.ts # Firebase configuration
├── i18n.ts # Internationalization setup
└── main.jsx # Application entry point

public/
├── locales/ # Translation files
│ ├── en/ # English translations
│ ├── hi/ # Hindi translations
│ ├── kn/ # Kannada translations
│ └── mr/ # Marathi translations
├── icons/ # PWA icons
└── manifest.json # PWA manifest

text

## 🔧 Configuration

### Firebase Collections

The app expects the following Firestore collections:

#### Events
{
title: string,
description: string,
start: timestamp,
end: timestamp,
location: string,
online: boolean,
coverImage: string,
tags: string[],
status: 'upcoming' | 'live' | 'past',
featured: boolean,
rsvpLink?: string,
attendeeCount?: number
}

text

#### Projects
{
name: string,
description: string,
tech: string[],
contributors: string[],
repoUrl: string,
demoUrl?: string,
image?: string,
featured: boolean,
stars?: number,
language?: string
}

text

### Environment Variables

Required environment variables:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

text

## 🌍 Internationalization

The app supports multiple languages with automatic detection:

- **English (en)** - Default
- **Hindi (hi)** - हिन्दी
- **Kannada (kn)** - ಕನ್ನಡ  
- **Marathi (mr)** - मराठी

Translation files are located in `public/locales/{language}/{namespace}.json`.

## 🎨 Customization

### Branding

Update the Google brand colors in `tailwind.config.js`:

colors: {
google: {
blue: '#4285F4',
red: '#EA4335',
yellow: '#FBBC04',
green: '#34A853',
gray: '#3C4043',
}
}

text

### Content

1. **Update translations** in `public/locales/`
2. **Modify components** in `src/components/`
3. **Customize styles** in `src/styles/global.css`

## 📱 PWA Features

- **Offline Support**: Service worker caches key resources
- **Install Prompt**: Users can install as a native app
- **Push Notifications**: Firebase Cloud Messaging integration
- **Background Sync**: Offline RSVP synchronization

## 🚀 Deployment

### Firebase Hosting

npm run build
firebase deploy

text

### Other Platforms

The built files in `dist/` can be deployed to:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder  
- **Cloudflare Pages**: Connect your repository

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Developer Groups** for the community and brand guidelines
- **React Team** for the amazing framework
- **Firebase Team** for the excellent backend services
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for beautiful animations

## 📧 Support

For support, email contact@gdgchapter.com or create an issue on GitHub.

---

Built with ❤️ by the GDG Chapter team