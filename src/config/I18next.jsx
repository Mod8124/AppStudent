import { languages } from '../utils/translations/languages';

const DETECTION_OPTIONS = {
  order: ['navigator'],
};

export const i18nextConfig = {
  debug: true,
  fallbackLng: 'en',
  detection: DETECTION_OPTIONS,
  resources: languages,
};
