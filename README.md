# Synopp - Building Smarter Software Solutions

![Synopp Banner](/public/icons/logo.svg)

## 📋 Description

Synopp is a modern software development platform offering customized solutions for businesses. This repository contains the source code for Synopp's corporate website, developed with Next.js 14 and Tailwind CSS.

## ✨ Features

- 🎨 Modern and elegant design with a dark theme
- 📱 Fully responsive for all devices
- 🚀 Optimized for performance and SEO
- 💌 Functional contact form with email sending
- ✨ Smooth animations and transitions
- 🧩 Modular and reusable components

## 🛠️ Technologies

- **Frontend:**
  - [Next.js 14](https://nextjs.org/) - React framework
  - [Tailwind CSS](https://tailwindcss.com/) - CSS framework
  - [Framer Motion](https://www.framer.com/motion/) - Animation library
  - [Lucide React](https://lucide.dev/) - SVG icons

- **Backend:**
  - [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - API endpoints
  - [Resend](https://resend.com/) - Email sending service

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/synopp-website.git
   cd synopp-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   1. Create a `.env.local` file in the project root.
   2. Add the following variable:
      ```plaintext
      RESEND_API_KEY=your_resend_api_key
      ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```plaintext
synopp-website/
├── app/                    # Next.js App Router main directory
│   ├── api/                # API Routes
│   │   └── send-email/     # Email sending endpoint
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Main layout
│   └── page.tsx            # Main page
├── components/             # Reusable components
│   ├── contact-section.tsx # Contact section
│   ├── dashboard-preview.tsx # Dashboard preview
│   ├── features-section.tsx # Features section
│   ├── footer.tsx          # Footer
│   ├── hero-section.tsx    # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── process-section.tsx # Process section
│   ├── svg-components.tsx  # SVG components
│   └── technologies-section.tsx # Technologies section
├── public/                 # Static files
├── .env.local              # Local environment variables
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Configuration

### Environment Variables

For the contact form to work properly, you need to configure the following environment variable:

- `RESEND_API_KEY`: API key from [Resend](https://resend.com/) for email sending.

### Customization

You can easily customize the site by modifying:

- **Colors**: Edit the color variables in `tailwind.config.js`.
- **Content**: Update the text in the corresponding components.
- **Images**: Replace the SVGs in `svg-components.tsx` with your own images.

## 🚢 Deployment

The project is optimized to be deployed on [Vercel](https://vercel.com/):

1. Create a Vercel account if you don't have one.
2. Import your GitHub/GitLab/Bitbucket repository.
3. Configure the environment variables in the Vercel dashboard.
4. Done! Vercel will automatically deploy your application.

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👥 Credits

Designed and developed with ❤️ by Synopp.