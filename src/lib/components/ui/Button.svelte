<script>
	import { Spring } from 'svelte/motion';

	let {
		events = {},
		class: className = '',
		children,
		style: styles = '',
		type: btnType = 'primary'
	} = $props();

	const spring = new Spring(1, {
		stiffness: 0.75,
		damping: 0.3
	});

	function handlePointerDown(e) {
		spring.set(0.98);
		events?.onpointerdown?.(e);
	}

	function handlePointerUp(e) {
		spring.set(1);
		events?.onpointerup?.(e);
	}

	function handlePointerLeave(e) {
		spring.set(1);
		events?.onpointerleave?.(e);
	}
	const buttonTypeClass = $derived(
		{
			primary: 'background: var(--text);color: var(--background);',
			secondary:
				'background: var(--subtle-background);color: var(--text); border:0.75px solid var(--ui-empty-background)',
			tertiary:
				'background: none;color: var(--text); border:0.75px solid var(--ui-empty-background)',
			danger: 'background: var(--danger-background);color: white;'
		}[btnType] ?? 'background: var(--text);color: var(--background);'
	);
</script>

<button
	class="ui-button {className} no-select"
	style="transform: scale({spring.current});{buttonTypeClass};{styles}"
	onpointerdown={handlePointerDown}
	onpointerup={handlePointerUp}
	onpointerleave={handlePointerLeave}
	{...events}
>
	{@render children?.()}
</button>

<style>
	.ui-button {
		border: none;
		cursor: pointer;
		font-size: 13px;
		border-radius: var(--border-radius);
		touch-action: none;
		padding: var(--padding) calc(1.618 * var(--padding));
		transition: opacity var(--transition-delay);
	}

	.ui-button:active {
		opacity: 0.75;
	}
</style>
