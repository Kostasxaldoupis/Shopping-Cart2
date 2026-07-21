# Football Store

A modern football e-commerce application built with Next.js.

## Live Demo

You can try the project here:

https://your-vercel-url.vercel.app

The checkout uses Stripe Test Mode. To complete a test purchase, use the following test card:

**Card Number:** `4242 4242 4242 4242`  
**Expiration Date:** Any future date  
**CVC:** Any 3 digits  
**ZIP/Postal Code:** Any valid value

## Features

- Product catalog
- Dynamic product pages
- Shopping cart
- Stripe Checkout integration
- Responsive design
- Skeleton loading states

## Built With

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Stripe

## Installation

Clone the repository:

```bash
git clone https://github.com/kostasxaldoupis/football-store.git
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add the required environment variables:

```env
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## License

This project was created for learning and portfolio purposes.