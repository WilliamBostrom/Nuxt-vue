# NuxtHome - Recept & Todo-applikation

En modern webbapplikation byggd med Nuxt 3 som kombinerar ett receptbibliotek med en todo-lista. Applikationen erbjuder en sömlös användarupplevelse med både ljust och mörkt tema.

## Funktioner

- **Receptbibliotek**

  - Bläddra bland recept
  - Detaljerad receptvy med ingredienser och instruktioner
  - Favoritmarkera recept
  - Sökfunktion för recept
  - Kalorieräknare och tillagningstid

- **Todo-lista**

  - Lägg till och ta bort todos
  - Markera todos som klara
  - Filtrera todos
  - Lokal lagring av todos

- **Användarfunktioner**
  - Autentisering via Supabase
  - Magisk länk-inloggning
  - Persistenta användarinställningar

## Teknisk Stack

- **Frontend**: Nuxt 3, Vue 3, TypeScript
- **Styling**: Tailwind CSS
- **Autentisering**: Supabase
- **State Management**: Vue Composition API
- **API**: Server API Routes (Nuxt)

## Installation

1. Klona repot:

```bash
git clone [repo-url]
```

2. Installera beroenden:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

3. Starta utvecklingsservern:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

4. Öppna [http://localhost:3000](http://localhost:3000)

## Miljövariabler

Skapa en `.env` fil i root-mappen med följande variabler:

```
SUPABASE_URL=din_supabase_url
SUPABASE_KEY=din_supabase_nyckel
BASE_URL=http://localhost:3000
```

## Byggd Med

- [Nuxt 3](https://nuxt.com/) - Vue-baserat ramverk
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS-ramverk
- [Supabase](https://supabase.com/) - Backend som tjänst
- [TypeScript](https://www.typescriptlang.org/) - JavaScript med typer

## Projektstruktur

- `/components` - Återanvändbara Vue-komponenter
- `/pages` - Applikationens routes/sidor
- `/server/api` - API-endpoints
- `/composables` - Återanvändbara Vue-composables
- `/types` - TypeScript typedefinitioner
- `/assets` - Statiska resurser

## Features i Utveckling

- [ ] Receptkategorier
- [ ] Användarspecifika receptsamlingar
- [ ] Delning av recept
- [ ] Näringsvärdeskalkylator
- [ ] Veckomenyplanerare

## Produktion

Bygg applikationen för produktion:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Förhandsgranska produktionsbygget lokalt:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Se [deployeringsdokumentationen](https://nuxt.com/docs/getting-started/deployment) för mer information.

## Licens

Detta projekt är licensierat under MIT-licensen.
