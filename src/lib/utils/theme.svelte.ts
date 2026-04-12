import { browser } from '$app/environment';
import { ACCENT_OPTIONS } from './constants';

export type Theme = 'light' | 'dark' | 'system';
export type Accent = typeof ACCENT_OPTIONS[number];

const YEAR = 60 * 60 * 24 * 365;

function setCookie(key: string, value: string) {
    document.cookie = `${key}=${value}; path=/; max-age=${YEAR}; SameSite=Lax`;
}

function createTheme() {
    let current = $state<Theme>('system');
    let accent = $state<Accent>(ACCENT_OPTIONS[0]);

    const resolved = $derived.by((): 'light' | 'dark' => {
        if (current === 'light') return 'light';
        if (current === 'dark') return 'dark';
        if (!browser) return 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    return {
        get value(): Theme { return current; },
        get active(): 'light' | 'dark' { return resolved; },
        get accent(): Accent { return accent; },

        setTheme(v: Theme): void {
            current = v;
            if (browser) {
                setCookie('theme', v);
                document.documentElement.dataset.theme = resolved;
            }
        },

        setAccent(v: Accent): void {
            accent = v;
            if (browser) {
                setCookie('accent', v);
                document.documentElement.style.setProperty('--random-accent', `var(--${v})`);
            }
        },

        toggle(): void {
            const cycle: Record<Theme, Theme> = { dark: 'light', light: 'system', system: 'dark' };
            this.setTheme(cycle[current]);
        },

        init(serverTheme: Theme, serverAccent: Accent): void {
            current = serverTheme;
            accent = serverAccent;
        }
    };
}

export const theme = createTheme();