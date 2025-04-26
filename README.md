# weframetech-task
This project has code to the provided figma design

access to web : https://weframetech-task-ajwe.vercel.app/


# Franchise Management Dashboard

A modern, feature-rich dashboard built with Next.js 13, Tailwind CSS, and shadcn/ui for managing franchise operations and monitoring business metrics.

## Features

### 1. Real-time Analytics
- Account progress tracking with visual indicators
- Financial wellbeing metrics and targets
- Franchisee onboarding status
- Sales growth insights
- Prospect lead management

### 2. Interactive Components
- AI-powered chat assistant for instant support
- Dynamic step tracker for onboarding process
- Real-time notifications system
- User authentication and profile management

### 3. Responsive Design
- Fully responsive layout that works on all devices
- Intuitive sidebar navigation
- Clean and modern UI with consistent styling
- Dark mode support

## Tech Stack

- **Framework**: Next.js 13
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form
- **Validation**: Zod
- **Type Safety**: TypeScript

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── dashboard/
│   │   ├── AccountProgress.tsx
│   │   ├── ChatAssistant.tsx
│   │   ├── FinancialWellbeing.tsx
│   │   ├── FranchiseesOnboard.tsx
│   │   ├── KeyInsights.tsx
│   │   ├── PendingQuestions.tsx
│   │   ├── ProspectLeads.tsx
│   │   └── StepsTracker.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── ui/
│       └── [shadcn/ui components]
├── lib/
│   ├── types/
│   │   └── dashboard.ts
│   └── utils.ts
└── public/
    └── avatar-placeholder.jpg
```

## Getting Started

1. **Clone the repository**

```bash
git clone <repository-url>
cd franchise-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

## Component Documentation

### Dashboard Components

#### AccountProgress
- Displays circular progress indicator
- Shows completion percentage
- Animated progress updates

#### FinancialWellbeing
- Tracks financial targets and current status
- Shows growth percentage
- Displays total franchisee count

#### FranchiseesOnboard
- Lists active franchisees with avatars
- Shows onboarding stage distribution
- Displays growth metrics

#### ChatAssistant
- AI-powered support interface
- Real-time message handling
- Minimizable chat window

### Layout Components

#### Sidebar
- Responsive navigation menu
- Active state indicators
- Collapsible on mobile

#### Header
- User profile access
- Notification system
- Quick actions

## Customization

### Theme Configuration
The project uses CSS variables for theming, defined in `globals.css`. Customize colors, spacing, and other design tokens by modifying these variables.

### Adding New Components
1. Create component in appropriate directory
2. Import required shadcn/ui components
3. Add TypeScript interfaces if needed
4. Update relevant parent components

## Performance Optimization

- Next.js static site generation
- Optimized image loading
- Component-level code splitting
- Efficient state management

## Security Features

- Type-safe API calls
- Protected routes
- Input validation
- Secure authentication flow

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request
