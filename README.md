This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://192.168.1.68:3002](http://192.168.1.68:3002) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Monarc University Applications

The founding cohort form posts to `/api/university/apply` and saves applications to Airtable when these environment variables are present:

```bash
AIRTABLE_PERSONAL_ACCESS_TOKEN=
AIRTABLE_UNIVERSITY_BASE_ID=
AIRTABLE_UNIVERSITY_TABLE_NAME=Applications
```

`AIRTABLE_UNIVERSITY_TABLE_NAME` can be either the visible table name or the Airtable table ID that starts with `tbl`.

Optional email notifications use Resend:

```bash
RESEND_API_KEY=
UNIVERSITY_APPLICATION_NOTIFY_EMAIL=
UNIVERSITY_APPLICATION_FROM_EMAIL=Monarc University <onboarding@resend.dev>
```

If the Resend variables are missing, applications still save to Airtable and email is skipped.

Expected Airtable fields:

- `Name`
- `Email`
- `Goal`
- `Track`
- `Skill Level`
- `Readiness / Budget`
- `Project Idea`
- `Source`
- `Status`
- `Submitted At`

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
