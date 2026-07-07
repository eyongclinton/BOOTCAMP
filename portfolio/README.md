# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Smooth Animations**: Framer Motion animations for a polished user experience
- **Modern UI**: Clean, professional design with gradient accents and glass effects
- **Fully Customizable**: Easy to personalize with your own information and projects

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
portfolio/
├── components/          # Reusable components
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   └── ContactSection.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/             # Static files
│   ├── images/         # Project images
│   └── files/          # Downloadable files (resume)
├── styles/             # Global styles
│   └── globals.css
├── utils/              # Utility functions
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Update Personal Information

1. **Name and Branding**: Update the name in `components/Navbar.tsx` and `components/Footer.tsx`
2. **Profile Image**: Replace `/public/images/profile.jpg` with your photo
3. **About Section**: Edit the content in `components/AboutSection.tsx`
4. **Skills**: Update the skills list in `components/SkillsSection.tsx`
5. **Projects**: Add/remove projects in `components/ProjectsSection.tsx`
6. **Contact Info**: Update contact details in `components/ContactSection.tsx`

### Add Projects

In `components/ProjectsSection.tsx`, add new projects to the `projects` array:

```typescript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  image: '/images/projects/your-project.jpg',
  githubUrl: 'https://github.com/yourusername/your-repo',
  liveUrl: 'https://your-project-url.com',
  featured: true, // Set to true to feature on main grid
}
```

### Update Resume

Replace `/public/files/resume.pdf` with your actual resume file.

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and import your repository
3. Vercel will automatically detect it's a Next.js project
4. Deploy!

### Other Platforms

- Netlify
- AWS Amplify
- Heroku
- Any platform that supports Next.js

## Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Tips

- Use high-quality images for your projects
- Keep descriptions concise but informative
- Update your skills regularly
- Test on multiple devices before deployment
- Use the dark/light mode toggle to ensure both themes look good

## License

MIT License - Feel free to use this template for your own portfolio!

---

Built with ❤️ using Next.js, React, and Tailwind CSS
