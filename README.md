# Random Users UI

A React + TypeScript app that fetches and displays random user profiles from a public API.

## What it does

Fetches random user data from [FreeAPI](https://freeapi.app) on load and renders them as a responsive grid of profile cards.

Each card shows: profile picture, name, username, email, phone, age, location, nationality, and registration date.

## Tech stack

- **React 19** with React Compiler enabled
- **TypeScript**
- **Vite** — dev server and build tool
- **Tailwind CSS v4** — utility-first styling

## Project structure

```
src/
├── types.d.ts          # UserData and ApiRes type definitions
├── App.tsx             # Root component — fetches data, renders grid
├── components/
│   └── UserCard.tsx    # Individual user profile card
└── main.tsx            # App entry point
```

## Getting started

```bash
npm install
npm run dev
```

## API

Data is fetched from:
```
GET https://api.freeapi.app/api/v1/public/randomusers
```

Response shape is typed via `ApiRes` and `UserData` in `src/types.d.ts`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
