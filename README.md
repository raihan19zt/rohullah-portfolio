# Rohullah Raihan Portfolio

A premium, responsive React portfolio for a full-stack developer specializing in enterprise web applications, ASP.NET Web Forms, SQL Server, Laravel, React, legacy modernization, and production support.

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Edit your content

Most website content is centralized in:

```text
src/data/portfolio.js
```

Update these before publishing:

1. Email, WhatsApp, LinkedIn, GitHub, résumé, and domain links.
2. Editable statistics with real, verifiable numbers.
3. Placeholder testimonials with approved real feedback.
4. Project details, links, and non-confidential screenshots.
5. `index.html` canonical URL, Open Graph URL, and image.

## Project images

Create this folder and add optimized screenshots:

```text
public/projects/
```

Suggested filenames already referenced in the data file:

- `amc-system.jpg`
- `registration-portal.jpg`
- `admin-dashboard.jpg`
- `custom-system.jpg`

The current interface uses a built-in CSS dashboard illustration, so missing screenshots will not break the visible cards.

## Contact form

The form includes client-side validation. Before publishing, connect the successful submission to one of these:

- Your own API endpoint
- Formspree
- EmailJS
- Netlify Forms
- A Laravel or ASP.NET backend

Do not publish the form as fully operational until a backend or email service is connected.

## Deployment

Good deployment options include Vercel, Netlify, Cloudflare Pages, or a server with Node build support. Run `npm run build` and deploy the `dist` directory.
