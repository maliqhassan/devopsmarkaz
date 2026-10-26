# DevOps Markaz Tech — Website

Company website for [DevOps Markaz Tech](https://devopsmarkaztech.com), built with Next.js 16, React 19, Tailwind CSS 4, Motion (Framer Motion) and Lenis smooth scrolling.

Pages: Home, Services, Projects, About Us and Contact Us.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Contact form

Submissions are sent by `src/app/api/contact/route.ts` over SMTP. Copy `.env.example` to `.env.local` (or add the variables in your hosting dashboard) and fill in the mailbox credentials for `info@devopsmarkaztech.com`.

## Editing content

Contact details, services, projects, stats and FAQs all live in `src/lib/site.ts`.

- Website projects use a desktop screenshot in `public/projects/`.
- Mobile apps use an icon and phone screenshots in `public/projects/apps/`.
- Set `featured: true` to show a project on the home page.

Brand assets (logo and mark) are in `public/brand/`; theme colors are defined at the top of `src/app/globals.css`.
