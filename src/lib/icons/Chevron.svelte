<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';

	const defaultOptions: SVGAttributes<any> = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		fill: 'none',
		stroke: 'currentColor',
		'stroke-width': '2',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	};
	let { options = {}, direction = 'left' } = $props();
</script>

<svg {...defaultOptions} {...options}>
	{#if !direction}
		<path />
	{:else if direction === 'left'}
		<path d="m15 18-6-6 6-6" />
	{:else if direction === 'right'}
		<path d="m9 18 6-6-6-6" />
	{:else if direction === 'up'}
		<path d="m18 15-6-6-6 6" />
	{:else if direction === 'down'}
		<path d="m6 9 6 6 6-6" />
	{:else if direction === 'lr'}
		<path d="m9 7-5 5 5 5" /><path d="m15 7 5 5-5 5" />
	{:else if direction === 'ud'}
		<path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
	{/if}
</svg>
