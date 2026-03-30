<script>
	import { theme } from '$lib/utils/theme.svelte';
</script>

<button
	onclick={() => theme.toggle()}
	title={theme.active}
	class="no-select theme-dot"
	class:system={theme.active === 'system'}
>
</button>

<style>
	button {
		cursor: pointer;
		border: none;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 8px;
		background: none;
		flex-wrap: wrap-reverse;
		position: relative;
		width: var(--font-size);
		height: var(--font-size);
		background: var(--primary);
		outline-offset: 2px;
		&.system {
			border-radius: 50%;
		}
		&:focus-visible {
			transform-origin: center;
			width: calc(0.85 * var(--font-size));
			height: calc(0.85 * var(--font-size));
		}
	}

	.theme-dot {
		flex-shrink: 0;
		transition: all 250ms;
	}
</style>
