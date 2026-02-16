<script>
	import { theme } from '$lib/utils/theme.svelte';
</script>

<button class="no-select" title="Toggle Theme" onclick={() => theme.toggle()}>
	<span title={theme.active} class="theme-dot" class:system={theme.active === 'system'}> </span>
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
	}

	.theme-dot {
		background: var(--text);
		width: var(--font-size);
		height: var(--font-size);
		flex-shrink: 0;
		transition: all 250ms;
		&.system {
			border-radius: 50%;
		}
	}
</style>
