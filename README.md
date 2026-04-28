# 16th e-ICON World Contest — Web App Portfolio

A static portfolio website showcasing student-built web applications for SDG 3: Health and Well-being.

## Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later

### Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Adding Team Data

All project data lives in **`src/data/projects.js`**. Open that file and follow the instructions in the comments at the top.

### Step-by-step

1. Open `src/data/projects.js`
2. Copy one existing object (from `{` to the closing `},`)
3. Paste it at the end of the array, before the closing `]`
4. Fill in every field — use `""` for anything you don't have yet
5. Increment the `id` by 1 from the last entry
6. Save the file

### Data structure reference

| Field | Type | Description |
|---|---|---|
| `id` | number | Unique ID — increment from last |
| `teamName` | string | Official team name |
| `country` | string | Country name (used for Country filter) |
| `school` | string | School or institution name |
| `projectTitle` | string | Title of the web application |
| `theme` | string | One of the theme values below |
| `problem` | string | SDG 3 problem addressed (1–2 sentences) |
| `solution` | string | How the app solves it (1–2 sentences) |
| `description` | string | Short card description (≤ 120 chars) |
| `keyFeatures` | string[] | Array of feature strings (3–5 items) |
| `techStack` | string[] | Array of technology names |
| `members` | string[] | Array of student names |
| `teacher` | string | Supervising teacher name |
| `deployUrl` | string | Live URL — use `""` if not deployed yet |
| `githubUrl` | string | GitHub repo URL — use `""` if private |
| `thumbnail` | string | Path like `/thumbnails/team-name.png` — use `""` for placeholder |

### Valid theme values

```
"Mental Health" | "Fitness" | "Nutrition" | "Elderly Care" |
"Disability" | "Maternal Health" | "Disease Prevention" | "Other"
```

### Adding thumbnails

1. Save the image as a `.png` or `.jpg` file
2. Place it in the `public/thumbnails/` folder (create the folder if it doesn't exist)
3. Set `thumbnail: "/thumbnails/your-file.png"` in the project entry

### Importing from Excel / Google Sheets

Copy each team's row and paste the values into the corresponding fields. Recommended column order in your spreadsheet:

```
ID | Team Name | Country | School | Project Title | Theme | Problem | Solution | Description | Key Features (;-separated) | Tech Stack (;-separated) | Members (;-separated) | Teacher | Deploy URL | GitHub URL
```

For array fields (keyFeatures, techStack, members), split by `;` in your spreadsheet and convert to a JS array:
```js
// Excel cell: "Login; Dashboard; Analytics"
keyFeatures: ["Login", "Dashboard", "Analytics"],
```

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel detects Vite automatically.

### Option B — GitHub + Vercel dashboard

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo
3. Vercel auto-detects the framework as **Vite**
4. Click **Deploy** — done

Build settings (auto-detected, but verify):
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

### Updating after adding new teams

If connected to GitHub:
```bash
git add src/data/projects.js
git commit -m "add team X"
git push
```
Vercel redeploys automatically.

---

## Project Structure

```
project/
├── public/
│   ├── favicon.svg
│   └── thumbnails/          ← place team thumbnail images here
├── src/
│   ├── components/
│   │   ├── Header.jsx / .module.css
│   │   ├── Hero.jsx / .module.css
│   │   ├── FilterBar.jsx / .module.css
│   │   ├── ProjectGallery.jsx / .module.css
│   │   ├── ProjectCard.jsx / .module.css
│   │   ├── ProjectModal.jsx / .module.css
│   │   └── Footer.jsx / .module.css
│   ├── data/
│   │   └── projects.js      ← ALL team data lives here
│   ├── App.jsx
│   ├── App.module.css
│   ├── index.css            ← design tokens + global styles
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Design System

This site follows the **Cal.com** design language:
- White canvas `#ffffff`, black primary CTA `#111111`
- Light-gray cards `#f5f5f5`, dark footer `#101010`
- Inter typeface (600 weight + negative letter-spacing for headlines)
- Card radius 12px, button/input radius 8px, section gap 96px
- Max content width 1200px
