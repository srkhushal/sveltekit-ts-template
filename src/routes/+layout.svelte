<script>
	import { onMount } from 'svelte';
	import '../styles/app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { theme } from '$lib/utils/theme.svelte';

	let { children } = $props();
	onMount(() => {
		theme.init();
	});
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
