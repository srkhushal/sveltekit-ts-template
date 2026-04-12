import type { LayoutServerLoad } from './$types';
import { ACCENT_OPTIONS } from '$lib/utils/constants';
import type { Theme } from '$lib/utils/theme.svelte';

const VALID_THEMES = ['light', 'dark', 'system'];

export const load: LayoutServerLoad = ({ cookies }) => {
    const rawTheme = cookies.get('theme') ?? 'system';
    const rawAccent = cookies.get('accent') ?? ACCENT_OPTIONS[0];

    return {
        theme: (VALID_THEMES.includes(rawTheme) ? rawTheme : 'system') as Theme,
        accent: ACCENT_OPTIONS.includes(rawAccent) ? rawAccent : ACCENT_OPTIONS[0],
    };
};