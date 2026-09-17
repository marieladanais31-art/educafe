import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.asociacioneducafe.org';
  const lastModified = new Date();

  const routes = [
    '',
    '/qui-som',
    '/bruixola',
    '/voluntariat',
    '/donar',
    '/proteccio-infancia',
    '/politica-de-privacidad',
    '/es',
    '/es/quienes-somos',
    '/es/proyecto-bruixola',
    '/es/voluntariado',
    '/es/donar',
    '/es/proteccion-infancia',
    '/es/politica-de-privacidad',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' || route === '/es' ? 1.0 : 0.8,
  }));
}
