# DYPCET CSE Department — React + Vite + MUI

Website for the Department of Computer Science & Engineering, D. Y. Patil College of
Engineering and Technology, Kolhapur. Built with React 19, Vite, and Material UI (MUI) v9.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## Project structure

```
src/
  theme.js             MUI theme: navy/gold palette + Source Serif 4 / Inter typography
  data.js              All editable content (stats, programmes, faculty, notices, contact...)
  App.jsx              Assembles every section
  main.jsx             ThemeProvider + CssBaseline setup
  components/
    Header.jsx         AppBar, Toolbar, Drawer (mobile nav)
    Hero.jsx           Box, Grid, Typography, Button
    About.jsx          Grid, Divider
    Programs.jsx       Grid, Card, CardContent
    Research.jsx       Grid, Paper
    Faculty.jsx         Card, Avatar, Grid
    Facilities.jsx     Grid, Divider rows
    Notices.jsx        Grid, Divider, Card
    Contact.jsx        TextField, Button, Alert
    Footer.jsx          Stack, Link, Divider
```

## MUI components used

AppBar, Toolbar, Drawer, Container, Grid, Box, Stack, Typography, Card, CardContent,
Paper, Avatar, Divider, Button, IconButton, TextField, Alert, Link, List,
ListItemButton, ListItemText, plus `ThemeProvider` / `createTheme` / `CssBaseline` for
theming. All custom colors (`navy`, `gold`, etc.) are wired into the MUI theme in
`theme.js` — components use `sx` props and theme tokens rather than separate CSS files.

## Before you publish

- **`src/data.js`** — replace placeholder faculty names, stats, notices, placement
  figures, and contact details with real department data.
- **Faculty photos** — faculty cards currently show initials in an MUI `Avatar`; pass
  an `src` prop to `Avatar` in `Faculty.jsx` to use real photos instead.
- **Contact form** (`Contact.jsx`) — currently a demo that doesn't send anywhere. Wire
  it up to a backend endpoint or a form service (e.g. Formspree) to actually receive
  messages.
- **Theme** (`src/theme.js`) — adjust `tokens` here to retune the palette globally.
- **Favicon** — add your own icon in `public/` and reference it from `index.html`.

## Deploying

The build output in `dist/` is static and can be hosted anywhere (Netlify, Vercel,
GitHub Pages, your college's own web server, etc.).
