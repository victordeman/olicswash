# OLICS WASH - Professional Laundry & Cleaning Services

This is a full-stack web platform for OLICS WASH, based in Port Harcourt, Nigeria.

## Technologies
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Prisma + PostgreSQL
- **Authentication:** Auth.js (NextAuth v5)
- **Icons:** Lucide React

## Getting Started

### 1. Clone the repository and install dependencies
```bash
npm install
```

### 2. Environment Setup
Copy the `.env.example` file to `.env` and fill in the required values.
```bash
cp .env.example .env
```

### 3. Database Setup
Initialize the database using Prisma.
```bash
npx prisma db push
```

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `app/`: Next.js App Router pages and API routes.
- `components/`: Reusable UI components (shadcn/ui, layout, etc.).
- `lib/`: Utility functions and database client.
- `prisma/`: Database schema and migrations.
- `public/`: Static assets (images, flyers).
- `types/`: TypeScript definitions and declarations.

## Key Integrations (Foundations Ready)
- **Paystack:** Configuration placeholders for Nigerian payment gateway.
- **WhatsApp Business API:** Webhook foundation and floating chat button.
- **Auth.js:** Role-based access control (Admin/Customer).
