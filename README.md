# TravelTrucks — Front-End Web Application

![Tech Stack](https://img.shields.io/badge/Tech%20Stack-Next.js%20%7C%20React%20%7C%20TypeScript-blue)

![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)

![License](https://img.shields.io/badge/License-Educational-yellow)


The goal of the project is to create the front-end part of a web application for **TravelTrucks**, a company that rents campers. The web application should include several pages, including a home page, a catalog page, and a page for each individual camper with reviews and a booking form.


*******************************************************************************

## The application includes:
- a **home page**
- a **catalog page**
- **individual camper pages** with reviews and a booking form

---

##  Usage

### Available Commands

```bash
npm run dev        — start development server
npm run build      — build project for production
npm run start      — run production build
npm run lint       — check code with linter
```


### Project Structure
```bash
web-application-travel-trucks/
├── app/                                  * Next.js App Router pages
│   ├── catalog/                          * Catalog page
|   |   ├── [id]
|   |   |    └── page.tsx                 * Camper page by `id`      
│   │   ├── pageCatalog.module.css        * Styles for catalog page
│   │   └── page.tsx                      * Catalog main page
|   ├── NotFound.module.css               * Styles for not-found catalog state
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
```


### Main Pages
Route	Description
```bash
`/`             	Home page with welcome section
`/catalog`	        Camper catalog with filters
`/catalog/[id]` 	Detailed camper information
```

### Deployment
```bash
The project is optimized for deployment on Vercel:
Connect your GitHub repository to Vercel
Configure environment variables
Vercel will automatically build and deploy your project
Alternatively, you may use any hosting platform supporting Node.js.
```
###  Author
```bash
HAPIEIEV ANDRII
```
### License
```bash
This project was created for educational purposes.
```
