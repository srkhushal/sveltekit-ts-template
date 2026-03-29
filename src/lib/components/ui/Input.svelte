<!-- DONT USE THIS. JUST USE THESE STYLES /CLASSES -->
<script>
	import X from '$lib/icons/X.svelte';

	let val = $state('');
</script>

<div class="input-wrapper">
	<input bind:value={val} class="input-element" placeholder="text012" type="text" name="inp" />
	{#if val.length}
		<button onclick={() => (val = '')} id="clear">
			<X
				options={{
					width: 'var(--font-size)',
					height: 'var(--font-size)',
					stroke: 'var(--ui-empty-background)'
				}}
			/>
		</button>
	{/if}
</div>

<style>
	.input-wrapper {
		opacity: 1;
		position: relative;
	}
	.input-element {
		background: none;
		border-radius: calc(0.85 * var(--border-radius));
		min-height: 48px;
		border: 1px solid var(--ui-empty-background);
		width: 100%;
		outline: none;
		padding-inline-start: var(--padding);
		&:focus-visible,
		&:focus {
			background: var(--subtle-background);
		}
	}
	#clear {
		position: absolute;
		top: 50%;
		border: none;
		right: var(--padding);
		transform: translate(0, -50%);
		border-radius: 50%;
		width: calc(var(--font-size) * 1.5);
		height: calc(var(--font-size) * 1.5);
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		color: var(--text);
		&:active {
			opacity: 0.75;
		}
	}
</style>
