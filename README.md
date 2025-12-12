The goal of the project is to create the front-end part of a web application for TravelTrucks, a company that rents campers. The web application should include several pages, including a home page, a catalog page, and a page for each individual camper with reviews and a booking form.

Usage

Available Commands
npm run dev        — start development server
npm run build      — build project for production
npm run start      — run production build
npm run lint       — check code with linter

Project Structure

web-application-travel-trucks/
├── app/                                  * Next.js App Router pages
│   ├── catalog/                          * Catalog page
│   │   ├── NotFound.module.css           * Styles for not-found catalog state
│   │   └── page.tsx                      * Catalog main page
│   ├── error.tsx                         * Global error boundary
│   ├── globals.css                       * Global styles
│   ├── layout.tsx                        * Root layout component
│   ├── loading.tsx                       * Global loading state
│   ├── not-found.tsx                     * Global 404 page
│   ├── page.module.css                   * Home page styles
│   └── page.tsx                          * Home page
│
├── components/                           * Shared React components
│   ├── BookingDatePicker/                * Date picker for booking
│   ├── BookingForm/                      * Camper booking form
│   ├── CamperDetails/                    * Detailed camper info components
│   ├── CamperItem/                       * Camper card component
│   ├── CamperList/                       * Camper list rendering
│   ├── Features/                         * Camper features section
│   ├── Filters/                          * Catalog filters
│   ├── Footer/                           * Footer component
│   ├── Header/                           * Navigation header
│   ├── Reviews/                          * Camper reviews components
│   └── TanStackProvider/                 * React Query / TanStack provider
│
├── lib/                                  * Utilities and helper functions
├── public/                               * Static assets (images, icons)
├── store/                                * Zustand store (state management)
├── types/                                * TypeScript type definitions




Main Pages

/ — Home page with welcome section

/catalog — Camper catalog with filters

/catalog/[id] — Detailed camper information

Deployment

The project is optimized for deployment on Vercel:

Connect your GitHub repository to Vercel

Configure environment variables

Vercel will automatically build and deploy your project

Alternatively, you can use any hosting platform that supports Node.js.

Author

......
LinkedIn: (приховано)
GitHub: (приховано)

License

This project was created for educational purposes.

Happy travels with TravelTrucks! 🚐🌟
