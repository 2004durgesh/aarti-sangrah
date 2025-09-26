import { defineI18n } from 'fumadocs-core/i18n';
import type { I18nConfig } from 'fumadocs-core/i18n';

export const i18n: I18nConfig = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'hi', 'mr'],
  fallbackLanguage: 'en',
  parser: 'dir',
   hideLocale: 'default-locale',
});
