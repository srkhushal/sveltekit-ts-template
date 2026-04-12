<script lang="ts">
	import { capitalize } from '$lib/utils/custom_string';
	import { theme } from '$lib/utils/theme.svelte';
</script>

<button
	onclick={() => theme.toggle()}
	title={capitalize(theme.value)}
	class="theme-dot no-select"
	class:system={theme.value === 'system'}
>
</button>

<style>
	button {
		cursor: pointer;
		border: none;
		background: var(--primary);
		width: var(--font-size);
		height: var(--font-size);
		flex-shrink: 0;
		transition: all 250ms;
		outline-offset: 2px;

		&.system {
			border-radius: 50%;
		}
		&:focus-visible {
			width: calc(0.85 * var(--font-size));
			height: calc(0.85 * var(--font-size));
		}
	}
</style>
