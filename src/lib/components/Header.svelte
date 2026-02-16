<script>
	import { ThemeDot } from '.';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>
	<ThemeDot />
</header>

<style>
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-inline: auto;
		padding-inline: var(--offset);
	}
	ul {
		display: flex;
		list-style: none;
		gap: var(--offset);
	}
</style>
