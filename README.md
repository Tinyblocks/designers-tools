# Design Tools & Notion Templates

A clean, minimal website showcasing design tools and Notion templates for designers. Built with React and modular component architecture.

## Features

- **Modular Component Architecture**: Every UI element is a reusable, composable component
- **Horizontal Scrolling**: Smooth, draggable card scrolling with touch support
- **Pixel-Perfect Design**: Exact Figma specifications implemented
- **Mobile Responsive**: Fully responsive with touch-friendly interactions
- **Smooth Navigation**: Smooth scroll behavior throughout

## Tech Stack

- React 18
- Vite
- CSS Modules
- Geist Font Family

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Hero/              # Hero section with scroll button
    SectionHeader/     # Reusable section titles
    HorizontalScroll/  # Horizontal scrolling container
    ToolCard/          # Tool card component
    TemplateCard/      # Template card component
    AboutSection/      # About section with profile
    Footer/            # Footer with navigation
  data/
    tools.js           # Tools data (add new tools here)
 alphabet.js     # Templates data (add new templates here)
  assets/
    icons/             # Icons and graphics
    template-previews/ # Template preview images
```

## Adding New Content

### Adding a New Tool

Simply edit `src/data/tools.js`:

```js
{
  id: 2,
  icon: '/assets/icons/your-icon.png',
  title: 'Your Tool Name',
  description: 'Tool description...',
  link: 'https://your-link.com',
  buttonText: 'Try It'
}
```

### Adding a New Template

Edit `src/data/templates.js`:

```js
{
  id: 5,
  image: '/assets/template-previews/your-template.png',
  title: 'Your Template',
  price: '€99',
  description: 'Template description...',
  link: 'https://your-link.com',
  buttonText: 'Purchase'
}
```

## Design Tokens

All design values are defined in `src/index.css`:

- **Colors**: Black, Dark Gray, White, Primary (Purple), Gray Light
- **Typography**: Geist font family with conﬁgured sizes and weights
- **Spacing**: Consistent spacing scale (8px, 16px, 24px, etc.)
- **Layout**: Max-width 1512px, section height 982px

## Components

All components follow the DRY principle and are fully reusable:

- **Props-based**: Components accept props for ﬂexible content
- **Self-contained**: Each component has its own CSS module
- **Composable**: Components can be combined to build complex layouts

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Colin Moinard

