<script>
	let { children } = $props();
</script>

<ul>
	<li>
		<a href="/test/test-a">Test A</a>
	</li>
	<li>
		<a href="/test/test-b">Test B</a>
	</li>
	<li>
		<a href="/test/test-c">Test C</a>
	</li>
</ul>
{@render children()}

<style>
	ul {
		display: flex;
		list-style: none;
		gap: var(--offset);
	}
</style>
