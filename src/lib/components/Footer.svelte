<script>
	const date = new Date();
</script>

<footer>
	<span class="app-f">
		<span style="user-select: none;">
			{date.getFullYear()}
		</span>
	</span>
</footer>

<style>
	footer {
		width: 100%;
		margin-inline: auto;
		padding: var(--offset);
	}
	.app-f {
		font-size: calc(var(--font-size) * 0.75);
		opacity: 0.5;
		font-family: 'cousine';
	}
</style>
