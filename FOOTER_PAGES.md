# Footer Pages Structure

This document outlines the organization of footer-related pages in the CredoCarbon website.

## 📁 Folder Structure

```
src/
├── pages/
│   ├── product/          # Product-related pages
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── RegistriesPage.tsx
│   │   └── API.tsx
│   │
│   ├── company/          # Company information pages
│   │   ├── AboutUsPage.tsx
│   │   ├── Careers.tsx
│   │   ├── Blog.tsx
│   │   └── Press.tsx
│   │
│   ├── resources/        # Resource and support pages
│   │   ├── Documentation.tsx
│   │   ├── HelpCenter.tsx
│   │   ├── Community.tsx
│   │   └── Webinars.tsx
│   │
│   └── legal/            # Legal documents
│       ├── TermsOfService.tsx
│       ├── PrivacyPolicy.tsx
│       ├── CookiePolicy.tsx
│       └── Compliance.tsx
│
└── routes/               # Route configurations
    ├── productRoutes.tsx
    ├── companyRoutes.tsx
    ├── resourceRoutes.tsx
    └── legalRoutes.tsx
```

## 🗺️ Route Mapping

### Product Routes (`/routes/productRoutes.tsx`)
- `/features` → Features page
- `/pricing` → Pricing plans
- `/registries` → Registry integrations
- `/api` → API documentation

### Company Routes (`/routes/companyRoutes.tsx`)
- `/about-us` → About Us page
- `/careers` → Job listings
- `/blog` → Blog articles
- `/press` → Press releases and media

### Resource Routes (`/routes/resourceRoutes.tsx`)
- `/docs` → Documentation hub
- `/help` → Help Center with FAQs
- `/community` → Community channels
- `/webinars` → Webinar library

### Legal Routes (`/routes/legalRoutes.tsx`)
- `/terms` → Terms of Service
- `/privacy` → Privacy Policy
- `/cookies` → Cookie Policy
- `/compliance` → Compliance & Certifications

## 🎨 Design Consistency

All pages follow a consistent design pattern:
- Hero section with category badge
- Gradient backgrounds with animated blurs
- Color-coded by category:
  - **Product**: Emerald/Teal
  - **Company**: Emerald/Teal
  - **Resources**: Blue/Cyan/Purple/Orange (varies by page)
  - **Legal**: Neutral slate tones

## 🔧 Adding New Pages

To add a new footer page:

1. Create the page component in the appropriate folder (`src/pages/[category]/`)
2. Import and add the route in the corresponding route file (`src/routes/[category]Routes.tsx`)
3. Update the Footer component navigation links if needed

Example:
```tsx
// In src/routes/productRoutes.tsx
import NewPage from "../pages/product/NewPage";

export const productRoutes = (
  <>
    {/* existing routes */}
    <Route path="/new-page" element={<NewPage />} />
  </>
);
```

## 📝 Notes

- All routes are organized in separate configuration files to keep `App.tsx` clean
- Footer navigation links use React Router's `<Link>` component for client-side routing
- Pages are separated by category for better organization and maintainability
