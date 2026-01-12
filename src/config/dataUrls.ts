/**
 * Data URL configuration for CredoCarbon website
 * 
 * Data Storage Strategy:
 * - PUBLIC READ: Google Cloud Storage (no auth required)
 *   Bucket: credocarbon-metadata (asia-south2 Delhi)
 *   
 * - ADMIN WRITE: Backend API (requires authentication)
 *   URL: https://credocarbon-website-backend-641001192587.asia-south2.run.app
 * 
 * To update data manually, use:
 * gcloud storage cp public/Data/registryData.json gs://credocarbon-metadata/
 * gcloud storage cp public/Data/insightsData.json gs://credocarbon-metadata/
 */

const GCS_BUCKET_URL = 'https://storage.googleapis.com/credocarbon-metadata';

// Cache buster to force refresh after CORS configuration update (can remove after 2026-01-13)
const CACHE_BUSTER = 'v=20260112';

// Backend API URL (requires authentication for write operations)
export const BACKEND_API_URL = 'https://credocarbon-website-backend-641001192587.asia-south2.run.app';

// Use GCS for production (public, no auth), local files for development
const isProduction = import.meta.env.PROD;

export const DATA_URLS = {
    // Public read endpoints (no auth required)
    registryData: isProduction
        ? `${GCS_BUCKET_URL}/registryData.json?${CACHE_BUSTER}`
        : '/Data/registryData.json',
    insightsData: isProduction
        ? `${GCS_BUCKET_URL}/insightsData.json?${CACHE_BUSTER}`
        : '/Data/insightsData.json',

    // Backend API endpoints (require authentication)
    api: {
        base: BACKEND_API_URL,
        auth: {
            login: `${BACKEND_API_URL}/api/auth/login`,
            me: `${BACKEND_API_URL}/api/auth/me`,
            verify: `${BACKEND_API_URL}/api/auth/verify`,
        },
        registries: {
            all: `${BACKEND_API_URL}/api/registries/all`,
            carbon: `${BACKEND_API_URL}/api/registries/carbon`,
            rec: `${BACKEND_API_URL}/api/registries/rec`,
            ets: `${BACKEND_API_URL}/api/registries/ets`,
        },
        insights: {
            all: `${BACKEND_API_URL}/api/insights/all`,
            carbon: `${BACKEND_API_URL}/api/insights/carbon`,
            rec: `${BACKEND_API_URL}/api/insights/rec`,
            trends: `${BACKEND_API_URL}/api/insights/trends`,
        },
    },
};

export default DATA_URLS;
