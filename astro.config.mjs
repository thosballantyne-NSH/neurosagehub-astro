import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// Run: npm install @astrojs/sitemap  (then uncomment the next two lines)
// import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://neurosagehub.com',
  integrations: [
    tailwind(),
    // sitemap(),  // uncomment after: npm install @astrojs/sitemap
  ],
  redirects: {
    // Blog → Resource Center
    '/the-blog': '/resources',
    '/the-blog/': '/resources',

    // Original blog post URLs → new resource hub articles
    '/5-fine-motor-activities-you-can-do-today': '/resources/regulation/5-fine-motor-activities-you-can-do-today',
    '/5-fine-motor-activities-you-can-do-today/': '/resources/regulation/5-fine-motor-activities-you-can-do-today',
    '/vestibular-activities-that-calm-and-center': '/resources/sensory-processing/vestibular-activities-that-calm-and-center',
    '/vestibular-activities-that-calm-and-center/': '/resources/sensory-processing/vestibular-activities-that-calm-and-center',
    '/unlocking-potential-how-games-drive-neurodevelopment': '/resources/regulation/unlocking-potential-how-games-drive-neurodevelopment',
    '/unlocking-potential-how-games-drive-neurodevelopment/': '/resources/regulation/unlocking-potential-how-games-drive-neurodevelopment',

    // Launch-era blog posts (not indexed) → relevant pages
    '/a-new-era-of-neurodevelopmental-support-is-coming-to-the-classroom-and-you-are-invited-to-lead-the-way': '/for-practitioners',
    '/a-new-era-of-neurodevelopmental-support-is-coming-to-the-classroom-and-you-are-invited-to-lead-the-way/': '/for-practitioners',
    '/a-new-kind-of-support-is-coming-for-families-navigating-autism-and-you-can-be-among-the-first-to-access-it': '/resources',
    '/a-new-kind-of-support-is-coming-for-families-navigating-autism-and-you-can-be-among-the-first-to-access-it/': '/resources',
    '/the-future-of-autism-care-is-coming-and-you-are-invited-to-shape-it': '/for-practitioners',
    '/the-future-of-autism-care-is-coming-and-you-are-invited-to-shape-it/': '/for-practitioners',

    // Old WordPress page URLs → Astro equivalents
    '/caregivers-sign-up':    '/family-sign-up',
    '/caregivers-sign-up/':   '/family-sign-up',
    '/get-started':            '/start-here',
    '/get-started/':           '/start-here',
    '/parents-caregivers':     '/for-parents',
    '/parents-caregivers/':    '/for-parents',
    '/parents-and-caregivers': '/for-parents',
    '/parents-and-caregivers/':'/for-parents',
    '/practitioner-signup':    '/for-practitioners',
    '/practitioner-signup/':   '/for-practitioners',
    '/practitioners':          '/for-practitioners',
    '/practitioners/':         '/for-practitioners',
    '/onboarding':             'https://app.neurosagehub.com/login',
    '/onboarding/':            'https://app.neurosagehub.com/login',

    // WordPress pages without Astro equivalents → best match
    '/the-science':            '/resources',
    '/the-science/':           '/resources',
    '/educators':              '/for-practitioners',
    '/educators/':             '/for-practitioners',
    '/demo-request':           '/for-practitioners',
    '/demo-request/':          '/for-practitioners',
  },
});
