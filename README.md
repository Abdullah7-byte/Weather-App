# Weather App

A small React + Vite app that shows current weather for a searched city using the OpenWeather API.

Live dev: fast HMR with Vite, production builds with `vite build`.

Repository: https://github.com/Abdullah7-byte/weather-app

## Features

- Search for a city and see current temperature and weather conditions
- Responsive, minimal UI with a focused weather card
- Uses OpenWeather's Current Weather API

## Prerequisites

- Node.js 18+ (or compatible LTS)
- npm (or use `pnpm`/`yarn` as preferred)

## Setup

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file in the project root with your OpenWeather API key (do not commit this file):

```text
VITE_OPENWEATHER_KEY=your_openweather_api_key_here
```

You can copy `.env.example` and fill your key.

3. Run the dev server

```bash
npm run dev
```

Open http://localhost:5173 (or the port Vite reports) to view the app.

## Build & Preview

```bash
npm run build
npm run preview
```

## Notes & Best Practices

- Do not commit your API keys — keep them in local environment variables.
- The app expects `VITE_OPENWEATHER_KEY` to be available at `import.meta.env.VITE_OPENWEATHER_KEY`.
- `dist/` is ignored in `.gitignore` — deploy the `dist` output to your chosen static host (Netlify, Vercel, GitHub Pages, etc.).

## Contributing

PRs and issues are welcome. If you add features, please include tests or manual test steps.

## License

MIT

## Live Demo

[View the live app on Vercel](https://weather-app-two-delta-53.vercel.app/)

## Author

Abdullah — https://github.com/Abdullah7-byte

