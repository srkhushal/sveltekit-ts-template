<script>
	import * as state from '$app/state';
	import * as paths from '$app/paths';
	import * as stores from '$app/stores';
	import * as navigation from '$app/navigation';
	import * as forms from '$app/forms';
	import * as server from '$app/server';
</script>

<h1>Test</h1>
<pre>{JSON.stringify({ paths }, null, 0)}</pre>
<pre>{JSON.stringify({ stores }, null, 0)}</pre>
<pre>{JSON.stringify({ navigation }, null, 0)}</pre>
<pre>{JSON.stringify({ forms }, null, 0)}</pre>
<pre>{JSON.stringify({ server }, null, 0)}</pre>
<pre>{JSON.stringify({ state }, null, 2)}</pre>
