import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enPlatform from './locales/en/platform.json';
import enBuyers from './locales/en/buyers.json';
import enVvb from './locales/en/vvb.json';

// Arabic translations
import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arAbout from './locales/ar/about.json';
import arPlatform from './locales/ar/platform.json';
import arBuyers from './locales/ar/buyers.json';
import arVvb from './locales/ar/vvb.json';

const resources = {
    en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        platform: enPlatform,
        buyers: enBuyers,
        vvb: enVvb,
    },
    ar: {
        common: arCommon,
        home: arHome,
        about: arAbout,
        platform: arPlatform,
        buyers: arBuyers,
        vvb: arVvb,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        defaultNS: 'common',
        ns: ['common', 'home', 'about', 'platform', 'buyers', 'vvb'],

        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false,
        },
    });

// LTR-only routes (footer pages that should not switch to RTL)
// Registries (/registries) and About Us (/about-us) are EXCLUDED - they respond to RTL
const LTR_ONLY_ROUTES = [
    '/pricing',
    '/insights',
    '/careers',
    '/blog',
    '/docs',
    '/help',
    '/faq',
    '/terms',
    '/privacy',
    '/cookies',
    '/compliance',
    '/superadmin',
    '/admin'
];

// Helper to check if current route is LTR-only
export const isLtrOnlyRoute = (pathname: string): boolean => {
    return LTR_ONLY_ROUTES.some(route => pathname === route || pathname.startsWith(route + '/'));
};

// Function to update document direction based on language and route
export const updateDirection = (lang: string) => {
    const currentPath = window.location.pathname;

    // Force LTR for specific routes regardless of language
    const dir = isLtrOnlyRoute(currentPath) ? 'ltr' : (lang === 'ar' ? 'rtl' : 'ltr');

    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', lang);

    // Add/remove Arabic font class (keep font for text even on LTR pages)
    if (lang === 'ar') {
        document.body.classList.add('font-arabic');
    } else {
        document.body.classList.remove('font-arabic');
    }
};

// Initialize direction on load
i18n.on('languageChanged', updateDirection);

// Set initial direction
updateDirection(i18n.language || 'en');

export default i18n;
