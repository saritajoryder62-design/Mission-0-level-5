# Marketing Association NZ

A single-page marketing news site built with React and Vite. It shows a header with a mobile menu, a hero with a search box, a responsive grid of news cards, and a footer. Styling uses CSS Modules, so each component keeps its own scoped styles.

This is the Mission 0 project for Mission Ready Aotearoa.

## Tech stack

- React 19
- Vite 8 with `@vitejs/plugin-react`
- CSS Modules (one `.module.css` file per component)
- Oxlint for linting

## Getting started

```bash
npm install
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

| Script            | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server with HMR        |
| `npm run build`   | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run Oxlint                           |

## Project structure

```text
src/
  App.jsx                  Page layout: Header, Hero, Cardgrid, Footer
  main.jsx                 React entry point
  App.css, index.css       Global styles
  Components/
    Header.jsx + Header.module.css
    Hero.jsx + hero.module.css
    Cardgrid.jsx + Cardgrid.module.css
    Footer.jsx + Footer.module.css
  assets/
    data/articles.js       Article data used by Cardgrid
    logo.png, *.jpg, hero-bg.webp
```

## Components

- **Header**: logo, brand name, and nav links (News, Resources, Blog) with a Login button. On small screens the burger button toggles the menu. Open state is kept with `useState` and applies the `navOpen` class.
- **Hero**: headline and a search form. The form currently calls `preventDefault()` and does not filter anything yet.
- **Cardgrid**: reads `articles` from `src/assets/data/articles.js` and renders one `<article>` card per item.
- **Footer**: logo, short description, Explore links, contact details and copyright.

## How CSS Modules are used

Each component imports its stylesheet as an object and applies classes through it:

```jsx
import styles from "./Cardgrid.module.css";

<div className={styles.grid}>...</div>
```

Vite rewrites each class name to a unique one at build time, so `.title` in one component can never clash with `.title` in another. Conditional classes are combined with a template string, as in the Header:

```jsx
<nav className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav}>
```

## Responsive card grid

The grid in `Cardgrid.module.css` needs no media queries:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
```

- `minmax(250px, 1fr)`: every column is at least 250px wide and shares leftover space equally.
- `auto-fit`: the browser fits as many columns as the container allows. When the screen shrinks, cards wrap onto new rows, down to a single column on phones.
- Card images keep a 4:3 ratio with `aspect-ratio` and `object-fit: cover`.

## Editing content

Add, remove or change news cards in `src/assets/data/articles.js`. Each article has this shape:

```js
{
  id: 1,
  title: "Cloud tools for every Marketing team",
  subtitle: "Digital 14 october 2026",
  image: pinkImg,   // imported from src/assets
  alt: "person using a tablet in front of a neon cloud",
}
```

Give every article a unique `id`, since it is used as the React `key`. Always write a meaningful `alt` for the image.

## Credits

Images from Pexels.
