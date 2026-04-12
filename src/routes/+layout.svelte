<script lang="ts">
	import { onMount } from 'svelte';
	import { theme } from '$lib/utils/theme.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../styles/app.css';

	let { children, data } = $props();

	onMount(() => {
		theme.init(data.theme, data.accent);
	});
</script>

<div class="sticky">
	<Header initialAccent={data.accent} />
</div>
<main>{@render children()}</main>
<Footer />

<style>
	.sticky {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: var(--background);
		border-bottom: 1px solid var(--faded-secondary-blur);
		padding: calc(var(--offset) * 0.35) var(--offset);
	}
	main {
		margin-top: 2.25rem;
	}
</style>
