import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

function createTheme() {
    let current = $state<Theme>(
        (browser ? localStorage.getItem('theme') as Theme : 'system') ?? 'system'
    );

    const resolved = $derived.by((): Theme => {
        if (current !== 'system') return current;
        if (!browser) return 'dark';
        return 'system';
    });

    return {
        get value(): Theme { return current; },
        get active(): Theme { return resolved; },

        set(v: Theme): void {
            current = v;
            if (browser) {
                localStorage.setItem('theme', v);
                document.documentElement.dataset.theme = resolved;
            }
        },

        toggle(): void {
            const cycle: Record<Theme, Theme> = {
                dark: 'light',
                light: 'system',
                system: 'dark'
            };
            this.set(cycle[current]);
        },

        init(): void {
            if (browser) {
                document.documentElement.dataset.theme = resolved;
            }
        }
    };
}

export const theme = createTheme();