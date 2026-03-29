<script>
	import { UIButton, UIInput, UISlider } from '$lib/components';
	const sample_buttons = [
		{ label: 'primary', emoji: '👾' },
		{ label: 'secondary', emoji: '✌️' },
		{ label: 'tertiary', emoji: '☘️' },
		{ label: 'danger', emoji: '⚠️' }
	];
</script>

<h1>Helllooooooo,</h1>

<div class="btn-wrapper">
	{#each sample_buttons as { label, emoji } (emoji)}
		<UIButton type={label}>
			<span style="display: flex; gap:8px; align-items: center;">
				<span style="text-transform: capitalize;">{label}</span>
				<span style="font-size: 115%;">{emoji}</span>
			</span>
		</UIButton>
	{/each}
</div>

<div style="width: min(100%,400px); margin-bottom: 3rem;">
	<UISlider current={0} min={0} max={100} />
</div>

<div style="width: min(100%,400px);">
	<UIInput />
</div>

<style>
	.btn-wrapper {
		margin-block: 1rem 3rem;
		width: min(400px, 100%);
		display: flex;
		flex-wrap: wrap;
		gap: var(--offset);
	}
</style>
