import type { Handle } from '@sveltejs/kit';
import { ACCENT_OPTIONS } from '$lib/utils/constants';

const VALID_THEMES = ['light', 'dark', 'system'];

export const handle: Handle = async ({ event, resolve }) => {
  const rawTheme = event.cookies.get('theme') ?? 'system';
  const rawAccent = event.cookies.get('accent') ?? ACCENT_OPTIONS[0];

  const safeTheme = VALID_THEMES.includes(rawTheme) ? rawTheme : 'system';
  const safeAccent = ACCENT_OPTIONS.includes(rawAccent) ? rawAccent : ACCENT_OPTIONS[0];

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '<html',
        `<html data-theme="${safeTheme}" style="--random-accent: var(--${safeAccent})"`
      ),
  });
};