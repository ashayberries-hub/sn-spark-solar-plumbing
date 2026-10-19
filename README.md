# SN Electrical & Plumbing

Website for SN Electrical and Plumbing — electrical, plumbing, and solar services
in Athlone, Cape Town, South Africa.

The site presents the business's services, explains how a quote works, and makes it
easy for customers to reach the business by phone, WhatsApp, or email.

## Pages

- `/` — home: services overview, why choose us, the four-step quote process, enquiry form
- `/electrical` — electrical services
- `/plumbing` — plumbing services
- `/solar` — solar and backup power services, with a gallery of recent installations
- `/about` — about the business
- `/contact` — enquiry form and direct contact details

All business details (phone number, email, address, service list) live in one file:
`src/lib/site.ts`. Edit that file to update contact information or the services
advertised across the whole site.

## Contact

- Phone / WhatsApp: 068 219 4245
- Email: snelectricalandplumbing@gmail.com
- Address: 6 St Mauri Street, Athlone, Cape Town, South Africa

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing under `src/routes`)
- TypeScript
- Tailwind CSS v4 (design tokens in `src/styles.css`)
- Vite

## Running locally

You need Node.js and npm.

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

The site is then served at the address the dev server prints in your terminal.

## Tests

```sh
npx vitest run
```

## Editing content

- Service descriptions and lists: `src/lib/site.ts`
- Page copy and section layout: `src/routes/*.tsx` and `src/components/site/`
- Photos of completed work: `src/assets/` (uploaded job photos are referenced from `src/lib/site.ts`)
- Colours, fonts, and spacing: `src/styles.css`

This repository is synced from Lovable. Changes made in the Lovable editor are committed here automatically.
