<script lang="ts">
	import { ACCENT_OPTIONS } from '$lib/utils/constants';
	import { capitalize } from '$lib/utils/custom_string';
	import { theme } from '$lib/utils/theme.svelte';
	import { ThemeDot } from '.';

	let { initialAccent = ACCENT_OPTIONS[0] } = $props();
	let selectedAccent = $state(initialAccent);

	$effect(() => {
		theme.setAccent(selectedAccent);
	});
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">sveltekit ts template</a></li>
		</ul>
	</nav>
	<ul>
		<li><ThemeDot /></li>
		<li>
			<select name="accent" id="accent" bind:value={selectedAccent}>
				{#each ACCENT_OPTIONS as accent (accent)}
					<option value={accent}>{capitalize(accent)}</option>
				{/each}
			</select>
		</li>
	</ul>
</header>

<style>
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	ul {
		display: flex;
		list-style: none;
		gap: var(--offset);
	}
	a {
		text-decoration: none;
		font-family: 'Xanh Mono';
		font-weight: bold;
		font-size: calc(var(--font-size) * 1.125);
	}
</style>
