# AppEasy Job Tracker

Mini Job Tracker - Full-stack Next.js app for AppEasy Software Engineering Intern Assessment

## 🎯 Project Overview

A modern, responsive job tracking application built with Next.js 15, TypeScript, and TailwindCSS. This project demonstrates full-stack development skills including project setup, UI/UX design, and scalable architecture.

## ✨ Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, TailwindCSS
- **AppEasy Branding**: Custom theme with brand colors (Mint Green #98f72a, Charcoal #121212)
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Code Quality**: ESLint, Prettier, and strict TypeScript configuration
- **Developer Experience**: Hot reload, proper folder structure, and utility functions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/MikeTemi/appeasy-job-tracker-assessment.git
cd appeasy-job-tracker-assessment
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with AppEasy theme
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Homepage
│   └── api/              # API routes (future sprints)
├── components/           # Reusable components
│   └── ui/              # UI components
├── lib/                 # Utility functions
│   └── utils.ts         # Common utilities
├── types/               # TypeScript type definitions
└── data/                # Static data and constants
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run prettier` - Check code formatting
- `npm run prettier:fix` - Fix code formatting
- `npm run format` - Run both Prettier and ESLint fixes

## 🎨 Design System

### Brand Colors

- **Mint Green**: `#98f72a` (Primary accent)
- **Charcoal**: `#121212` (Text and headers)
- **Light Gray**: `#FFFFFF` (Backgrounds)

### Typography

- **Primary Font**: System UI stack for optimal performance
- **Responsive Scale**: Mobile-first design with breakpoints

## 🔧 Development

### Code Quality

- **TypeScript**: Strict mode enabled with additional safety checks
- **ESLint**: Next.js recommended configuration
- **Prettier**: Consistent code formatting
- **Path Aliases**: Clean imports using `@/` prefix

### Environment Variables

See `.env.local.example` for available configuration options.

## 📋 Sprint Progress

### Sprint 1: Project Foundation & Setup ✅

- [x] Next.js 15 project initialization
- [x] TypeScript configuration with strict mode
- [x] TailwindCSS setup with AppEasy brand colors
- [x] ESLint and Prettier configuration
- [x] Organized project structure
- [x] Base layout with responsive design
- [x] Environment setup and documentation

### Future Sprints

- [ ] Sprint 2: Job Application Management
- [ ] Sprint 3: Data Persistence & API
- [ ] Sprint 4: Advanced Features & Testing

## 🧪 Testing

Testing infrastructure will be added in future sprints following the project's minimal change philosophy.

## 📝 Contributing

This is an assessment project. For questions or suggestions, please create an issue.

## 📄 License

This project is created for the AppEasy Software Engineering Intern Assessment.

---

Built with ❤️ using Next.js, TypeScript, and TailwindCSS
